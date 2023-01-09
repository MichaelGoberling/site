import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { isMobile } from "react-device-detect";

function Circle(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
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
            props.setSelected(props.idx);
        }
        click(newClicked);
      }}
      onPointerOver={(event) => {
        hover(true);
        props.setSelected(props.idx);
      }}
      onPointerOut={(event) => {
        hover(false);
        props.setSelected(null);
      }}
    >
      <sphereGeometry args={[6, 12, 6]} />
      <meshStandardMaterial color={hovered || clicked ? "white" : "black"} />
    </mesh>
  );
}

export default Circle;
