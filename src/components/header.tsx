"use client";

import * as React from "react";
import { Button } from "./ui/button";
import Logo from "./logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Servicios" },
  { href: "#about", label: "Sobre Nosotros" },
  { href: "#location", label: "Ubicación" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <a href="#" aria-label="Volver al inicio">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href="#appointment">Agendar Cita</a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Logo />
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Cerrar menú</span>
                  </Button>
                </div>
                <nav className="mt-8 flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium"
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <Button asChild size="lg" className="mt-auto">
                  <a href="#appointment" onClick={handleLinkClick}>Agendar Cita</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
