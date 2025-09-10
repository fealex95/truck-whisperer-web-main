import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Wrench,
  Cog,
  Battery,
  Gauge,
  Truck,
  Settings,
  Phone,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const whatsappNumber = "5511940377688"; // Replace with actual number

  const services = [
    {
      icon: Cog,
      title: "Motor e Transmissão",
      description: "Manutenção completa de motor diesel, caixa de marcha e diferencial",
      features: ["Troca de óleo", "Revisão de motor", "Reparo de transmissão", "Diagnóstico eletrônico"],
      whatsappMessage: "Olá! Preciso de serviços de motor e transmissão para meu caminhão."
    },
    {
      icon: Truck,
      title: "Sistema de Freios",
      description: "Serviços completos de freios para máxima segurança do seu caminhão",
      features: ["Pastilhas e lonas", "Sistema ABS", "Freio motor", "Inspeção completa"],
      whatsappMessage: "Olá! Gostaria de verificar o sistema de freios do meu caminhão."
    },
    {
      icon: Battery,
      title: "Sistema Elétrico",
      description: "Diagnóstico e reparo de todo sistema elétrico e eletrônico",
      features: ["Alternador", "Motor de partida", "Central eletrônica", "Instalação elétrica"],
      whatsappMessage: "Olá! Estou com problemas elétricos no meu caminhão."
    },
    {
      icon: Gauge,
      title: "Suspensão e Direção",
      description: "Manutenção de suspensão pneumática, direção hidráulica e alinhamento",
      features: ["Suspensão pneumática", "Direção hidráulica", "Alinhamento", "Balanceamento"],
      whatsappMessage: "Olá! Preciso verificar a suspensão e direção do meu caminhão."
    },
    {
      icon: Settings,
      title: "Ar Condicionado",
      description: "Manutenção e reparo do sistema de climatização da cabine",
      features: ["Carga de gás", "Compressor", "Condensador", "Evaporador"],
      whatsappMessage: "Olá! O ar condicionado do meu caminhão não está funcionando bem."
    },
    {
      icon: Wrench,
      title: "Manutenção Preventiva",
      description: "Revisões completas para evitar problemas e reduzir custos",
      features: ["Revisão geral", "Troca de filtros", "Lubrificação", "Check-up completo"],
      whatsappMessage: "Olá! Gostaria de agendar uma manutenção preventiva."
    }
  ];

  const handleServiceWhatsApp = (message: string) => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços especializados para manter seu caminhão
            sempre em perfeito estado de funcionamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-professional transition-smooth border-border bg-card">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-6 group-hover:scale-110 transition-bounce">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-safety-orange flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="whatsapp"
                    className="w-full"
                    onClick={() => handleServiceWhatsApp(service.whatsappMessage)}
                  >
                    <Phone className="mr-2" size={16} />
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* All Brands Service */}
        <div className="mt-16 text-center bg-gradient-hero rounded-2xl p-8 shadow-professional">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Atendemos Todas as Marcas
          </h3>
          <p className="text-primary-foreground/90 mb-6 text-lg">
            Mercedes, Volvo, Scania, Iveco, Man, Ford, Volkswagen e todas as demais marcas
          </p>
          <Button
            variant="whatsapp"
            size="lg"
            onClick={() => handleServiceWhatsApp("Olá! Gostaria de saber mais sobre os serviços para a minha marca de caminhão.")}
            className="shadow-accent transform hover:scale-105 transition-bounce"
          >
            <Phone className="mr-2" size={20} />
            Falar sobre Minha Marca
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;