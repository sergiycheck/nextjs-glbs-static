import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex f-full flex-col items-center justify-between ${inter.className}`}>
      {Array.from({ length: 100 }, (_, i) => i + 1).map((i) => (
        <Link key={i} href={`/glbs/${i}`}>
          <span className="mt-4 text-center">{i} glb</span>
        </Link>
      ))}
    </main>
  );
}
