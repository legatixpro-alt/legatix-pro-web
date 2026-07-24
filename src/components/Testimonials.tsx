import { Star, Quote } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const testimonials = [
  {
    module: 'LEGATIX COMERC',
    quote: '"Teníamos descuadres diarios de inventario entre nuestras 4 sucursales. Desde que migramos a la infraestructura de Legatix, la sincronización de caja y almacén tiene latencia cero. Redujimos las mermas en un 94% el primer trimestre."',
    author: 'Carlos Mendoza',
    role: 'DIRECTOR DE OPERACIONES',
    company: 'Grupo Retail Sur',
    initials: 'CM'
  },
  {
    module: 'LEGATIX AGRO',
    quote: '"La trazabilidad desde la finca hasta los galpones de distribución era un caos de hojas de cálculo de Excel. Legatix centralizó la logística. Ahora sabemos el costo operativo exacto por lote en tiempo real. Es otro nivel de ingeniería."',
    author: 'Elena Rodríguez',
    role: 'GERENTE GENERAL',
    company: 'Agropecuaria El Valle',
    initials: 'ER'
  },
  {
    module: 'LEGATIX MED',
    quote: '"Manejar el inventario de la farmacia y la facturación de pacientes requería tres sistemas distintos que siempre colapsaban. Legatix unificó todo bajo roles estrictos. Una auditoría que nos tomaba días, ahora la saco en 15 minutos."',
    author: 'Dr. Roberto Vargas',
    role: 'DIRECTOR MÉDICO',
    company: 'Centro Clínico Avanzado',
    initials: 'DR'
  }
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="px-4 py-1.5 rounded-full border border-legatix-gold/30 bg-legatix-gold/5 mb-6">
              <span className="text-xs font-semibold tracking-widest text-legatix-gold uppercase">VALIDACIÓN DE MERCADO</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4 max-w-3xl leading-[1.1]">
              La élite operativa ya opera bajo nuestro estándar.
            </h2>
            <p className="text-legatix-gray max-w-2xl mx-auto">
              Líderes de la industria que dejaron atrás el software genérico para escalar con una infraestructura de rendimiento absoluto.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.author} delay={index * 0.1}>
              <div className="p-8 rounded-2xl bg-white/[0.01] border border-white/5 relative flex flex-col h-full hover:bg-white/[0.02] transition-colors">
                <Quote className="absolute top-8 right-8 w-8 h-8 text-white/5" />
                <div className="mb-6 inline-flex px-3 py-1 rounded-sm border border-legatix-gold/20 bg-legatix-gold/10 w-fit">
                   <span className="text-[10px] font-bold tracking-widest text-legatix-gold uppercase">{t.module}</span>
                </div>
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-legatix-gold text-legatix-gold" />
                  ))}
                </div>
                <p className="text-legatix-gray text-sm leading-relaxed mb-8 flex-grow">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-legatix-gold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">{t.author}</h4>
                    <p className="text-[10px] text-legatix-gray tracking-widest uppercase mt-0.5">{t.role}</p>
                    <p className="text-[10px] text-legatix-gold">{t.company}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
