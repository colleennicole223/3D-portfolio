import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Office from '../models/office';

{/*<div className="absolute top-28 left-0 right-0 z-10 flex 
      items-center justify-center">
        POPUP
      </div>*/}

const Home = () => {
  const adjustOfficeForScreenSize = () => {
    let screenScale = null
    let screenPosition = [6,-9,-40];
    let rotation = [0, -1, 0]

    if(window.innerWidth < 768) {
      screenPosition=[0.9,0.9,0.9];
    } else {
      screenScale=[5,5,5];
    }
    return [screenScale, screenPosition, rotation]
  }

  const[officeScale, officePosition, officeRotation] = adjustOfficeForScreenSize();
  return (
    <section className="w-full h-screen relative bg-black">
      <Canvas 
          className="w-full h-screen bg-transparent"
          camera={{near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}> {/*wrapper for loading screen*/}
        <directionalLight position={[1,5,1]} intensity={0.75}/>
          <ambientLight intensity={1.5}/>
          
          <hemisphereLight groundColor="#000000" intensity={1}/>
          {/*
          
          <pointLight position={[5,5,5]} intensity={2}/>
          */}
          
          <spotLight color="#FFFFFF" position={[2,2,2]}/>
          {/*
          <ambientLight></ambientLight>
          <pointLight></pointLight>
          */}

          <Office
            position={officePosition}
            scale={officeScale}
            rotation={officeRotation}
          />
          
        </Suspense>
      </Canvas>

    </section>
  )
}

export default Home