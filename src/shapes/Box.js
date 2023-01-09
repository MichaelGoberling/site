import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { isMobile } from "react-device-detect";

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += delta / 4));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={1}
      onClick={(event) => {
        let newClicked = !clicked
        if (isMobile) {
            props.setSelected(newClicked ? props.idx : null);
        }
        click(newClicked);
      }}
      onPointerOver={(event) => {
        props.setSelected(props.idx);
      }}
      onPointerOut={(event) => {
        props.setSelected(null);
      }}
    >
      <boxGeometry args={[8, 8, 8]} />
      <meshStandardMaterial
        opacity={0.2}
        color={props.selected === props.idx ? "white" : "black"}
      />
    </mesh>
  );
}

export default Box;
