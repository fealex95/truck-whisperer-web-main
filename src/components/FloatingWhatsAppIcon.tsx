import { MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsAppIcon = () => {
    const handleWhatsAppClick = () => {
        const message = "Olá! Gostaria de conhecer os serviços da oficina mecânica.";
        const phoneNumber = "5511940377688"; // Substitua pelo número real
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <Button
            onClick={handleWhatsAppClick}
            className="fixed bottom-8 right-6 h-14 w-14 rounded-full bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
            size="icon"
        >
            <MessageCircleMore className="text-white" />
        </Button>
    );
};

export default FloatingWhatsAppIcon;