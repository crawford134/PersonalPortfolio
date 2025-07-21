import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SpeakingSection from '@/components/SpeakingSection';
import WorkSection from '@/components/WorkSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AboutSection />
      {/* <SpeakingSection /> */}
      {/* <WorkSection /> */}
      {/* <ContactSection /> */}
    </div>
  );
};

export default Index;
