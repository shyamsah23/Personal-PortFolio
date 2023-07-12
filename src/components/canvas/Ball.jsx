import React from 'react'
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float,Decal,OrbitControls,Preload ,useTexture} from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [image] = useTexture([props.imgUrl]);
  return (
   <>
    <Float speed={1} rotationIntensity={1} floatIntensity={2}>
    <ambientLight intensity={0.45} />
    <directionalLight position={[0, 0, 0.05]} />
    <mesh castShadow receiveShadow scale={2.75}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color='#fff8eb'
        // color="	#A8A8A8"
        // color="#303030"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1}
        map={image}
        flatShading
      />
    </mesh>
    </Float>

    </>
  
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;