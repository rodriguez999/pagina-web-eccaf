import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative h-[70vh] min-h-[400px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
        <div className="container px-4 md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Expertos en Asesoría Jurídica y Financiera
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-primary-foreground/90 md:text-xl">
            Brindamos asesoría integral y personalizada para proteger su patrimonio y asegurar el éxito de sus negocios.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild>
              <a href="#appointment">Agendar Cita</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
