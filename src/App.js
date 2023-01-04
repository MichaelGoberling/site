import "./App.css";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import { isMobile } from "react-device-detect";

import Circle from "./shapes/Circle";
import Box from "./shapes/Box";
import Overlay from './Overlay';

function App() {
  return (
    <div className="App">
      <Overlay/>

      <Canvas
        style={{
          position: "absolute",
          zIndex: 1,
        }}
        shadows
        camera={{
          position: [12, isMobile ? 96 : 32, isMobile ? 384 : 128],
          fov: 30,
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Circle position={[-32, 0, 0]} />
        <Circle position={[32, 0, 0]} />
        <Box position={[0, 0, 0]} />
        <Circle position={[0, 0, 32]} />
        <Circle position={[0, 0, -32]} />
        <OrbitControls autoRotate={true} autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}

export default App;
