import { useState, useRef, useEffect } from 'react';
import { Shield, Stethoscope, Pill, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DemoModal } from '../components/DemoModal';
import { SEO } from '../components/SEO';

export function Med() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log("Med video autoplay prevented or delayed:", err);
      });
    }
  }, []);

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Legatix Med",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "applicationCategory": "HealthApplication",
    "description": "Software integral para gestión de clínicas, consultorios, historiales médicos y control de farmacias.",
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
        title="Legatix Med - Software para Clínicas y Consultorios" 
        description="El ecosistema digital para la salud de vanguardia. Eleva el estándar de atención con una gestión clínica impecable. Historiales médicos y control farmacéutico."
        keywords="software médico, software para clínicas, gestión de consultorios, historial clínico electrónico, software para farmacias, salud digital Venezuela"
        canonicalUrl="https://legatix.pro/med"
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
              Legatix <span className="text-legatix-gold">Med</span>
            </h1>
            <p className="text-xl text-legatix-gray leading-relaxed mb-8">
              El ecosistema digital para la salud de vanguardia. Eleva el estándar de atención con una gestión clínica impecable. Centraliza historiales médicos, optimiza la administración de farmacias y agiliza la operación de clínicas y consultorios con un sistema robusto, seguro y diseñado para salvar vidas.
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
                src="/legatix-med-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/legatix-med.jpeg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-legatix-gold/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-legatix-gold/10 flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-legatix-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Historial Clínico Unificado</h3>
            <p className="text-legatix-gray text-sm leading-relaxed">
              Expedientes electrónicos seguros y accesibles al instante. Trazabilidad completa de diagnósticos, tratamientos y evolución del paciente.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-legatix-gold/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-legatix-gold/10 flex items-center justify-center mb-6">
              <Stethoscope className="w-6 h-6 text-legatix-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Gestión de Consultas</h3>
            <p className="text-legatix-gray text-sm leading-relaxed">
              Agendamiento inteligente, control de salas de espera y optimización del tiempo médico para brindar una experiencia superior al paciente.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-legatix-gold/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-legatix-gold/10 flex items-center justify-center mb-6">
              <Pill className="w-6 h-6 text-legatix-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Control Farmacéutico</h3>
            <p className="text-legatix-gray text-sm leading-relaxed">
              Inventario de medicamentos de alta precisión. Gestión de recetas, alertas de caducidad y cumplimiento normativo automatizado.
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
