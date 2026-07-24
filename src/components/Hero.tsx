import { useState, useRef, useEffect } from 'react';
import { Globe, ArrowRight } from 'lucide-react';
import { DemoModal } from './DemoModal';
import { ScrollReveal } from './ScrollReveal';

export function Hero() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      video.playsInline = true;
      const playVideo = () => {
        video.play().catch(() => {
          video.muted = true;
          video.play().catch(() => {});
        });
      };
      playVideo();
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          src="/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/legatix-public.jpeg"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80 pointer-events-none"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-legatix-bg via-legatix-bg/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-legatix-bg/50 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-legatix-gold/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <ScrollReveal delay={0.1}>
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-legatix-gold/30 bg-legatix-gold/5 mb-8">
            <Globe className="w-4 h-4 text-legatix-gold" />
            <span className="text-xs font-semibold tracking-widest text-legatix-gold uppercase">El estándar definitivo en Venezuela</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Transforma tu caos <br className="hidden sm:block" /> operativo en <span className="text-legatix-gold">rendimiento<br className="hidden sm:block" /> absoluto.</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <p className="text-lg md:text-xl text-legatix-gray max-w-3xl mb-12 leading-relaxed">
            Legatix es la infraestructura digital diseñada para escalar negocios, automatizar la logística y dominar la administración empresarial con precisión milimétrica.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4}>
          <div className="flex items-center justify-center w-full sm:w-auto">
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-legatix-gold hover:bg-legatix-gold-light text-black text-sm font-bold tracking-widest rounded-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            >
              AGENDAR DEMOSTRACIÓN
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
      
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </section>
  );
}
