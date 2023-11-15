import {useGLTF} from "@react-three/drei";

export default function GltfModel({link}: {link: string}) {
  const model = useGLTF(link);

  return <>{model && <primitive object={model.scene} position={[0, 1, 0]} />}</>;
}
