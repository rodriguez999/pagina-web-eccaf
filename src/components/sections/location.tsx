const LocationSection = () => {
  return (
    <section id="location" className="w-full bg-white/50 py-16 dark:bg-slate-900/50 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nuestra Ubicación
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Visítenos para una consulta personalizada. Estamos listos para atenderle.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-xl border shadow-lg">
            <div className="aspect-video w-full">
              <iframe
                src="https://maps.google.com/maps?q=18.506917,-69.998278&hl=es&z=16&amp;output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de ECCAF"
              ></iframe>
            </div>
          </div>
          <p className="mt-6 text-center text-lg font-semibold text-foreground">
            Plaza Don Vicente, Primer piso, local 3B, ubicada en la Avenida República de Colombia, esq. Calle primera entrada las flores, Distrito Municipal de Pantoja, Municipio los Alcarrizos, Provincia ssanto Domingo, República Dominicana.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
