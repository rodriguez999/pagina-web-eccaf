const AppointmentSection = () => {
  const googleScriptUrl = "https://script.google.com/macros/s/AKfycbz2Ee29xbrCjvPoSr4-NiYU0pdGLuvoHv2UxcNG0ES60JT21PCmJER0qsiKGQCWSyP1/exec";

  return (
    <section id="appointment" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Agende su Cita
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Complete el siguiente formulario y nuestro equipo se pondrá en contacto para confirmar su cita a la brevedad.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl">
           <div className="overflow-hidden rounded-xl border bg-transparent shadow-lg dark:border-slate-700">
            <iframe
              src={googleScriptUrl}
              width="100%"
              height="800"
              frameBorder="0"
              style={{ minHeight: "800px" }}
              title="Formulario de Citas"
            >
              Cargando…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
