import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Landmark, Scale, ShieldCheck } from "lucide-react";

const AboutSection = () => {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-image');

  return (
    <section id="about" className="w-full bg-white/50 py-16 dark:bg-slate-900/50 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="mb-8">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Sobre Nosotros
                </h2>
                <p className="mt-4 max-w-3xl text-muted-foreground md:text-xl">
                    Nuestra firma: Tradición, Innovación y Compromiso
                </p>
            </div>
            
            <p className="text-foreground/80">
              En ECCAF, combinamos una sólida herencia en la práctica legal y financiera con un enfoque innovador y adaptado a los desafíos del presente. Nuestro equipo de expertos está dedicado a ofrecer soluciones estratégicas y personalizadas que protegen los intereses de nuestros clientes y promueven su crecimiento.
            </p>
            <p className="text-foreground/80">
              Nos enorgullece construir relaciones de confianza a largo plazo, basadas en la integridad, la excelencia profesional y un profundo entendimiento de las necesidades de cada cliente.
            </p>
            <p className="text-foreground/80">
            En ECCAF, tus inquietudes legales y financieras se transforman en soluciones claras, seguras, estratégicas y confiables. Tu éxito es nuestra tranquilidad.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Scale className="h-10 w-10 text-primary" />
                <h3 className="mt-2 text-lg font-bold">Integridad</h3>
                <p className="mt-1 text-sm text-muted-foreground">Actuamos con ética y transparencia.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Landmark className="h-10 w-10 text-primary" />
                <h3 className="mt-2 text-lg font-bold">Experiencia</h3>
                <p className="mt-1 text-sm text-muted-foreground">Décadas de conocimiento a su servicio.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="h-10 w-10 text-primary" />
                <h3 className="mt-2 text-lg font-bold">Compromiso</h3>
                <p className="mt-1 text-sm text-muted-foreground">Dedicados a proteger su patrimonio.</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={600}
                height={400}
                className="overflow-hidden rounded-xl object-cover shadow-2xl"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
