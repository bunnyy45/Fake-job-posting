import HeroSection from "../components/HeroSection";
import FeatureCards from "../components/FeatureCards";
import CallToAction from "../components/CalltoAction";
import Footer from "../components/Footer";
import JobCheckForm from "../components/JobCheckForm";
import ResultCard from "../components/ResultCard";
import { useState } from "react";

function Home() {
  const [result, setResult] = useState(null);

  return (
    <>
      <HeroSection />
      <FeatureCards />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home;
