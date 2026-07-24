import { SEO } from '../components/SEO';

export function Politicas() {
  return (
    <main className="pt-24 pb-16">
      <SEO 
        title="Políticas de Datos - Legatix" 
        description="En Legatix nuestra prioridad absoluta es la seguridad y confidencialidad de la información de nuestros clientes. Conoce nuestras políticas de protección de datos."
        keywords="políticas de datos, privacidad, seguridad, legatix, confidencialidad, venezuela"
        canonicalUrl="https://legatix.pro/politicas"
      />
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">Políticas de <span className="text-legatix-gold">Datos</span></h1>
        
        <div className="space-y-10 text-legatix-gray">
          
          <div className="bg-legatix-gold/5 border border-legatix-gold/20 p-8 rounded-2xl mb-12">
            <h2 className="text-xl font-bold text-legatix-gold mb-4 uppercase tracking-widest">Nuestra Prioridad Absoluta</h2>
            <p className="text-white text-lg leading-relaxed">
              En Legatix entendemos que la información es el activo más valioso de su empresa. Por ello, <strong>nuestra prioridad absoluta y compromiso inquebrantable es resguardar, proteger y garantizar la confidencialidad de los datos de todos nuestros clientes</strong>. No comercializamos, no compartimos y no exponemos su información bajo ninguna circunstancia no autorizada.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Recopilación y Uso de la Información</h2>
            <p className="leading-relaxed">
              La recopilación de datos se limita estrictamente a la información necesaria para el despliegue, configuración y funcionamiento óptimo de la infraestructura tecnológica contratada (Legatix Comerc, Agro, Med o Public). Los datos alojados en nuestras plataformas son de uso exclusivo del cliente corporativo; Legatix actúa únicamente como custodio tecnológico.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Medidas de Seguridad de Grado Corporativo</h2>
            <p className="leading-relaxed">
              Implementamos protocolos de seguridad de élite para proteger su información contra accesos no autorizados, alteraciones, divulgación o destrucción. Esto incluye, pero no se limita a:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Encriptación de datos en tránsito y en reposo.</li>
              <li>Arquitecturas de red segmentadas y firewalls de última generación.</li>
              <li>Sistemas de monitoreo continuo 24/7 para detección y prevención de intrusiones.</li>
              <li>Respaldos (backups) automatizados y redundantes en locaciones seguras.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Confidencialidad en Sectores Sensibles (Legatix Med)</h2>
            <p className="leading-relaxed">
              Comprendemos la criticidad de los datos en el sector salud. Para los usuarios de Legatix Med, aplicamos políticas de privacidad estrictas y medidas técnicas avanzadas diseñadas para proteger historiales médicos e información de pacientes, garantizando el secreto profesional y el derecho a la intimidad consagrado en la legislación venezolana.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Control de Acceso y Trazabilidad</h2>
            <p className="leading-relaxed">
              Nuestros sistemas operan bajo el principio de "privilegio mínimo". El acceso a la infraestructura está estrictamente limitado a personal técnico autorizado y solo cuando sea requerido para labores de mantenimiento o soporte. Todas las acciones dentro de los sistemas dejan una huella de auditoría (trazabilidad) inalterable para garantizar la transparencia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Propiedad de los Datos</h2>
            <p className="leading-relaxed">
              Usted mantiene en todo momento la titularidad, el control y los derechos de propiedad intelectual sobre todos los datos, contenidos y archivos que introduzca, procese o almacene en las plataformas de Legatix. Al finalizar la relación comercial, facilitamos procesos seguros para la extracción o destrucción certificada de su información, según lo requiera.
            </p>
          </section>
          
          <section className="pt-8 border-t border-white/10 mt-12">
            <p className="text-sm text-legatix-gray/70">
              Última actualización: 20 de Julio de 2026. Para consultas sobre privacidad, contáctenos a legatixpro@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
