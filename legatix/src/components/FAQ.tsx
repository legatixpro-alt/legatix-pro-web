import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const faqs = [
  {
    question: '¿Qué es Legatix y qué soluciones ofrece?',
    answer: 'Legatix es una empresa especializada en el desarrollo de infraestructuras digitales de élite y software de gestión. Ofrecemos soluciones a medida para diferentes sectores: Comerc (Retail y Ventas), Agro (Agroindustria), Med (Clínicas y Consultorios), y Public (Diseño Web y Presencia Digital).',
  },
  {
    question: '¿El software de Legatix funciona en la nube?',
    answer: 'Sí, todas nuestras plataformas están basadas en arquitecturas en la nube altamente seguras y escalables, lo que te permite acceder a tu información desde cualquier lugar y en cualquier dispositivo con conexión a internet.',
  },
  {
    question: '¿Cómo garantizan la seguridad de los datos?',
    answer: 'Implementamos estándares de seguridad de grado bancario, incluyendo encriptación de extremo a extremo, copias de seguridad automáticas, control de accesos basado en roles y trazabilidad completa para asegurar que la información de tu empresa esté siempre protegida.',
  },
  {
    question: '¿Se pueden integrar los sistemas de Legatix con otras herramientas?',
    answer: 'Sí, nuestras soluciones están diseñadas con arquitecturas API-first, lo que facilita la integración fluida con sistemas de facturación, pasarelas de pago, ERPs existentes y otras herramientas esenciales para tu negocio.',
  },
  {
    question: '¿Cuánto tiempo tarda la implementación de una solución?',
    answer: 'El tiempo de implementación varía según la complejidad de los requerimientos y el sector. Soluciones estándar pueden estar operativas en semanas, mientras que proyectos corporativos a medida se planifican en fases detalladas. Contáctanos para una evaluación gratuita.',
  },
  {
    question: '¿Ofrecen soporte técnico y capacitación?',
    answer: 'Absolutamente. Nuestro compromiso no termina con la entrega del software. Proporcionamos capacitación exhaustiva a tu equipo y contamos con soporte técnico prioritario para garantizar el rendimiento continuo de tus operaciones.',
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Preguntas <span className="text-legatix-gold">Frecuentes</span></h2>
            <p className="text-xl text-legatix-gray max-w-2xl mx-auto">
              Resolvemos tus dudas sobre cómo Legatix puede transformar la infraestructura digital de tu empresa.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div 
                className={`border border-white/5 bg-white/[0.02] rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-legatix-gold/30' : 'hover:border-white/10'}`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-legatix-gold transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-legatix-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
