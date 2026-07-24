import { useState, useRef, useEffect } from 'react';
import { Shield, ShoppingCart, BarChart3, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DemoModal } from '../components/DemoModal';
import { SEO } from '../components/SEO';

export function Comerc() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log("Comerc video autoplay prevented or delayed:", err);
      });
    }
  }, []);

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Legatix Comerc",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "applicationCategory": "BusinessApplication",
    "description": "El motor definitivo para el retail moderno. Software de gestión de inventarios y puntos de venta masivos.",
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
        title="Legatix Comerc - Software para Retail y Ventas" 
        description="El motor definitivo para el retail moderno. Transforma operaciones masivas en un flujo ininterrumpido de precisión y rentabilidad. Gestión de inventarios y puntos de venta."
        keywords="software retail, punto de venta, control de inventario, software para supermercados, gestión de ventas, sistema POS Venezuela"
        canonicalUrl="https://legatix.pro/comerc"
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
              Legatix <span className="text-legatix-gold">Comerc</span>
            </h1>
            <p className="text-xl text-legatix-gray leading-relaxed mb-8">
              El motor definitivo para el retail moderno. Transforma operaciones masivas en un flujo ininterrumpido de precisión y rentabilidad. Centraliza tu inventario, domina tus puntos de venta y audita cada transacción en tiempo real con tecnología diseñada para escalar sin límites.
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
                src="/legatix-comerc-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/legatix-comerc.jpeg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-legatix-gold/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-legatix-gold/10 flex items-center justify-center mb-6">
              <ShoppingCart className="w-6 h-6 text-legatix-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Control de Inventario</h3>
            <p className="text-legatix-gray text-sm leading-relaxed">
              Gestión milimétrica de stock multialmacén. Alertas de reposición automáticas y trazabilidad absoluta de cada unidad de negocio.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-legatix-gold/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-legatix-gold/10 flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-legatix-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Ventas Masivas</h3>
            <p className="text-legatix-gray text-sm leading-relaxed">
              Infraestructura preparada para el alto rendimiento. Facturación ultra-rápida, integración de medios de pago y sincronización instantánea.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-legatix-gold/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-legatix-gold/10 flex items-center justify-center mb-6">
              <Lock className="w-6 h-6 text-legatix-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Auditoría en Tiempo Real</h3>
            <p className="text-legatix-gray text-sm leading-relaxed">
              Cierres de caja herméticos, arqueos exactos y prevención de fugas con un sistema de permisos jerárquicos inquebrantable.
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
