import HeroSection from "@/components/Hero/HeroSection";
import Dotpattern from "@/components/ui/Dotpattern";

export default function Home() {
  return (
    <>
      <Dotpattern />
      <section className=" flex items-center justify-center px-4 py-8 max-w-7xl mx-auto  ">
        <HeroSection />
      </section>
    </>
  );
}
