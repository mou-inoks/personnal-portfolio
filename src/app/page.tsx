import Hero from "./Hero";
import Skills from "./Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-customBlack overflow-hidden">
      {/* Navbar */}
      <main className="relative">
        <img
          src="https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"
          className=" h-auto md:absolute md:w-auto  z-2 -top-0 left-10"
          alt="Background"
        />
        {/* Components */}
        <div className="relative z-10">
          <Hero />
          <Skills />
        </div>
      </main>
    </div>
  );
}
