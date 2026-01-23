import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-center md:items-start">
          <Logo className="text-primary-foreground" />
          <p className="mt-2 text-center text-sm text-primary-foreground/80 md:text-left">
            Asesoría y Administración Jurídica Financiera SRL
          </p>
          <p className="mt-1 text-center text-sm text-primary-foreground/80 md:text-left">
            RNC: 1-33-58508-1
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-bold uppercase tracking-wider">Contacto</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <a href="mailto:legal01@eccaf.com" className="hover:underline">
                legal01@eccaf.com
              </a>
            </li>
            <li>
              <a href="tel:+18292484399" className="hover:underline">
                (829) 248-4399
              </a>
            </li>
            <li>Plaza Don Vicente, Primer piso, local 3B, ubicada en la Avenida República de Colombia, esq. Calle primera entrada las flores, Distrito Municipal de Pantoja, Municipio los Alcarrizos, Provincia ssanto Domingo, República Dominicana.</li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-bold uppercase tracking-wider">Horario de Atención</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>Lunes a Viernes: 8:00 AM - 6:00 PM</li>
            <li>Sábados: 9:00 AM - 2:00 PM</li>
            <li>Domingos: Cerrado</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 bg-primary/50 py-4">
        <p className="text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} ECCAF SRL. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;