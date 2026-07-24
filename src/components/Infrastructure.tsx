import { ShieldCheck, Cloud, Zap, Server } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const features = [
  {
    icon: ShieldCheck,
    title: 'Seguridad de Grado Bancario',
    desc: 'Encriptación de extremo a extremo. Los datos de tu empresa, inventarios y clientes están blindados contra vulnerabilidades.',
  },
  {
    icon: Cloud,
    title: 'Nube de Alta Disponibilidad',
    desc: 'Uptime garantizado del 99.9%. Operamos sobre un conjunto de servidores para que tu negocio nunca, bajo ninguna circunstancia, se detenga.',
  },
  {
    icon: Zap,
    title: 'Latencia Cero',
    desc: 'Arquitectura de microservicios que procesa miles de transacciones, facturas y movimientos de inventario en milisegundos.',
  },
  {
    icon: Server,
    title: 'Escalabilidad Elástica',
    desc: 'Ya sea que proceses 100 o 100,000 operaciones al día. Nuestra base de datos crece automáticamente según el volumen de tu empresa.',
  }
];

export function Infrastructure() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Infraestructura a prueba de <span className="text-legatix-gold">todo.</span>
            </h2>
            <p className="text-legatix-gray max-w-2xl mx-auto">
              El estándar corporativo exige robustez. Legatix opera sobre una arquitectura técnica diseñada para soportar las operaciones más críticas del país.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, index) => (
            <ScrollReveal key={feat.title} delay={index * 0.1}>
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors h-full">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <feat.icon className="w-6 h-6 text-legatix-gold" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                  {feat.title}
                </h3>
                <p className="text-legatix-gray text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
