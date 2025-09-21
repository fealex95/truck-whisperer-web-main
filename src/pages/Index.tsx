import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsAppIcon from "@/components/FloatingWhatsAppIcon";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags via Head */}
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsAppIcon />

      {/* Additional Structured Data for Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${typeof window !== 'undefined' ? window.location.origin : ''}/#organization`,
                "name": "Nobrega Mecânica",
                "alternateName": "Oficina Mecânica de Caminhões",
                "description": "Especialistas em manutenção e reparo de caminhões há mais de 15 anos",
                "url": typeof window !== 'undefined' ? window.location.origin : '',
                "logo": {
                  "@type": "ImageObject",
                  "url": `${typeof window !== 'undefined' ? window.location.origin : ''}/favicon.ico`
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+5511940377688",
                  "contactType": "Customer Service",
                  "areaServed": "BR",
                  "availableLanguage": "Portuguese"
                },
                "sameAs": [
                  "https://www.facebook.com/mecanicatruck",
                  "https://www.instagram.com/mecanicatruck"
                ]
              },
              {
                "@type": "LocalBusiness",
                "@id": `${typeof window !== 'undefined' ? window.location.origin : ''}/#localbusiness`,
                "name": "Nobrega Mecânica",
                "description": "Oficina mecânica especializada em caminhões com mais de 15 anos de experiência",
                "url": typeof window !== 'undefined' ? window.location.origin : '',
                "telephone": "+5511940377688",
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "R. Itaperuna, 174 - Jardim Fatima, Guarulhos",
                  "addressLocality": "São Paulo",
                  "addressRegion": "SP",
                  "postalCode": "07177-050",
                  "addressCountry": "BR"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": -23.5505,
                  "longitude": -46.6333
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "07:00",
                    "closes": "18:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "08:00",
                    "closes": "12:00"
                  }
                ]
              },
              {
                "@type": "WebSite",
                "@id": `${typeof window !== 'undefined' ? window.location.origin : ''}/#website`,
                "url": typeof window !== 'undefined' ? window.location.origin : '',
                "name": "Nobrega Mecânica - Oficina de Caminhões",
                "description": "Site oficial da Nobrega Mecânica, oficina especializada em manutenção e reparo de caminhões",
                "publisher": {
                  "@id": `${typeof window !== 'undefined' ? window.location.origin : ''}/#organization`
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": `${typeof window !== 'undefined' ? window.location.origin : ''}/?s={search_term_string}`,
                  "query-input": "required name=search_term_string"
                }
              }
            ]
          })
        }}
      />
    </div>
  );
};

export default Index;