import { useState, useRef, useEffect } from 'react';
import { Shield, Tractor, Truck, Activity, Bird } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DemoModal } from '../components/DemoModal';
import { SEO } from '../components/SEO';

export function Agro() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log("Agro video autoplay prevented or delayed:", err);
      });
    }
  }, []);

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Legatix Agro",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "applicationCategory": "BusinessApplication",
    "description": "Software de trazabilidad y gestión para fincas, agroindustrias y producción ganadera.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Legatix"
    }
  };

  return (
    <main className="pt-24 pb-16">
      <SEO 
        title="Legatix Agro - Software para Agroindustria y Ganadería" 
        description="El dominio total sobre la cadena agroindustrial y ganadera. Convierte la incertidumbre del campo en precisión operativa absoluta. Trazabilidad y gestión pecuaria."
        keywords="software agroindustrial, gestión ganadera, software agrícola, trazabilidad agrícola, control pecuario, gestión de fincas Venezuela"
        canonicalUrl="https://legatix.pro/agro"
        structuredData={softwareSchema}
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
              Legatix <span className="text-legatix-gold">Agro</span>
            </h1>
            <p className="text-xl text-legatix-gray leading-relaxed mb-8">
              El dominio total sobre la cadena agroindustrial y ganadera. Convierte la incertidumbre del campo en precisión operativa absoluta. Gestiona tanto tus cosechas como tu producción animal (bovina, equina y avícola) con un rigor sin precedentes. Implementa un sistema de control avanzado por galpones, asegurando una trazabilidad milimétrica desde el proceso de incubación y cría hasta la venta final del animal. Maximiza el rendimiento de tus tierras y explotaciones con tecnología diseñada para las condiciones más exigentes.
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
                src="/legatix-agro-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/legatix-agro.jpeg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-legatix-gold/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-legatix-gold/10 flex items-center justify-center mb-6">
              <Tractor className="w-6 h-6 text-legatix-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Trazabilidad Agrícola</h3>
            <p className="text-legatix-gray text-sm leading-relaxed">
              Seguimiento detallado desde la siembra hasta el anaquel. Control de lotes, certificaciones de calidad y gestión de insumos agrícolas en tiempo real.
            </p>
          </div>
          
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-legatix-gold/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-legatix-gold/10 flex items-center justify-center mb-6">
              <Bird className="w-6 h-6 text-legatix-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Gestión Pecuaria</h3>
            <p className="text-legatix-gray text-sm leading-relaxed">
              Control exhaustivo de ganado bovino, equino y aves. Monitoreo por galpones, desde el proceso de incubación hasta la comercialización del animal.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-legatix-gold/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-legatix-gold/10 flex items-center justify-center mb-6">
              <Truck className="w-6 h-6 text-legatix-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Logística Inteligente</h3>
            <p className="text-legatix-gray text-sm leading-relaxed">
              Coordinación exacta de flotas, rutas de recolección y centros de acopio. Minimiza mermas y garantiza las condiciones óptimas en cada entrega.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-legatix-gold/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-legatix-gold/10 flex items-center justify-center mb-6">
              <Activity className="w-6 h-6 text-legatix-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Rendimiento Total</h3>
            <p className="text-legatix-gray text-sm leading-relaxed">
              Proyección de costos por hectárea o por animal, análisis de rentabilidad y reportes automatizados para decisiones estratégicas inmediatas.
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
