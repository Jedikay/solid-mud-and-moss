import ContentSection from "~/components/ContentSection";
import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import HeroCollage from "~/components/HeroCollage";
import Logos from "~/components/Logos";
import SectionImage from "~/components/SectionImage";
import Values from "~/components/Values";

export default function About() {
  return (
    <>
      <div>
        Go through this component and break out each of the sections into their
        own component. Do not name any of them "about"! (Header, Hero, Content
        Section, Image, Values, Logo, Team, Blog)
        https://tailwindui.com/components/marketing/page-examples/about-pages
      </div>
      <Heading />
      <SectionImage />
      <HeroCollage />
      <ContentSection />
      <Values />
      <Logos />
      <Footer />
    </>
  );
}
