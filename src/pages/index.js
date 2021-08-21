import React from "react";
import HeroSection from "./../components/HeroSection";
import ClientsSection from "./../components/ClientsSection";
import FeaturesSection from "./../components/FeaturesSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import NewsletterSection from "./../components/NewsletterSection";
import hero from "../images/hero.png";

function IndexPage(props) {
  return (
    <>
      <HeroSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Protecting your digital identity"
        subtitle="DigiKey helps you remain in control of your data, what you share, when you share it and who you share it with. DigiKey is free and always will be!"
        image={hero}
        buttonText="Sign in"
        buttonColor="primary"
        buttonPath="/auth/signin"
      />
      <ClientsSection
        bgColor="light"
        size="normal"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      />
      <FeaturesSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="What can I do with DigiKey?"
        subtitle="All the info you need, in one place"
      />
      <NewsletterSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="No smartphone? No worries!"
        subtitle="Did you know you can request a physical DigiKey card? Visit your nearest Australia Post with your ID and ask for a DigiKey Card form."
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
    </>
  );
}

export default IndexPage;
