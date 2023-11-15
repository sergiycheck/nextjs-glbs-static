import { Canvas3dModel } from "@/components/canvases/canvas-3d-model";

const glbs = [
  { id: "22", value: "https://storage.googleapis.com/gbl_files/22_SAPHIRE_V9X6.glb" },
  { id: "24", value: "https://storage.googleapis.com/gbl_files/24_SAPHIRE_iQ66.glb" },
  { id: "28", value: "https://storage.googleapis.com/gbl_files/28_SAPHIRE_XY99.glb" },
];

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
