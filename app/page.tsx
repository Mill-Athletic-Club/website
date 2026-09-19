import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ClassTypesPreview from "@/components/ClassTypesPreview";
import TrainersPreview from "@/components/TrainersPreview";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutPreview />
        <ClassTypesPreview />
        <TrainersPreview />
        <Testimonials />
        {/* Phase 1 sections still to add: Location/map, final CTA */}
      </main>
      <Footer />
    </>
  );
}
