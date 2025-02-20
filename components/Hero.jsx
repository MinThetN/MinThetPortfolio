'use client'
import React, { Suspense, useContext } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import HackerRoom from './HackerRoom'
import CanvasLoader from './CanvasLoader'
import { Leva, useControls } from 'leva'

const Hero = () => {
  const x = useControls('HackerRoom', {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10
    },

    rotationX: {
      value: 2.5,
      min: -10,
      max: 10
    },
    rotationY: {
      value: 2.5,
      min: -10,
      max: 10
    },
    rotationZ: {
      value: 2.5,
      min: -10,
      max: 10
    },

    scale: {
      value: 2.5,
      min: -10,
      max: 10
    }

  })
  return (
    <section className='min-h-screen border-2 border-blue-600'>
      <div className='w-full mx-auto flex flex-col mt-5 c-space gap-3'>
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-mono'>Hi, I'm Min
          <span className='waving-hand'>👋</span>
          
        </p>
        <p className='hero_tag text-gray_gradient'> Building & Brands </p>
      </div>

      <div className='w-full h-full absolute inset-0'>
        <Leva />
        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <OrbitControls enableZoom={false} />
            
            {/* Fixed lighting setup */}
            
            <HackerRoom 
              // scale={0.05} 
              // position={[0, 0, 0]} 
              // rotation={[0, 280, 0]}
              position={[x.positionX, x.positionY, x.positionZ]} 
              rotation={[x.rotationX, x. rotationY, x.rotationZ]} 
              scale={[x.scale, x.scale, x.scale]}
            />
            <ambientLight intensity={1.0} color={'#ffffff'} />
            <directionalLight position={[10, 10, 10]} intensity={1} />

          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Hero
