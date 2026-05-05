import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Coaches from "@/components/Coaches";
import Programs from "@/components/Programs";
import WhyUs from "@/components/WhyUs";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <Coaches />
        <Programs />
        <WhyUs />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
