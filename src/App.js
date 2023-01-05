import "./App.css";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls, SoftShadows } from "@react-three/drei";
import { isMobile } from "react-device-detect";

import Circle from "./shapes/Circle";
import Box from "./shapes/Box";
import Overlay from "./Overlay";

function App() {
  return (
    <div className="App">
      <Overlay />

      <Canvas
        style={{
          position: "absolute",
          zIndex: 1,
        }}
        shadows
        camera={{
          position: [12, isMobile ? 96 : 32, isMobile ? 256 : 100],
          fov: 30
        }}
      >
        <SoftShadows frustum={3.75} size={0.005} near={9.5} samples={17} rings={11} />
        <ambientLight castShadow/>
        <pointLight castShadow position={[10, 200, 0]} intensity={5}/>

        <Circle castShadow position={[-32, 0, 0]} />
        <Circle castShadow position={[32, 0, 0]} />
        <Box castShadow position={[0, 0, 0]} />
        <Circle castShadow position={[0, 0, 32]} />
        <Circle castShadow position={[0, 0, -32]} />

        <mesh receiveShadow position={[0, -10, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[400, 400, 400]}>
          <planeBufferGeometry />
          <meshLambertMaterial color="lightblue" side={2} />
        </mesh>
        
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={2}
          minPolarAngle={Math.PI / 2.8}
          maxPolarAngle={Math.PI / 2.2}
          minDistance={isMobile ? 128 : 64}
          maxDistance={isMobile ? 256 : 100}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}

export default App;
