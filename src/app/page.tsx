import AboutUs from "./_components/aboutus/page";
import Hero from "./_components/hero/page";
import LearningPaths from "./_components/learningPaths/page";

export default function Home() {
  return (
    <>
      <Hero />
      <LearningPaths id="learning-paths" />
      <AboutUs />
    </>
  );
}
