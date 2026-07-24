import { Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-white/[0.01] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold tracking-widest text-white mb-4 uppercase">LEGATIX</h3>
            <p className="text-legatix-gray text-sm leading-relaxed max-w-xs">
              Infraestructura digital de élite para empresas que exigen rendimiento absoluto.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold tracking-widest text-legatix-gold uppercase mb-6">Ecosistema</h4>
            <ul className="space-y-4">
              {['Comerc', 'Agro', 'Med', 'Public'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-sm text-legatix-gray hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold tracking-widest text-legatix-gold uppercase mb-6">Corporativo</h4>
            <ul className="space-y-4">
              {['Nosotros', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-sm text-legatix-gray hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold tracking-widest text-legatix-gold uppercase mb-6">Privacidad</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/terminos" className="text-sm text-legatix-gray hover:text-white transition-colors">Términos de Servicio</Link>
              </li>
              <li>
                <Link to="/politicas" className="text-sm text-legatix-gray hover:text-white transition-colors">Políticas de Datos</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-legatix-gray text-xs">
            &copy; {new Date().getFullYear()} Legatix. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-legatix-gold">
            <Globe className="w-4 h-4" />
            <span className="text-xs font-bold tracking-widest uppercase">Desplegado en Venezuela</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
