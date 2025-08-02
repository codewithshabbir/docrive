import HeroSlider from "@/components/sections/home/HeroSlider";
import WhatWeDo from "@/components/sections/home/WhatWeDo";
import WhoWeAre from "@/components/sections/home/WhoWeAre";
import Navbar from "@/components/shared/Navbar";
import TopBar from "@/components/shared/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar/>
      <HeroSlider/>
      <WhoWeAre/>
      <WhatWeDo/>
    </>
  );
}
