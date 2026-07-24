import { Hero } from '../components/Hero';
import { Modules } from '../components/Modules';
import { Infrastructure } from '../components/Infrastructure';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { SEO } from '../components/SEO';

export function Home() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Legatix",
    "url": "https://legatix.pro",
    "logo": "https://legatix.pro/legatix-logo.png",
    "description": "Legatix ofrece sistemas y plataformas de gestión para comercios, agroindustria, medicina y corporaciones en Venezuela.",
    "sameAs": [
      "https://www.facebook.com/legatix",
      "https://www.instagram.com/legatix",
      "https://www.linkedin.com/company/legatix"
    ]
  };

  return (
    <main>
      <SEO 
        title="Infraestructura Digital de Élite" 
        description="Legatix ofrece sistemas y plataformas de gestión para comercios, agroindustria, medicina y corporaciones con rendimiento absoluto."
        keywords="software empresarial, gestión retail, gestión agroindustrial, gestión clínica, diseño web corporativo, software de gestión en Venezuela"
        canonicalUrl="https://legatix.pro"
        structuredData={orgSchema}
      />
      <Hero />
      
      <div className="relative bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537504-6427a16b0a28?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-[0.02] pointer-events-none" />
        <Modules />
        <Infrastructure />
        <Testimonials />
        <FAQ />
      </div>
    </main>
  );
}
