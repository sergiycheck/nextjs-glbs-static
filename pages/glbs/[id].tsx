import { Canvas3dModel } from "@/components/canvases/canvas-3d-model";

const glbs = Array.from({ length: 100 }, (_, i) => i + 1).reduce((acc: any[], curr: number) => {
  acc.push({
    id: `${curr}`,
    value: `https://storage.googleapis.com/gbl_files/${curr}.glb`,
  });
  return acc;
}, []);

export async function getStaticPaths() {
  const paths = glbs.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
}

export default function Glb({ url }: { url: string }) {
  return (
    <div className="h-full relative">
      <Canvas3dModel link={url} />
    </div>
  );
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const glb = glbs.find((glb) => glb.id == params.id);

  return { props: { url: glb?.value } };
}
