import { useGLTF } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import React, { useRef } from "react";
import { Group } from "three";
import type { Snap, GLTF } from "@/types";

type Props = {
  snap: Snap;
  setSnap: (arg: Snap) => void;
};

interface CustomPointerEvent extends Omit<ThreeEvent<PointerEvent>, "object"> {
  object: {
    material: {
      name: string;
    };
  };
}

const Shoe = ({ snap, setSnap }: Props) => {
  const ref = useRef<Group>(null!);

  const { nodes, materials } = useGLTF("/assets/shoe.glb") as unknown as GLTF;

  const setPointer = (e: CustomPointerEvent) => {
    e.stopPropagation();
    setSnap({
      ...snap,
      current: e.object.material.name,
    });
  };

  const nullifyPointer =
    (type: "missed" | "out") => (e: ThreeEvent<PointerEvent> | MouseEvent) => {
      if (type === "out") {
        if ((e as ThreeEvent<PointerEvent>).intersections.length === 0) {
          setSnap({
            ...snap,
            current: null,
          });
          return;
        }
      }
      setSnap({
        ...snap,
        current: null,
      });
    };

  return (
    <group
      ref={ref}
      dispose={null}
      // onPointerOver={setPointer}
      onPointerDown={(e) => setPointer(e as unknown as CustomPointerEvent)}
      // onPointerMissed={nullifyPointer("missed")}
      // onPointerOut={nullifyPointer("out")}
    >
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={snap.items.laces}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={snap.items.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={snap.items.caps}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={snap.items.inner}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={snap.items.sole}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={snap.items.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={snap.items.band}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={snap.items.patch}
      />
    </group>
  );
};

export default Shoe;
