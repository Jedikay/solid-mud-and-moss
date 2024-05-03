import AboutImage from "~/components/AboutImage";
import HeroCollage from "~/components/HeroCollage";
import Logos from "~/components/Logos";
import MissionStatement from "~/components/MissionStatement";
import Values from "~/components/Values";

export default function About() {
  return (
    <div class="pb-36 flex flex-col items-center justify-center w-full">
      <HeroCollage
        title="About Us"
        description="Learn more about our company and our team of experts."
        image1="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
        image2="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
        image3="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
        image4="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
        image5="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
      />
      <MissionStatement
        missionText="Our mission is to help people build better software."
        missionDetails={[
          "We're founded on the belief that there's a better way to build software. We're obsessively passionate about it, and our mission is to help people achieve it.",
          "We focus on the long-term success of our customers, and we're dedicated to providing the best possible service. We're committed to our customers' success and we're proud of the results we've achieved.",
        ]}
        stats={[
          { label: "Customers", value: "1,200" },
          { label: "Reviews", value: "140K" },
          { label: "Awards", value: "5" },
        ]}
      />
      <AboutImage image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" />
      <Values
        description="Our values guide our work and help us build better software."
        values={[
          {
            name: "Open communication",
            description:
              "We believe in open communication and sharing information.",
          },
          {
            name: "Continuous improvement",
            description:
              "We're always looking for ways to improve and innovate.",
          },
          {
            name: "Customer success",
            description:
              "We're dedicated to our customers' success and satisfaction.",
          },
        ]}
      />
      <Logos
        title="Trusted by companies of all sizes"
        images={[
          "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
          "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
          "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg",
          "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg",
          "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
        ]}
      />
    </div>
  );
}
