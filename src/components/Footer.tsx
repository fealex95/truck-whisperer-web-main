import { Button } from "@/components/ui/button";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  MessageCircle,
  Facebook,
  Instagram
} from "lucide-react";

const Footer = () => {
  const whatsappNumber = "5511940377688"; // Replace with actual number
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Sobre", href: "#about" },
    { name: "Contato", href: "#contact" }
  ];

  const services = [
    "Motor e Transmissão",
    "Sistema de Freios",
    "Sistema Elétrico",
    "Suspensão e Direção",
    "Ar Condicionado",
    "Manutenção Preventiva"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Vim através do site e gostaria de mais informações.")}`, '_blank');
  };

  return (
    <footer className="bg-steel-gray text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">Nobrega Mecânica</span>
            </div>

            <p className="text-background/80 leading-relaxed">
              Especialistas em manutenção e reparo de caminhões há mais de 15 anos.
              Qualidade, confiança e atendimento diferenciado.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-safety-orange" />
                <span className="text-background/90">(11) 94037-7688</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-safety-orange" />
                <span className="text-background/90">(11) 94037-7688</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-safety-orange" />
                <span className="text-background/90">atendimento@nobregamecanica.com.br</span>
              </div>
            </div>

            <Button
              variant="whatsapp"
              onClick={handleWhatsAppClick}
              className="w-full"
            >
              <MessageCircle className="mr-2" size={16} />
              Falar no WhatsApp
            </Button>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-background">
              Links Rápidos
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-background/80 hover:text-safety-orange transition-smooth text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-background">
              Nossos Serviços
            </h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="text-background/80 text-sm">
                  • {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-background">
              Informações
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex items-start space-x-3 mb-2">
                  <a href="https://maps.app.goo.gl/k5Eda97FwSVAs8kM9" target="_blank" rel="noopener noreferrer" className="flex space-x-3">
                    <MapPin className="w-5 h-5 text-safety-orange mt-0.5" />
                    <div className="text-background/90 text-sm">
                      <p>R. Itaperuna, 174 - Jardim Fatima</p>
                      <p>Guarulhos</p>
                      <p>São Paulo/SP - CEP: 07177-050</p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-safety-orange mt-0.5" />
                  <div className="text-background/90 text-sm space-y-1">
                    <p>Seg - Sex: 07:00 - 18:00</p>
                    <p>Sábado: 08:00 - 12:00</p>
                    <p>Emergências: 24h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-semibold text-background">Siga-nos</h4>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-background/10 hover:bg-safety-orange rounded-full flex items-center justify-center transition-smooth">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-background/10 hover:bg-safety-orange rounded-full flex items-center justify-center transition-smooth">
                  <Instagram className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/80 text-sm text-center md:text-left">
              © {currentYear} Nobrega Mecânica. Todos os direitos reservados.
            </div>
            <div className="text-background/80 text-sm text-center md:text-right">
              Oficina especializada em caminhões • CNPJ: 59.942.849/0001-27
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "Nobrega Mecânica - Oficina Especializada em Caminhões",
            "description": "Oficina mecânica especializada em manutenção e reparo de caminhões. Pronto atendimento no local.",
            "url": typeof window !== 'undefined' ? window.location.origin : '',
            "telephone": "+5511940377688",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "R. Itaperuna, 174 - Jardim Fatima, Guarulhos",
              "addressLocality": "São Paulo",
              "addressRegion": "SP",
              "postalCode": "07177-050",
              "addressCountry": "BR",
              "googleMapsLink": "https://maps.app.goo.gl/k5Eda97FwSVAs8kM9"
            },
            "openingHours": [
              "Mo-Fr 07:00-18:00",
              "Sa 08:00-12:00"
            ],
            "priceRange": "$$",
            "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
            "areaServed": "São Paulo",
            "serviceType": "Manutenção de Caminhões"
          })
        }}
      />
    </footer>
  );
};

export default Footer;