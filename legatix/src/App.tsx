/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Comerc } from './pages/Comerc';
import { Agro } from './pages/Agro';
import { Med } from './pages/Med';
import { Public } from './pages/Public';
import { Contacto } from './pages/Contacto';
import { Terminos } from './pages/Terminos';
import { Politicas } from './pages/Politicas';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-legatix-gold/30 selection:text-white">
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/politicas" element={<Politicas />} />
            <Route path="/comerc" element={<Comerc />} />
            <Route path="/agro" element={<Agro />} />
            <Route path="/med" element={<Med />} />
            <Route path="/public" element={<Public />} />
          </Routes>
        </div>

        <WhatsAppButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
