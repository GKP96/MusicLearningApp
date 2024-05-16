import Image from "next/image";
import HeroSection from "./components/HeroSection";
import TestimonialsCard from "./components/TestimonialsCard";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import UpcomingWebinars from "./components/UpcomingWebinars";
import Instructors from "./components/Instructors";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />

      <FeaturedCourses />
      {/* <WhyChooseUs /> */}
      <TestimonialsCard />
      <UpcomingWebinars />
      <Instructors />
      <Footer/>
    </>
  );
}
