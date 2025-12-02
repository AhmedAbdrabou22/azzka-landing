import WhyChooseUs from "../components/Home/Whychooseus";
import About from "../components/Home/About";
import ContactUs from "../components/Home/Contact";
import Faqs from "../components/Home/Faqs";
import Hero from "../components/Home/Hero";
import ModulesSection from "../components/Home/Service";
import Image from "next/image";
import PartnersSection from "../components/Home/Partner";
import AboutMasterVision from "../components/Home/Partner";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <WhyChooseUs/>
      <ModulesSection />
      {/* <PartnersSection/> */}
      <AboutMasterVision/>
        <Faqs/>
        <ContactUs/>
    </div>
  );
}
