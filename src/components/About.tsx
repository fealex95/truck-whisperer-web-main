import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  Clock,
  Phone,
  MapPin,
  Star
} from "lucide-react";

const About = () => {
  const whatsappNumber = "5511940377688"; // Replace with actual number
  const whatsappMessage = "Olá! Gostaria de conhecer mais sobre a oficina.";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const stats = [
    {
      icon: Clock,
      number: "15+",
      label: "Anos de Experiência",
      description: "Atendendo caminhoneiros com excelência"
    },
    {
      icon: Users,
      number: "1000+",
      label: "Caminhões Atendidos",
      description: "Por ano em nossa oficina"
    },
    {
      icon: Star,
      number: "98%",
      label: "Satisfação",
      description: "Clientes satisfeitos e fidelizados"
    },
    {
      icon: Award,
      number: "24h",
      label: "Atendimento",
      description: "Suporte de emergência disponível"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Sobre Nossa <span className="text-primary">Oficina</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Há mais de 15 anos no mercado, somos especialistas em manutenção e reparo de caminhões.
              Nossa missão é manter sua frota sempre em movimento com serviços de qualidade e
              atendimento diferenciado.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Equipe Especializada</h3>
                  <p className="text-muted-foreground">
                    Mecânicos certificados e experientes em sistemas de caminhões pesados.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Localização Estratégica</h3>
                  <p className="text-muted-foreground">
                    Situada em ponto de fácil acesso para caminhões de todos os tamanhos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Peças Originais</h3>
                  <p className="text-muted-foreground">
                    Utilizamos apenas peças originais e de primeira qualidade em todos os reparos.
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="whatsapp"
              size="lg"
              onClick={handleWhatsAppClick}
              className="shadow-accent transform hover:scale-105 transition-bounce"
            >
              <Phone className="mr-2" size={20} />
              Falar com Nossa Equipe
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center border-border bg-gradient-subtle hover:shadow-professional transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-foreground mb-2">
                      {stat.label}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-hero rounded-2xl p-8 shadow-professional">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Nossa Missão
            </h3>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              "Manter os caminhões em movimento é nossa paixão. Oferecemos soluções rápidas,
              eficientes e confiáveis para que nossos clientes possam focar no que fazem de melhor:
              transportar o Brasil."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;