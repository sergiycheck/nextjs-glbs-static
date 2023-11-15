import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <Link href="/glbs/22">22 glb</Link>
      <Link href="/glbs/24">24 glb</Link>
      <Link href="/glbs/28">28 glb</Link>
    </main>
  );
}
