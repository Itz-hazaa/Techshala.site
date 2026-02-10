import Navbar from "@/components/TechShala/Navbar";
import Hero from "@/components/TechShala/Hero";
import AboutSection from "@/components/TechShala/AboutSection";
import WorkshopCards from "@/components/TechShala/WorkshopCards";
import FounderSection from "@/components/TechShala/FounderSection";
import SchoolPrograms from "@/components/TechShala/SchoolPrograms";
import StatsSection from "@/components/TechShala/StatsSection";
import Testimonials from "@/components/TechShala/Testimonials";
import UpcomingWorkshops from "@/components/TechShala/UpcomingWorkshops";
import CTASection from "@/components/TechShala/CTASection";
import Footer from "@/components/TechShala/Footer";
import WhatsAppButton from "@/components/TechShala/WhatsAppButton";
import ScrollProgress from "@/components/TechShala/ScrollProgress";
import SEOHead from "@/components/TechShala/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <WorkshopCards />
        <FounderSection />
        <SchoolPrograms />
        <StatsSection />
        <Testimonials />
        <UpcomingWorkshops />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
