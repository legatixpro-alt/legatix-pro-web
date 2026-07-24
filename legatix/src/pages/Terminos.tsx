import { SEO } from '../components/SEO';

export function Terminos() {
  return (
    <main className="pt-24 pb-16">
      <SEO 
        title="Términos de Servicio - Legatix" 
        description="Términos y condiciones de servicio de Legatix, conforme a la legislación venezolana sobre tecnologías de la información."
        keywords="términos de servicio, legal, legatix, venezuela, condiciones de uso"
        canonicalUrl="https://legatix.pro/terminos"
      />
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">Términos de <span className="text-legatix-gold">Servicio</span></h1>
        
        <div className="space-y-10 text-legatix-gray">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Aspectos Generales y Marco Legal</h2>
            <p className="leading-relaxed">
              Los presentes Términos de Servicio regulan el uso de las plataformas, software y servicios ofrecidos por Legatix. 
              Al acceder, navegar o utilizar nuestras soluciones tecnológicas, el Usuario acepta estar sujeto a las presentes 
              condiciones. Estas normativas se rigen en estricto apego a la <strong className="text-white">Constitución de la República Bolivariana de Venezuela</strong>, 
              la <strong className="text-white">Ley de Mensajes de Datos y Firmas Electrónicas (Decreto 1.204)</strong>, la <strong className="text-white">Ley Especial Contra los Delitos Informáticos</strong> y demás leyes aplicables al comercio electrónico y servicios de tecnología en el territorio nacional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Validez de los Mensajes de Datos y Contratos Electrónicos</h2>
            <p className="leading-relaxed">
              En conformidad con la Ley de Mensajes de Datos y Firmas Electrónicas, toda información, contrato, acuerdo o notificación 
              transmitida a través de las plataformas de Legatix (incluyendo correos electrónicos y aceptación de términos en línea) 
              tendrá la misma eficacia probatoria y validez legal que la ley otorga a los documentos escritos y firmados en formato físico.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Seguridad de la Información y Delitos Informáticos</h2>
            <p className="leading-relaxed">
              Legatix implementa medidas de seguridad de alto nivel para resguardar la infraestructura digital. El Usuario se compromete a no utilizar 
              nuestros servicios para actividades ilícitas. Cualquier intento de vulneración de sistemas, acceso indebido, sabotaje, espionaje informático 
              o alteración de datos será denunciado y procesado de acuerdo con las disposiciones penales de la Ley Especial Contra los Delitos Informáticos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Privacidad y Tratamiento de Datos Personales</h2>
            <p className="leading-relaxed">
              El tratamiento de los datos suministrados por los clientes (historias clínicas en Legatix Med, bases de datos de clientes en Legatix Comerc y Agro) 
              se realiza garantizando el derecho al honor, a la intimidad, a la confidencialidad y a la reputación, consagrados en el Artículo 60 de la Constitución Nacional. 
              Legatix actúa únicamente como proveedor de infraestructura tecnológica; la propiedad, gestión y responsabilidad legal del contenido y los datos alojados pertenecen exclusivamente a la empresa contratante del servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Propiedad Intelectual y Derechos de Autor</h2>
            <p className="leading-relaxed">
              El código fuente, diseños, logotipos, arquitecturas de software y algoritmos desarrollados por Legatix (Comerc, Agro, Med, Public) están protegidos 
              por la Ley sobre el Derecho de Autor y la Ley de Propiedad Industrial vigentes en Venezuela. El uso de los servicios no otorga al Usuario derecho 
              alguno sobre la propiedad intelectual del software, salvo las licencias de uso expresamente concedidas en los contratos de servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Limitación de Responsabilidad</h2>
            <p className="leading-relaxed">
              Legatix se esfuerza por mantener un nivel operativo de "rendimiento absoluto" y alta disponibilidad. No obstante, no seremos responsables por interrupciones del servicio 
              derivadas de fallas en los proveedores de telecomunicaciones nacionales, interrupciones del servicio eléctrico o eventos de fuerza mayor. El compromiso 
              de nivel de servicio (SLA) se estipulará en el contrato de licenciamiento específico con cada cliente corporativo.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Modificaciones a los Términos</h2>
            <p className="leading-relaxed">
              Legatix se reserva el derecho de modificar estos Términos de Servicio en cualquier momento para adaptarlos a novedades legislativas, jurisprudenciales 
              o prácticas del mercado venezolano. Las modificaciones entrarán en vigencia inmediatamente después de su publicación en este sitio web.
            </p>
          </section>
          
          <section className="pt-8 border-t border-white/10 mt-12">
            <p className="text-sm text-legatix-gray/70">
              Última actualización: 20 de Julio de 2026.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
