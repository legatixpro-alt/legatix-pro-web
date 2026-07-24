import { ShieldCheck, Target, Eye, ChevronRight } from 'lucide-react';

export function MissionVision() {
  return (
    <section className="py-24 relative overflow-hidden" id="nosotros">
      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Top Icon */}
        <div className="w-14 h-14 rounded-full border border-legatix-gold/20 flex items-center justify-center mb-8 bg-legatix-gold/[0.02]">
          <ShieldCheck className="w-6 h-6 text-legatix-gold" />
        </div>

        {/* Title & Description */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Arquitectura Digital <span className="text-legatix-gold">de Élite</span>
          </h2>
          <p className="text-legatix-gray text-lg leading-relaxed max-w-3xl mx-auto">
            Legatix es más que un sistema; es una infraestructura digital de vanguardia 
            diseñada para centralizar operaciones y escalar negocios en industrias críticas.<br className="hidden md:block" />
            No proveemos simple software; <span className="text-white font-bold">proveemos rendimiento absoluto a través de precisión tecnológica.</span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16">
          
          {/* Mission Card */}
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col items-start hover:bg-white/[0.03] transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-legatix-gold flex items-center justify-center">
                <Target className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-black tracking-widest text-white uppercase">MISIÓN</h3>
            </div>
            <p className="text-legatix-gray text-sm md:text-base leading-relaxed">
              Empoderar a las empresas transformando el caos administrativo en agilidad operativa y decisiones basadas en datos puros. Forjamos el estándar definitivo para la gestión inteligente, permitiendo que nuestros clientes operen con el máximo nivel de control y eficiencia.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col items-start hover:bg-white/[0.03] transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-legatix-gold flex items-center justify-center">
                <Eye className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-black tracking-widest text-white uppercase">VISIÓN</h3>
            </div>
            <p className="text-legatix-gray text-sm md:text-base leading-relaxed">
              Ser la infraestructura digital dominante en la región, unificando sectores como el retail, agro y salud bajo un ecosistema tecnológico unificado y escalable. Aspiramos a ser el motor central que garantice el dominio absoluto del mercado para todos nuestros aliados.
            </p>
          </div>

        </div>

        {/* CTA Button */}
        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-legatix-gold hover:bg-legatix-gold-light text-black text-sm font-bold tracking-widest rounded-md transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
          ÚNETE A LA EVOLUCIÓN
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>
    </section>
  );
}
