
'use client'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'

function Cube(){
  return(
    <Float speed={2} rotationIntensity={2}>
      <mesh rotation={[0.4,0.2,0]}>
        <torusKnotGeometry args={[1,0.3,128,32]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>
    </Float>
  )
}

export default function Hero3D(){
  return(
    <div style={{height:'500px'}}>
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[2,2,2]} />
        <Cube />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}
