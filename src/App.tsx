import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Wrench, 
  Heart, 
  Users, 
  Building2, 
  CheckCircle2, 
  ChevronDown,
  Menu,
  X,
  Activity,
  Award,
  FileText,
  Sparkles,
  Zap,
  AlertCircle,
  Check,
  Minus,
  Instagram,
  Store
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';

// --- Components ---

const WhatsAppLogo = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2a10 10 0 0 0-8.79 14.76L2 22l5.4-1.18A10 10 0 1 0 12 2Zm5.86 14.24c-.24.67-1.4 1.29-1.93 1.37-.5.07-1.14.1-1.84-.12-.43-.13-.98-.32-1.69-.62-2.97-1.28-4.9-4.27-5.04-4.47-.13-.2-1.2-1.6-1.2-3.05s.77-2.17 1.04-2.47c.27-.3.6-.37.8-.37h.58c.18 0 .41-.07.64.49.24.58.82 2 .89 2.15.07.15.12.33.02.53-.1.2-.15.33-.3.5-.14.17-.3.38-.43.5-.14.13-.28.28-.12.55.15.27.69 1.12 1.48 1.82 1.02.9 1.88 1.18 2.15 1.32.27.13.43.12.58-.08.15-.2.65-.75.83-1 .18-.25.36-.22.6-.13.25.08 1.55.73 1.81.86.27.13.45.2.52.32.07.12.07.72-.17 1.39Z" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const WHATSAPP_URL = "https://wa.me/5491157535240";

  const navLinks = [
    { name: 'Para quién', href: '#para-quien' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Técnico', href: '#tecnico' },
    { name: 'Instituciones', href: '#instituciones' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/assets/logo-les.svg"
            alt="Logo de L.E.S."
            className="w-11 h-11 rounded-lg object-cover"
          />
          <div className="flex flex-col leading-none">
            <span className="font-black text-xl tracking-tighter text-les-primary font-display">L.E.S.</span>
            <span className="text-[8px] font-bold uppercase tracking-widest text-les-accent">Tecnología Asistiva</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-les-text-secondary">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-les-primary transition-colors">{link.name}</a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-les-accent text-white px-5 py-2 rounded-full font-bold text-sm hover:brightness-110 transition-all shadow-sm"
          >
            <WhatsAppLogo size={16} />
            Consultar ahora
          </a>
          <button className="md:hidden text-les-text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-les-border overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-les-text-primary py-2 border-b border-les-bg last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="bg-les-accent text-white w-full py-4 rounded-xl font-bold text-lg mt-2 text-center flex items-center justify-center gap-2"
              >
                <WhatsAppLogo size={20} />
                Hablar por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden bg-gradient-to-b from-les-secondary/30 to-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-les-success-bg text-les-primary-dark rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            Innovación en Autonomía
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-les-text-primary leading-[1.1] mb-6 font-display">
            Más autonomía, higiene y seguridad en el baño <span className="text-les-primary">sin hacer obra</span>
          </h1>
          <p className="text-lg md:text-xl text-les-text-secondary mb-8 leading-relaxed max-w-xl">
            L.E.S. combina elevador sanitario y sistema de higiene en una solución práctica, durable y de rápida instalación para hogares, clínicas y geriátricos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a 
              href="https://wa.me/5491157535240"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-les-accent text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <WhatsAppLogo size={20} />
              Hablar por WhatsApp
            </a>
            <a 
              href="https://limpiadorles.mitiendanube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-les-primary border-2 border-les-border px-8 py-4 rounded-2xl font-bold text-lg hover:bg-les-bg transition-all flex items-center justify-center gap-2"
            >
              <Store size={20} />
              Ver Tienda Online
            </a>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              { icon: Clock, text: "Instalación rápida" },
              { icon: Zap, text: "Solución 2 en 1" },
              { icon: ShieldCheck, text: "Alta durabilidad" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-les-text-secondary font-semibold text-sm">
                <item.icon size={18} className="text-les-accent" />
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://picsum.photos/seed/les-hero/800/600" 
              alt="L.E.S. Instalado" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-les-secondary rounded-full blur-3xl -z-10 opacity-50"></div>
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-les-accent rounded-full blur-3xl -z-10 opacity-20"></div>
        </motion.div>
      </div>
    </section>
  );
};

const TargetAudience = () => {
  const audiences = [
    { title: "Personas con movilidad reducida", icon: Users, desc: "Recuperan independencia en su rutina diaria." },
    { title: "Adultos mayores", icon: Heart, desc: "Seguridad y confort para prevenir accidentes." },
    { title: "Rehabilitación y postoperatorios", icon: Activity, desc: "Facilita el uso del baño durante la recuperación." },
    { title: "Cuidadores y familias", icon: ShieldCheck, desc: "Menor carga física y mayor tranquilidad." },
    { title: "Clínicas y hospitales", icon: Building2, desc: "Eficiencia operativa e higiene institucional." },
    { title: "Geriátricos", icon: Users, desc: "Estandarización y durabilidad para uso intensivo." }
  ];

  return (
    <section id="para-quien" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-les-text-primary mb-4 font-display">¿Para quién es L.E.S.?</h2>
          <p className="text-les-text-secondary max-w-2xl mx-auto">Una solución versátil diseñada para adaptarse a diferentes necesidades, tanto en el hogar como en instituciones de salud.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 bg-les-bg rounded-3xl border border-les-border hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-les-primary/10 rounded-2xl flex items-center justify-center text-les-primary mb-4">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-les-text-primary mb-2">{item.title}</h3>
              <p className="text-les-text-secondary text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const pains = [
    "Sentarse y levantarse del inodoro puede requerir un gran esfuerzo físico.",
    "Muchas soluciones son precarias, incómodas o poco higiénicas.",
    "Reformar un baño completo implica costo, tiempo y obra molesta.",
    "El cuidado diario genera sobrecarga física para familiares y personal."
  ];

  return (
    <section className="py-20 bg-les-bg px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-les-text-primary mb-8 font-display">Entendemos los desafíos diarios</h2>
          <div className="space-y-6">
            {pains.map((pain, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 mt-1">
                  <AlertCircle size={16} />
                </div>
                <p className="text-les-text-secondary font-medium">{pain}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-white rounded-3xl border border-les-border shadow-sm italic text-les-text-secondary">
            "Cuidar mejor también es reducir el esfuerzo diario. Una solución pensada para el bienestar del usuario y la tranquilidad de quienes acompañan."
          </div>
        </div>
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
          <img 
            src="https://picsum.photos/seed/les-problem/800/800" 
            alt="Desafíos de movilidad" 
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-les-primary/10 mix-blend-multiply"></div>
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  return (
    <section className="py-20 bg-white px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-les-text-primary mb-4 font-display">La solución definitiva: L.E.S.</h2>
          <p className="text-les-text-secondary max-w-2xl mx-auto">Más que un elevador, una transformación completa de la experiencia sanitaria.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/les-solution/800/1000" 
                alt="L.E.S. Producto" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Callouts */}
            <div className="absolute top-10 -right-4 md:-right-10 z-20 bg-white p-4 rounded-2xl shadow-xl border border-les-border max-w-[180px]">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 size={16} className="text-les-accent" />
                <span className="font-bold text-xs uppercase text-les-primary">Elevación</span>
              </div>
              <p className="text-[10px] text-les-text-secondary">Reduce la flexión de rodillas y facilita el uso.</p>
            </div>
            <div className="absolute bottom-20 -left-4 md:-left-10 z-20 bg-white p-4 rounded-2xl shadow-xl border border-les-border max-w-[180px]">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 size={16} className="text-les-accent" />
                <span className="font-bold text-xs uppercase text-les-primary">Higiene</span>
              </div>
              <p className="text-[10px] text-les-text-secondary">Sistema de aspersión integrado para limpieza total.</p>
            </div>
          </div>

          <div className="space-y-8">
            {[
              { title: "Elevación del asiento", desc: "Altura optimizada para facilitar la transferencia desde sillas de ruedas o simplemente para levantarse con menos esfuerzo." },
              { title: "Sistema de higiene integrado", desc: "Incorpora aspersión de agua para una limpieza profunda sin necesidad de bidet adicional o esfuerzo físico excesivo." },
              { title: "Estructura metálica durable", desc: "Fabricado con materiales de alta resistencia (acero inoxidable/aluminio) que garantizan años de uso intensivo." },
              { title: "Instalación simple", desc: "Se adapta a la mayoría de los inodoros modernos en aproximadamente 10 minutos, sin necesidad de romper nada." },
              { title: "Uso doméstico e institucional", desc: "Diseño robusto que cumple con los estándares de higiene y durabilidad de clínicas y geriátricos." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-les-secondary flex items-center justify-center text-les-primary font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-les-text-primary mb-1">{item.title}</h4>
                  <p className="text-les-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            <a 
              href="https://wa.me/5491157535240"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-les-primary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:brightness-110 transition-all inline-flex items-center justify-center gap-2 text-center"
            >
              <WhatsAppLogo size={20} />
              Solicitar cotización
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    { title: "Mayor autonomía", icon: Heart, desc: "El usuario recupera la dignidad y la independencia en su higiene personal." },
    { title: "Menor esfuerzo físico", icon: Activity, desc: "Reduce la carga para cuidadores y personal de enfermería en cada transferencia." },
    { title: "Higiene superior", icon: ShieldCheck, desc: "Materiales aptos para limpieza profunda y esterilización constante." },
    { title: "Instalación sin obra", icon: Wrench, desc: "Evitá reformas costosas y ruidosas. Listo para usar en minutos." },
    { title: "Durabilidad extrema", icon: Award, desc: "Superior a cualquier suplemento plástico. Una inversión para toda la vida." },
    { title: "Ahorro real", icon: Zap, desc: "Mucho más económico que remodelar un baño o contratar asistencia permanente." }
  ];

  return (
    <section id="beneficios" className="py-20 bg-les-bg px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-les-text-primary mb-4 font-display">Beneficios que transforman vidas</h2>
          <p className="text-les-text-secondary max-w-2xl mx-auto">L.E.S. no es solo un producto, es una mejora sustancial en la calidad de vida diaria.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-les-border flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-les-secondary rounded-2xl flex items-center justify-center text-les-primary mb-6">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-les-text-primary mb-3">{item.title}</h3>
              <p className="text-les-text-secondary text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/5491157535240"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-les-accent text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:brightness-110 transition-all btn-shine inline-flex items-center gap-2"
          >
            <WhatsAppLogo size={22} />
            Pedir asesoramiento ahora
          </a>
        </div>
      </div>
    </section>
  );
};

const TechnicalSpecs = () => {
  const specs = [
    { label: "Material Estructural", value: "Acero Inoxidable / Aluminio" },
    { label: "Compatibilidad", value: "90% de inodoros modernos" },
    { label: "Tiempo de Instalación", value: "Aprox. 10 minutos" },
    { label: "Origen", value: "Industria Argentina" },
    { label: "Higiene", value: "Apto para esterilización" },
    { label: "Uso", value: "Permanente / Intensivo" }
  ];

  return (
    <section id="tecnico" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-les-primary-dark rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-les-accent/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 font-display">Confianza Profesional e Ingeniería Nacional</h2>
              <p className="text-white/70 mb-10 leading-relaxed">
                Diseñado bajo estrictos estándares de calidad, L.E.S. ofrece una robustez inigualable frente a las soluciones plásticas temporales. Es la elección preferida de profesionales de la salud.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specs.map((spec, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-[10px] uppercase font-bold text-les-accent tracking-widest mb-1">{spec.label}</div>
                    <div className="text-lg font-bold">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/les-tech/600/600" 
                alt="Detalle técnico" 
                className="w-full h-auto rounded-[2rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-4 -left-4 bg-white text-les-primary-dark p-6 rounded-2xl shadow-xl font-black text-center">
                <div className="text-3xl">100%</div>
                <div className="text-[10px] uppercase tracking-widest">Durable</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ComparisonSection = () => {
  const features = [
    { name: "Elevación sanitaria", les: true, plastic: true, reform: true },
    { name: "Higiene integrada", les: true, plastic: false, reform: false },
    { name: "Durabilidad extrema", les: true, plastic: false, reform: true },
    { name: "Instalación sin obra", les: true, plastic: true, reform: false },
    { name: "Fácil limpieza", les: true, plastic: false, reform: true },
    { name: "Uso institucional", les: true, plastic: false, reform: true },
    { name: "Dignidad del usuario", les: "Alta", plastic: "Baja", reform: "Media" }
  ];

  return (
    <section className="py-20 bg-les-bg px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-les-text-primary mb-4 font-display">¿Por qué elegir L.E.S.?</h2>
          <p className="text-les-text-secondary">Comparativa frente a soluciones tradicionales.</p>
        </div>

        {/* Mobile Comparison (Cards) */}
        <div className="md:hidden space-y-6">
          <div className="p-6 bg-les-primary text-white rounded-3xl shadow-xl">
            <h3 className="text-2xl font-black mb-4 text-center">L.E.S.</h3>
            <div className="space-y-3">
              {features.map((f, i) => (
                <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-sm opacity-80">{f.name}</span>
                  <span className="font-bold">{f.les === true ? <Check size={20} /> : f.les}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 bg-white rounded-3xl border border-les-border">
            <h3 className="text-xl font-bold mb-4 text-center text-les-text-primary">Suplementos plásticos</h3>
            <div className="space-y-3">
              {features.map((f, i) => (
                <div key={i} className="flex justify-between items-center border-b border-les-bg pb-2">
                  <span className="text-sm text-les-text-secondary">{f.name}</span>
                  <span className="font-bold text-les-text-primary">{f.plastic === true ? <Check size={20} /> : f.plastic === false ? <Minus size={20} /> : f.plastic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Comparison (Table) */}
        <div className="hidden md:block overflow-hidden rounded-[2rem] border border-les-border bg-white shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-les-primary text-white">
                <th className="p-6 font-black text-lg">Característica</th>
                <th className="p-6 font-black text-lg text-center">L.E.S.</th>
                <th className="p-6 font-black text-lg text-center">Suplementos plásticos</th>
                <th className="p-6 font-black text-lg text-center">Reforma de baño</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className="border-b border-les-bg last:border-0 hover:bg-les-bg/50 transition-colors">
                  <td className="p-6 font-bold text-les-text-primary">{f.name}</td>
                  <td className="p-6 text-center text-les-primary">
                    <div className="flex justify-center">
                      {f.les === true ? <CheckCircle2 className="text-les-accent" /> : <span className="font-black">{f.les}</span>}
                    </div>
                  </td>
                  <td className="p-6 text-center text-les-text-secondary">
                    <div className="flex justify-center">
                      {f.plastic === true ? <Check size={20} /> : f.plastic === false ? <Minus size={20} className="opacity-30" /> : f.plastic}
                    </div>
                  </td>
                  <td className="p-6 text-center text-les-text-secondary">
                    <div className="flex justify-center">
                      {f.reform === true ? <Check size={20} /> : f.reform === false ? <Minus size={20} className="opacity-30" /> : f.reform}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const InstitutionalSection = () => {
  return (
    <section id="instituciones" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-les-secondary/30 rounded-[3rem] p-8 md:p-16 border border-les-secondary">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-black text-les-text-primary mb-6 font-display">Una solución eficiente para clínicas, hospitales y geriátricos</h2>
            <p className="text-les-text-secondary text-lg mb-10 leading-relaxed">
              Optimice la carga de trabajo de su personal y mejore los estándares de higiene institucional con una implementación rápida y de bajo mantenimiento.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                "Menor esfuerzo para el personal",
                "Higiene institucional superior",
                "Rápida implementación",
                "Reducción de inversión en infraestructura",
                "Posibilidad de prueba / alquiler"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-les-text-primary">
                  <CheckCircle2 size={20} className="text-les-accent" />
                  {item}
                </div>
              ))}
            </div>
            <a 
              href="https://wa.me/5491157535240"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-les-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:brightness-110 transition-all inline-flex items-center gap-2"
            >
              <WhatsAppLogo size={20} />
              Consultar por implementación institucional
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    { name: "María G.", role: "Familiar de adulto mayor", text: "L.E.S. le devolvió la independencia a mi padre. Ya no necesita ayuda constante y se siente mucho más seguro." },
    { name: "Dr. Roberto S.", role: "Director de Clínica", text: "Implementamos L.E.S. en nuestras salas de rehabilitación y la carga física del personal disminuyó notablemente." },
    { name: "Elena P.", role: "Usuario independiente", text: "La instalación fue increíblemente rápida. No tuve que romper nada en mi baño y el sistema de higiene es excelente." }
  ];

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-les-text-primary mb-4 font-display">Lo que dicen nuestros usuarios</h2>
          <p className="text-les-text-secondary">Confianza validada por familias y profesionales de la salud.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 bg-les-bg rounded-[2.5rem] border border-les-border relative"
            >
              <div className="text-les-accent mb-4">
                {[...Array(5)].map((_, i) => <span key={i} className="text-xl">★</span>)}
              </div>
              <p className="text-les-text-primary font-medium mb-6 italic">"{t.text}"</p>
              <div>
                <div className="font-bold text-les-text-primary">{t.name}</div>
                <div className="text-xs text-les-text-secondary uppercase tracking-widest font-bold">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-50 grayscale">
          <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest"><ShieldCheck size={20} /> Industria Nacional</div>
          <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest"><Award size={20} /> Diseño Certificado</div>
          <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest"><Building2 size={20} /> Uso Institucional</div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    { q: "¿Para qué tipo de personas está pensado?", a: "Está diseñado para adultos mayores, personas con movilidad reducida (permanente o temporal), pacientes en rehabilitación postoperatoria y cualquier usuario que necesite mayor seguridad e higiene en el baño." },
    { q: "¿Se puede instalar sin hacer obra?", a: "Sí, esa es una de nuestras mayores ventajas. Se instala sobre el inodoro existente en aproximadamente 10 minutos, sin necesidad de romper azulejos ni realizar modificaciones estructurales." },
    { q: "¿Sirve para cualquier inodoro?", a: "Es compatible con el 90% de los inodoros modernos. Si tiene dudas, puede enviarnos una foto de su sanitario y nuestros técnicos le confirmarán la compatibilidad." },
    { q: "¿Cómo se limpia?", a: "Al estar fabricado en acero inoxidable y aluminio, permite una limpieza profunda con desinfectantes comunes. El sistema de aspersión también ayuda a mantener el equipo higienizado." },
    { q: "¿Es apto para clínicas o geriátricos?", a: "Absolutamente. Su robustez y facilidad de desinfección lo hacen ideal para el uso intensivo en entornos institucionales." },
    { q: "¿Hacen envíos?", a: "Sí, realizamos envíos a todo el país con embalaje reforzado para asegurar que el equipo llegue en perfectas condiciones." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-les-bg px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-les-text-primary mb-12 text-center font-display">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-les-border overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center font-bold text-les-text-primary hover:bg-les-bg transition-colors"
              >
                {faq.q}
                <ChevronDown size={20} className={`transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-les-text-secondary leading-relaxed border-t border-les-bg">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-les-primary-dark text-white pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/assets/logo-les-light.svg"
              alt="Logo de L.E.S."
              className="w-11 h-11 rounded-lg object-cover"
            />
            <span className="font-black text-2xl tracking-tighter font-display">L.E.S.</span>
          </div>
          <p className="text-white/60 leading-relaxed mb-6">
            Líderes en tecnología asistiva para el baño. Innovación argentina para la autonomía y dignidad de las personas.
          </p>
          <div className="flex gap-4">
            <motion.a 
              whileHover={{ y: -3 }} 
              href="https://www.instagram.com/limpiador.les/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-les-accent transition-colors"
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -3 }} 
              href="https://wa.me/5491157535240" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-les-accent transition-colors"
            >
              <WhatsAppLogo size={20} />
            </motion.a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6">Navegación</h4>
          <ul className="space-y-4 text-white/60">
            <li><a href="#para-quien" className="hover:text-white transition-colors">Para quién es</a></li>
            <li><a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a></li>
            <li><a href="#tecnico" className="hover:text-white transition-colors">Especificaciones</a></li>
            <li><a href="#instituciones" className="hover:text-white transition-colors">Instituciones</a></li>
            <li><a href="https://limpiadorles.mitiendanube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><Store size={16} />Tienda Online</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Contacto</h4>
          <ul className="space-y-4 text-white/60">
            <li className="flex items-center gap-3">
              <WhatsAppLogo size={18} className="text-les-accent" /> 
              <a href="https://wa.me/5491157535240" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+54 9 11 5753-5240</a>
            </li>
            <li className="flex items-center gap-3"><FileText size={18} className="text-les-accent" /> pabaru.les@gmail.com</li>
            <li className="flex items-center gap-3"><Building2 size={18} className="text-les-accent" /> Buenos Aires, Argentina</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Certificaciones</h4>
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest">Industria Nacional</div>
            <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest">Diseño Funcional</div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-white/40 text-xs">
        <p>© 2026 L.E.S. Tecnología Asistiva. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

const StickyBottomCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 w-full z-[60] p-4 md:hidden"
        >
          <a 
            href="https://wa.me/5491157535240"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-les-accent text-white py-4 rounded-2xl font-bold text-lg shadow-2xl flex items-center justify-center gap-3"
          >
            <WhatsAppLogo size={24} />
            Solicitar asesoramiento
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-les-bg selection:bg-les-primary selection:text-white font-sans text-les-text-primary">
      <Toaster position="top-center" richColors />
      <Navbar />
      <StickyBottomCTA />
      
      <main>
        <Hero />
        <TargetAudience />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <TechnicalSpecs />
        <ComparisonSection />
        <InstitutionalSection />
        <TestimonialsSection />
        <FAQSection />
        
        {/* Final CTA */}
        <section className="py-20 bg-les-primary text-white px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">Mejorá la seguridad, la higiene y la autonomía en el baño</h2>
            <p className="text-white/80 text-lg mb-10">Una solución práctica, duradera y de rápida instalación para quienes más lo necesitan.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5491157535240"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-les-primary px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:bg-les-bg transition-all inline-flex items-center gap-2 justify-center"
              >
                <WhatsAppLogo size={24} />
                Pedir asesoramiento
              </a>
              <a 
                href="https://wa.me/5491157535240"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-les-accent text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <WhatsAppLogo size={24} />
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
