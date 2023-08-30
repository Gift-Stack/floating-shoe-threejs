import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Shoe from "@/components/shoe";
import { Snap } from "@/types";
import ColorPicker from "@/components/ColorPicker";

export default function Home() {
  const [snap, setSnap] = useState<Snap>({
    current: null,
    items: {
      laces: "#ffffff",
      mesh: "#ffffff",
      caps: "#ffffff",
      inner: "#ffffff",
      sole: "#ffffff",
      stripes: "#ffffff",
      band: "#ffffff",
      patch: "#ffffff",
    },
  });

  const handleChangeItemColor = (item: string, color: string) => {
    setSnap({
      ...snap,
      items: {
        ...snap.items,
        [item]: color,
      },
    });
  };

  return (
    <>
      <ColorPicker item={snap?.current} onChange={handleChangeItemColor} />
      <Canvas style={{ height: "100vh" }}>
        {/* <color attach="background" args={["#f0f0f0"]} /> */}
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.3}
          angle={0.1}
          penumbra={1}
          position={[5, 25, 20]}
        />
        <Suspense fallback={null}>
          <Shoe snap={snap} setSnap={setSnap} />
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    </>
  );
}
