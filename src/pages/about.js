import React from "react";
import HeroSection2 from "./../components/HeroSection2";
import TeamBiosSection from "./../components/TeamBiosSection";

function AboutPage(props) {
  return (
    <>
      <HeroSection2
        bgColor="primary"
        size="large"
        bgImage="https://source.unsplash.com/FyD3OWBuXnY/1600x800"
        bgImageOpacity={0.2}
        title="Big Sunday 🦐"
        subtitle="Hack all Saturday, party all Sunday. YeYe!"
      />
      <TeamBiosSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
    </>
  );
}

export default AboutPage;
