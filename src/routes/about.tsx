import ContentSection from "~/components/ContentSection";
import HeroCollage from "~/components/HeroCollage";
import Logos from "~/components/Logos";
import SecondFooter from "~/components/SecondFooter";
import SecondHeader from "~/components/SecondHeader";
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
      <SecondHeader />
      <SectionImage />
      <HeroCollage />
      <ContentSection />
      <Values />
      <Logos />
      <SecondFooter />
    </>
  );
}
