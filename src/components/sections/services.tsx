"use client";

import * as React from "react";
import { Scale, Briefcase, Leaf, ShieldCheck, Gavel, Landmark } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const services = [
  {
    icon: <Landmark className="h-10 w-10 text-primary" />,
    title: "Derecho Civil e Inmobiliario",
    description: "Asesoría en contratos, propiedades, herencias y todo lo relacionado con el sector inmobiliario.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Derecho Laboral y Administrativo",
    description: "Defensa y representación en conflictos laborales y procesos ante la administración pública.",
  },
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: "Derecho Ambiental",
    description: "Cumplimiento normativo, permisos y litigios para proyectos sostenibles y en armonía con el medio ambiente.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Mitigación de Riesgos",
    description: "Programas de cumplimiento y prevención de lavado de activos para proteger la integridad de su empresa.",
  },
  {
    icon: <Gavel className="h-10 w-10 text-primary" />,
    title: "Litigios Estratégicos",
    description: "Representación judicial experta en casos complejos, buscando siempre la solución más favorable.",
  },
];

const GlassCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`h-full rounded-xl border border-white/20 bg-white/50 p-6 shadow-lg backdrop-blur-lg backdrop-filter dark:bg-slate-800/50 dark:border-slate-700 ${className}`}
  >
    {children}
  </div>
);

const ServicesSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section id="services" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Soluciones legales y financieras a la medida de sus necesidades.
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="py-4 md:basis-1/2 lg:basis-1/3">
                  <GlassCard className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                      {service.icon}
                    </div>
                    <h3 className="font-headline text-xl font-bold">{service.title}</h3>
                    <p className="mt-2 text-muted-foreground">{service.description}</p>
                  </GlassCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesSection;
