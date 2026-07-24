import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from './ScrollReveal';

const modules = [
  {
    name: 'Comerc',
    desc: 'Retail y ventas masivas. Control de inventario y caja.',
    image: '/legatix-comerc.jpeg',
    path: '/comerc',
  },
  {
    name: 'Agro',
    desc: 'Fincas y productoras. Trazabilidad y logística rural.',
    image: '/legatix-agro.jpeg',
    path: '/agro',
  },
  {
    name: 'Med',
    desc: 'Clínicas y consultorios. Gestión clínica y farmacéutica.',
    image: '/legatix-med.jpeg',
    path: '/med',
  },
  {
    name: 'Public',
    desc: 'Diseño web corporativo, presencia digital y creación de contenido.',
    image: '/legatix-public.jpeg',
    path: '/public',
  }
];

export function Modules() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Un motor central. <span className="text-legatix-gold">Múltiples industrias.</span>
            </h2>
            <p className="text-legatix-gray max-w-2xl mx-auto">
              Selecciona el módulo especializado para la naturaleza de tu negocio. Todos respaldados por la misma potencia de infraestructura técnica.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod, index) => (
            <ScrollReveal key={mod.name} delay={index * 0.1}>
              <Link 
                to={mod.path}
                className="block p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-legatix-gold/30 transition-colors group relative h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-legatix-gold to-yellow-700 p-[1px] mb-6 shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-shadow">
                  <div className="w-full h-full bg-legatix-bg rounded-[15px] overflow-hidden flex items-center justify-center relative">
                    <img 
                      src={mod.image} 
                      alt={`Legatix ${mod.name}`} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <Shield className="hidden w-8 h-8 text-legatix-gold relative z-10" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Legatix <span className="text-legatix-gold">{mod.name}</span>
                </h3>
                <p className="text-legatix-gray text-sm leading-relaxed relative z-10">
                  {mod.desc}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
