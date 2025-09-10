import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const whatsappNumber = "5511940377688"; // Replace with actual number
  const phoneNumber = "11940377688"; // Replace with actual number

  const contactMethods = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 94037-7688",
      description: "Ligue para nós",
      action: () => window.open(`tel:${phoneNumber}`),
      buttonText: "Ligar Agora",
      variant: "outline" as const
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "(11) 94037-7688",
      description: "Atendimento rápido",
      action: () => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de mais informações sobre os serviços da oficina.")}`, '_blank'),
      buttonText: "Enviar Mensagem",
      variant: "whatsapp" as const
    },
    {
      icon: Mail,
      title: "Email",
      info: "atendimento@nobregamecanica.com.br",
      description: "Nos envie um email",
      action: () => window.open("mailto:atendimento@nobregamecanica.com.br"),
      buttonText: "Enviar Email",
      variant: "outline" as const
    }
  ];

  const businessHours = [
    { day: "Segunda a Sexta", hours: "07:00 - 18:00" },
    { day: "Sábado", hours: "08:00 - 12:00" },
    { day: "Domingo", hours: "Emergências 24h" }
  ];

  const emergencyWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("🚨 EMERGÊNCIA! Preciso de atendimento urgente.")}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender seu caminhão. Entre em contato conosco
            através de qualquer um dos canais abaixo.
          </p>
        </div>

        {/* Contact Methods - Horizontal Layout */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Fale Conosco
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="hover:shadow-professional transition-smooth border-border h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>

                    <h4 className="text-lg font-semibold text-card-foreground mb-2">
                      {method.title}
                    </h4>
                    <p className="text-lg font-bold text-primary mb-2 break-all">
                      {method.info}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {method.description}
                    </p>

                    <Button
                      variant={method.variant}
                      onClick={method.action}
                      className="w-full"
                    >
                      {method.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}

          </div>

          {/* Emergency Button */}
          <div className="bg-gradient-hero rounded-xl p-6 shadow-professional text-center">
            <div className="text-primary-foreground">
              <div className="w-16 h-16 bg-safety-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-background" />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Emergência 24h
              </h4>
              <p className="mb-4 opacity-90">
                Problemas urgentes? Atendemos emergências a qualquer hora.
              </p>
              <Button
                variant="whatsapp"
                onClick={emergencyWhatsApp}
                className="shadow-accent"
              >
                <MessageCircle className="mr-2" size={16} />
                WhatsApp Emergência
              </Button>
            </div>
          </div>

          {/* Business Info - Horizontal Layout */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Informações
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Address */}
              <Card className="border-border h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-4">
                    Localização
                  </h4>
                  <div className="text-muted-foreground mb-4 space-y-1">
                    <p>Rua dos Caminhoneiros, 1234</p>
                    <p>Distrito Industrial - São Paulo/SP</p>
                    <p>CEP: 01234-567</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fácil acesso para caminhões de todos os tamanhos
                  </p>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-border h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-4">
                    Horário de Funcionamento
                  </h4>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{schedule.day}</span>
                        <span className="font-semibold text-card-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center p-6 bg-gradient-accent rounded-xl shadow-accent">
              <h4 className="text-xl font-bold text-accent-foreground mb-3">
                Precisa de Atendimento Agora?
              </h4>
              <p className="text-accent-foreground/90 mb-4">
                Entre em contato via WhatsApp para atendimento imediato
              </p>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Preciso de atendimento para meu caminhão.")}`, '_blank')}
                className="bg-background/20 border-background/30 text-background hover:bg-background hover:text-foreground backdrop-blur-sm"
              >
                <MessageCircle className="mr-2" size={20} />
                Falar Agora no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;