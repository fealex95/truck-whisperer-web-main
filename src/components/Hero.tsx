import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, Star } from "lucide-react";
import heroImage from "@/assets/hero-truck-workshop.jpg";

const Hero = () => {
  const whatsappNumber = "5511940377688"; // Replace with actual number
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento para meu caminhão.";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-blue/90 to-industrial-blue/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-full border border-background/20 mb-8">
            <Shield className="w-5 h-5 text-safety-orange" />
            <span className="text-background text-sm font-medium">Oficina Especializada em Caminhões</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight">
            Manutenção e Reparo
            <span className="block text-safety-orange">de Caminhões</span>
          </h1>

          <p className="text-xl md:text-2xl text-background/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Especialistas em manutenção preventiva e corretiva de caminhões.
            Equipe experiente, peças originais e atendimento de confiança há mais de 15 anos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="whatsapp"
              size="lg"
              onClick={handleWhatsAppClick}
              className="shadow-accent transform hover:scale-105 transition-bounce"
            >
              <Phone className="mr-2" size={20} />
              Solicitar Orçamento via WhatsApp
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={scrollToServices}
              className="bg-background/10 border-background/30 text-background hover:bg-background hover:text-foreground backdrop-blur-sm transition-smooth"
            >
              Conhecer Nossos Serviços
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-background/90">
              <div className="w-12 h-12 bg-safety-orange rounded-full flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Atendimento Rápido</h3>
              <p className="text-sm">Diagnóstico e orçamento em até 2 horas</p>
            </div>

            <div className="flex flex-col items-center text-background/90">
              <div className="w-12 h-12 bg-safety-orange rounded-full flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Garantia Total</h3>
              <p className="text-sm">6 meses de garantia em todos os serviços</p>
            </div>

            <div className="flex flex-col items-center text-background/90">
              <div className="w-12 h-12 bg-safety-orange rounded-full flex items-center justify-center mb-3">
                <Star className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Excelência</h3>
              <p className="text-sm">Mais de 1000 caminhões atendidos por ano</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;