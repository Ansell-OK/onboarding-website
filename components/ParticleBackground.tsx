import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const ParticleBackground: React.FC = () => {
  // Reduced count slightly for better mobile performance while maintaining density
  const count = 1500;
  const mesh = useRef<THREE.Points>(null!);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const d = 12; // Increased spread slightly
      const x = (Math.random() - 0.5) * d;
      const y = (Math.random() - 0.5) * d;
      const z = (Math.random() - 0.5) * d;
      positions.set([x, y, z], i * 3);
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const { clock, mouse } = state;
    const time = clock.getElapsedTime();
    
    if (mesh.current) {
      // Gentle continuous rotation
      mesh.current.rotation.y = time * 0.03;
      
      // Subtle parallax effect based on mouse position
      // We use lerping for smoothness would be ideal, but simple mapping works for this style
      const targetX = -mouse.y * 0.1;
      const targetY = mouse.x * 0.1;
      
      mesh.current.rotation.x += (targetX - mesh.current.rotation.x) * 0.05;
      mesh.current.rotation.y += (targetY - mesh.current.rotation.y) * 0.05;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#00f3ff"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.5}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};