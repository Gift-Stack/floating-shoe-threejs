import { useFrame, Vector3 } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";

const Box = (props: { position?: Vector3 }) => {
  const mesh = useRef<Mesh>(null!);

  useFrame((state) => {
    mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={mesh} position={props.position}>
      <boxGeometry args={[5, 5, 5]} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
};

export default Box;
