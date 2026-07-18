import Hero from "@/components/Hero";
import About from "@/components/About";
import Catalog from "@/components/Catalog";
import Differentials from "@/components/Differentials";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import InstagramBanner from "@/components/InstagramBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Catalog />
      <Differentials />
      <Gallery />
      <Testimonials />
      <FAQ />
      <InstagramBanner />
    </>
  );
}
