import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="h-screen"></div>
      <div className="h-screen bg-white"></div>
      <div className="h-screen">
        <Image
          src="/images/Logo_Mockup_1_Wall.png"
          alt="Linemark Studio Hero Image"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
        />
      </div>
    </main>
  );
}
