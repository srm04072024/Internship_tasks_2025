import Image from "next/image";
import Link from "next/link";

export default function notFound() {
  return (
    <div className="bg-white h-[80vh] flex flex-col items-center justify-center">
      <Link href="/Home">
        <div className="h-[20vh] w-[10vw] relative">
          <Image
            src="/logo.png"
            alt="Dzynfox"
            fill
            className="object-contain"
          />
        </div>
      </Link>
      <h1 className="text-red-600 text-4xl">404</h1>
      <p className="text-black text-3xl">Page does&apos;t exist!</p>
    </div>
  );
}
