'use client'
import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Monitor() {

  return (
    <group>
      {/* Temporary basic monitor shape using basic Three.js geometries */}
      <mesh position={[0, 0, 0]}>
        {/* Monitor screen */}
        <boxGeometry args={[4, 3, 0.2]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      
      {/* Monitor stand */}
      <mesh position={[0, -2, 0]}>
        <boxGeometry args={[0.5, 1, 0.5]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      {/* Monitor base */}
      <mesh position={[0, -2.5, 0]}>
        <boxGeometry args={[1.5, 0.2, 1]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      {/* Add lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
    </group>
  )
}
