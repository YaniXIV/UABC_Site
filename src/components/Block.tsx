// Block.tsx
import * as React from 'react'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

type BlockProps = {
  angle: number
  radius: number
  speed: number
}

export default function Block({ angle, radius, speed }: BlockProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const time = useRef(0)

  useFrame((state, delta) => {
    if (meshRef.current) {
      time.current += delta * speed
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      const y = Math.sin(time.current) * 2

      console.log(`Block Position: x=${x.toFixed(2)}, y=${y.toFixed(2)}, z=${z.toFixed(2)}`)
      
      meshRef.current.position.set(x, y, z)
      meshRef.current.rotation.x = time.current
      meshRef.current.rotation.y = time.current * 0.5
      meshRef.current.rotation.z = time.current * 0.3
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial 
        color="#3b82f6" 
        transparent
        opacity={0.8}
        metalness={0.2}
        roughness={0.1}
        emissive="#3b82f6"
        emissiveIntensity={0.2}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
