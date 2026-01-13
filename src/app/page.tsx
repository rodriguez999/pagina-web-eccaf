import Header from '@/components/header';
import HeroSection from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import AboutSection from '@/components/sections/about';
import LocationSection from '@/components/sections/location';
import AppointmentSection from '@/components/sections/appointment';
import Footer from '@/components/footer';
import WhatsAppFAB from '@/components/whatsapp-fab';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <LocationSection />
        <AppointmentSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
