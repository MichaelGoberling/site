import "./App.css";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import { OrbitControls, SoftShadows } from "@react-three/drei";
import { isMobile } from "react-device-detect";

import Circle from "./shapes/Circle";
import Box from "./shapes/Box";
import Overlay from "./Overlay";

function App() {
  const [selected, setSelected] = useState(null);
  const [shapes] = useState([
    {
      type: "circle",
      position: [-32, 0, 0],
      message: 'Food'
    },
    {
      type: "circle",
      position: [32, 0, 0],
      message: 'Code'
    },
    {
      type: "box",
      position: [0, 0, 0],
      message: 'About Me'
    },
    {
      type: "circle",
      position: [0, 0, 32],
      message: 'Music'
    },
    {
      type: "circle",
      position: [0, 0, -32],
      message: 'Mystery'
    },
  ]);

  return (
    <div className="App">
      <Overlay />

      {selected !== null && (
        <p
          style={{
            position: "absolute",
            zIndex: 2,
            right: isMobile ? "4vw" : "2vw",
            fontSize: 24,
            userSelect: "none",
          }}
        >
          {shapes[selected].message}
        </p>
      )}

      <Canvas
        style={{
          position: "absolute",
          zIndex: 1,
        }}
        shadows
        camera={{
          position: [12, isMobile ? 96 : 32, isMobile ? 200 : 100],
          fov: 30,
        }}
        onPointerMissed={(event) => {
          setSelected(null);
        }}
      >
        <SoftShadows
          frustum={3.75}
          size={0.005}
          near={9.5}
          samples={17}
          rings={11}
        />
        <ambientLight />
        <pointLight castShadow position={[10, 200, 0]} intensity={5} />

        {shapes.map((shape, idx) => {
          let element;
          switch (shape.type) {
            case "box":
              element = (
                <Box
                  key={idx}
                  idx={idx}
                  selected={selected}
                  setSelected={(value) => {
                    setSelected(value);
                  }}
                  castShadow
                  position={shape.position}
                ></Box>
              );
              break;
            case "circle":
              element = (
                <Circle
                  key={idx}
                  idx={idx}
                  selected={selected}
                  setSelected={(value) => {
                    setSelected(value);
                  }}
                  castShadow
                  position={shape.position}
                ></Circle>
              );
              break;
            default:
              element = (
                <Box
                  key={idx}
                  setSelected={(value) => {
                    setSelected(value);
                  }}
                  castShadow
                  position={[0,0,0]}
                ></Box>
              );
          }
          return element;
        })}

        <mesh
          receiveShadow
          position={[0, -10, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[400, 400, 400]}
        >
          <planeBufferGeometry />
          <meshLambertMaterial color="lightblue" side={2} />
        </mesh>

        <OrbitControls
          autoRotate={selected === null}
          autoRotateSpeed={2}
          minPolarAngle={Math.PI / 2.8}
          maxPolarAngle={Math.PI / 2.2}
          minDistance={isMobile ? 128 : 64}
          maxDistance={isMobile ? 200 : 100}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}

export default App;
