import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function GltfModel({ link }: { link: string }) {
  const model = useGLTF(link);

  const mixer = useRef<THREE.AnimationMixer>();
  if (model.animations.length) {
    mixer.current = new THREE.AnimationMixer(model.scene);
    model.animations.forEach((clip) => {
      const action = mixer.current?.clipAction(clip);
      action?.play();
    });
  }

  useFrame((state, delta) => {
    mixer.current?.update(delta);
  });

  return <>{model && <primitive object={model.scene} position={[0, 1, 0]} />}</>;
}
