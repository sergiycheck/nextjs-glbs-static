import React, { Suspense } from "react";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const LazyGltfModel = React.lazy(() => import("./glb-model"));

export function Canvas3dModel({ link }: { link: string }) {
  return (
    <Suspense fallback="loading">
      <Canvas camera={{ position: [-0.5, 2, 10] }} shadows>
        <directionalLight position={[3.3, 1.0, 4.4]} castShadow intensity={Math.PI * 2} />

        <LazyGltfModel link={link} />

        <OrbitControls target={[0, 1, 0]} />
      </Canvas>
    </Suspense>
  );
}
