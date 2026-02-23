import HeroSection from "@/components/HeroSection";
import AppGrid from "@/components/AppGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <HeroSection />
      <AppGrid />
      <div className="flex-grow" />
      <Footer />
    </main>
  );
};

export default Index;
