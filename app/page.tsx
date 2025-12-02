import WhyChooseUs from "../components/Home/Whychooseus";
import About from "../components/Home/About";
import ContactUs from "../components/Home/Contact";
import Faqs from "../components/Home/Faqs";
import Hero from "../components/Home/Hero";
import ModulesSection from "../components/Home/Service";
import Image from "next/image";
import PartnersSection from "../components/Home/Partner";
import AboutMasterVision from "../components/Home/Partner";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="">
      <div id="hero">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="why">
        <WhyChooseUs />
      </div>

      <div id="modules">
        <ModulesSection />
      </div>

      <div id="vision">
        <AboutMasterVision />
      </div>

      <div id="faqs">
        <Faqs />
      </div>

      <div id="contact">
        <ContactUs />
      </div>
       <a
  href="https://wa.me/+201007020762?text=مرحبا،%20اريد%20الاستفسار%20عن%20نظام%20اذكى"
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed bottom-6 right-6 z-50 
    bg-green-500 hover:bg-green-600 
    text-white p-4 
    rounded-full shadow-xl 
    flex items-center justify-center 
    transition transform hover:scale-110
  "
>
  <FaWhatsapp size={30} />
</a>
    </div>
  );
}

