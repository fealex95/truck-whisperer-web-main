import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const whatsappNumber = "5511940377688"; // Replace with actual number
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento para meu caminhão.";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-subtle">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">N</span>
          </div>
          <span className="text-xl font-bold text-foreground">Nobrega Mecânica</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Contato
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="whatsapp"
            size="sm"
            className="hidden sm:flex"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
          >
            <Phone size={16} />
            WhatsApp
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-professional md:hidden">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Contato
              </button>
              <Button
                variant="whatsapp"
                size="sm"
                className="w-full mt-4"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
              >
                <Phone size={16} />
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;