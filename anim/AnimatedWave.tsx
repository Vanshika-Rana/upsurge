"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ComplexWave() {
	const waveRef = useRef<THREE.Mesh>(null);

	useFrame(({ clock }) => {
		if (waveRef.current) {
			const time = clock.getElapsedTime();
			const positions =
				waveRef.current.geometry.attributes.position.array;

			for (let i = 0; i < positions.length; i += 3) {
				const x = positions[i];
				positions[i + 1] =
					Math.sin(x * 2 + time) * 0.2 + Math.sin(x * 3 + time) * 0.1;
			}

			waveRef.current.geometry.attributes.position.needsUpdate = true;
		}
	});

	return (
		<mesh
			ref={waveRef}
			position={[0, 0, 0]}
			rotation={[-0.5 * Math.PI, 0, 0]}>
			<planeGeometry args={[10, 10, 100, 100]} />
			<meshStandardMaterial
				color='#00b3ff'
				wireframe={false}
				side={THREE.DoubleSide}
				opacity={0.7}
				transparent={true}
			/>
		</mesh>
	);
}

export default function AnimatedWave() {
	return (
		<Canvas
			style={{ height: "100vh", width: "100%" }}
			camera={{ position: [0, 3, 5], fov: 75 }}>
			<ambientLight intensity={0.5} />
			<directionalLight position={[5, 5, 5]} />
			<ComplexWave />
		</Canvas>
	);
}
