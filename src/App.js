import './App.css';
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import { OrbitControls } from '@react-three/drei'
import { isMobile } from 'react-device-detect';

function Circle(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += delta / 4))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <sphereGeometry args={[6, 12, 6]} />
      <meshStandardMaterial color={hovered || clicked ? 'white' : 'black'} />
    </mesh>
  )
}

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += delta / 4))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[8, 8, 8]} />
      <meshStandardMaterial color={hovered || clicked ? 'white' : 'black'} />
    </mesh>
  )
}

function App() {
  return (
    <div className="App">
      <p style={{position: 'absolute', left: isMobile ? '4vw' : '2vw', fontSize: 24, userSelect: 'none'}}>Michael Goberling</p>
      <a style={{position: 'absolute', left: isMobile ? '4vw' : '2vw', bottom: isMobile ? '4vw' : '2vw', userSelect: 'none'}}>michael.goberling@gmail.com</a>
      <a style={{position: 'absolute', right: isMobile ? '4vw' : '2vw', bottom: isMobile ? '4vw' : '2vw', color: 'black', userSelect: 'none', textDecoration: 'none'}} href={'tel:402-309-6170'}>402-309-6170</a>
      <Canvas 
        shadows
        camera={{ position: [12, isMobile ? 96 : 32, isMobile ? 384 : 128], fov: 30 }}
        >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Circle position={[-32, 0, 0]} />
        <Circle position={[32, 0, 0]} />
        <Box position={[0, 0, 0]} />
        <Circle position={[0, 0, 32]} />
        <Circle position={[0, 0, -32]} />
        <OrbitControls autoRotate={true} autoRotateSpeed={2}/>
      </Canvas>
    </div>
  );
}

export default App;

