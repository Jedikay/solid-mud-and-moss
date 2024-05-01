import Heading from "~/components/Heading";
import HeroSection from "~/components/HeroSection";
import Contact from "~/components/Contact";
import Products from "~/components/Products";

export default function Home() {
  return (
    <>
      <Heading
        title="Say something here"
        tophat="Forest through the trees"
        blurb="something"
      />
      <HeroSection />
      <Contact />
      <Products />
    </>
  );
}
