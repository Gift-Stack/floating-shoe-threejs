import { Gltf } from "@react-three/drei";

export type GLTF = typeof Gltf & {
  nodes: any;
  materials: any;
};

type Items = {
  laces: string;
  mesh: string;
  caps: string;
  inner: string;
  sole: string;
  stripes: string;
  band: string;
  patch: string;
};

export type Snap = {
  current: string | null;
  items: Items;
};
