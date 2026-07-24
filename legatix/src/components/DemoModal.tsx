import React from "react";
import { useState } from 'react';
import { X, Send } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    industry: 'Legatix Comerc',
    email: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "573208681946";
    const message = `Hola, me gustaría agendar una demostración de Legatix.
    
*Nombre:* ${formData.name}
*Empresa:* ${formData.company}
*Industria:* ${formData.industry}
*Correo:* ${formData.email}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-legatix-bg border border-white/10 rounded-2xl w-full max-w-md p-6 sm:p-8 shadow-[0_0_50px_rgba(212,175,55,0.1)] overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-legatix-gold/5 rounded-full blur-[60px] pointer-events-none" />

        <div className="relative z-10 flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            Solicitar <span className="text-legatix-gold">Demo</span>
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <p className="text-sm text-legatix-gray mb-8 relative z-10">
          Completa el formulario y te enviaremos la solicitud directamente por WhatsApp para coordinar la demostración de tu infraestructura.
        </p>

        <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
          <div className="space-y-1">
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

          <div className="space-y-1">
            <label htmlFor="company" className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Empresa / Negocio</label>
            <input 
              required
              type="text" 
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Ej. Distribuidora Andes"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-legatix-gold/50 focus:ring-1 focus:ring-legatix-gold/50 transition-all"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="industry" className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Industria de Interés</label>
            <select
              required
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-legatix-gold/50 focus:ring-1 focus:ring-legatix-gold/50 transition-all appearance-none"
            >
              <option value="Legatix Comerc">Legatix Comerc (Retail y Ventas)</option>
              <option value="Legatix Agro">Legatix Agro (Agricultura y Ganadería)</option>
              <option value="Legatix Med">Legatix Med (Clínicas y Consultorios)</option>
              <option value="Legatix Public">Legatix Public (Instituciones y Corporaciones)</option>
              <option value="Otro">Otro sector</option>
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Correo Electrónico</label>
            <input 
              required
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ejemplo@empresa.com"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-legatix-gold/50 focus:ring-1 focus:ring-legatix-gold/50 transition-all"
            />
          </div>

          <button 
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-legatix-gold hover:bg-legatix-gold-light text-black text-sm font-bold tracking-widest rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(212,175,55,0.2)] mt-8"
          >
            ENVIAR POR WHATSAPP
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
