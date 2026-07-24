import { useState, useRef, useEffect } from 'react';
import { Shield, Layout, Video, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DemoModal } from '../components/DemoModal';
import { SEO } from '../components/SEO';

export function Public() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log("Public video autoplay prevented or delayed:", err);
      });
    }
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Legatix Public",
    "provider": {
      "@type": "Organization",
      "name": "Legatix"
    },
    "description": "Servicio especializado en el diseño y desarrollo de páginas web corporativas y creación de contenido digital profesional.",
    "serviceType": "Desarrollo Web y Marketing Digital"
  };

  return (
    <main className="pt-24 pb-16">
      <SEO 
        title="Legatix Public - Diseño Web y Creación de Contenido" 
        description="Especializados en el diseño y desarrollo de páginas web de alto impacto, y servicios de creación de contenido profesional. Impulsa tu presencia digital."
        keywords="diseño web corporativo, creación de contenido, desarrollo web, presencia digital, marketing digital, agencias web Venezuela"
        canonicalUrl="https://legatix.pro/public"
        structuredData={serviceSchema}
      />
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-legatix-gold/30 bg-legatix-gold/5 mb-6">
              <Shield className="w-4 h-4 text-legatix-gold" />
              <span className="text-xs font-bold tracking-widest text-legatix-gold uppercase">Módulo Especializado</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Legatix <span className="text-legatix-gold">Public</span>
            </h1>
            <p className="text-xl text-legatix-gray leading-relaxed mb-8">
              El servicio definitivo para la creación de la presencia digital de tu empresa. Especializados en el diseño y desarrollo de páginas web de alto impacto, y servicios de creación de contenido profesional. Impulsa tu marca con un portal corporativo moderno, seguro y optimizado para conectar con tu audiencia y escalar tu negocio.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setIsDemoModalOpen(true)}
                className="px-8 py-4 bg-legatix-gold hover:bg-legatix-gold-light text-black text-sm font-bold tracking-widest rounded-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
              >
                SOLICITAR DEMO
              </button>
              <Link to="/" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-sm font-bold tracking-widest rounded-sm transition-colors flex items-center justify-center">
                VOLVER
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.15)] relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-legatix-bg via-transparent to-transparent z-10" />
              <video
                ref={videoRef}
                src="/legatix-public-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/legatix-public.jpeg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-legatix-gold/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-legatix-gold/10 flex items-center justify-center mb-6">
              <Layout className="w-6 h-6 text-legatix-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Diseño Web Corporativo</h3>
            <p className="text-legatix-gray text-sm leading-relaxed">
              Desarrollo de páginas web a medida, modernas, rápidas y completamente optimizadas para cualquier dispositivo.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-legatix-gold/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-legatix-gold/10 flex items-center justify-center mb-6">
              <Video className="w-6 h-6 text-legatix-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Creación de Contenido</h3>
            <p className="text-legatix-gray text-sm leading-relaxed">
              Producción de material audiovisual, redacción y contenido digital diseñado para potenciar la identidad de tu marca.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-legatix-gold/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-legatix-gold/10 flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-legatix-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Presencia Digital</h3>
            <p className="text-legatix-gray text-sm leading-relaxed">
              Estrategias de posicionamiento y diseño de interfaces de alto impacto que conectan tu empresa con el mundo digital.
            </p>
          </div>
        </div>

      </div>
      
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </main>
  );
}
