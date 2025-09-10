import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Página Não Encontrada
          </h2>
          <p className="text-muted-foreground mb-8">
            Oops! A página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            size="lg"
            onClick={() => window.history.back()}
            className="shadow-professional"
          >
            <ArrowLeft className="mr-2" size={20} />
            Voltar
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.location.href = '/'}
          >
            <Home className="mr-2" size={20} />
            Ir para Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
