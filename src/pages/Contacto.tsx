import React from "react";
import { useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "584227147793";
    const msg = `Hola, me gustaría contactar a Legatix.
    
*Nombre:* ${formData.name}
*Empresa:* ${formData.company}
*Asunto:* ${formData.subject}
*Mensaje:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="pt-24 pb-16">
      <SEO 
        title="Contacto - Legatix" 
        description="Ponte en contacto con el equipo de Legatix. Estamos listos para elevar la infraestructura digital de tu empresa al más alto nivel."
        keywords="contacto legatix, atención al cliente, soporte software, contacto corporativo"
        canonicalUrl="https://legatix.pro/contacto"
      />
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Ponte en <span className="text-legatix-gold">Contacto</span>
          </h1>
          <p className="text-xl text-legatix-gray leading-relaxed">
            Estamos aquí para transformar tu empresa. Cuéntanos sobre tus necesidades y nuestro equipo te contactará para ofrecerte la solución perfecta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-white mb-8">Información de Contacto</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-legatix-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Teléfono / WhatsApp</h3>
                  <p className="text-legatix-gray">+58 422 7147793</p>
                  <p className="text-sm text-legatix-gray/70 mt-1">Lunes a Viernes, 8:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-legatix-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Correo Electrónico</h3>
                  <p className="text-legatix-gray">legatixpro@gmail.com</p>
                  <p className="text-sm text-legatix-gray/70 mt-1">Soporte y ventas corporativas</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-legatix-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Ubicación</h3>
                  <p className="text-legatix-gray">Venezuela</p>
                  <p className="text-sm text-legatix-gray/70 mt-1">Servicio a nivel nacional e internacional</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-legatix-gold/10 rounded-full blur-[80px] pointer-events-none" />
            
            <h2 className="text-2xl font-bold text-white mb-8 relative z-10">Envíanos un mensaje</h2>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Nombre Completo</label>
                  <input 
                    required
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej. Carlos Mendoza"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-legatix-gold/50 focus:ring-1 focus:ring-legatix-gold/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Empresa (Opcional)</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Ej. Corporación Andina"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-legatix-gold/50 focus:ring-1 focus:ring-legatix-gold/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Asunto</label>
                <input 
                  required
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-legatix-gold/50 focus:ring-1 focus:ring-legatix-gold/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Mensaje</label>
                <textarea 
                  required
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Detalla tu requerimiento..."
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-legatix-gold/50 focus:ring-1 focus:ring-legatix-gold/50 transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-legatix-gold hover:bg-legatix-gold-light text-black text-sm font-bold tracking-widest rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(212,175,55,0.2)] mt-4"
              >
                ENVIAR MENSAJE
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </main>
  );
}
