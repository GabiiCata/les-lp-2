import { type ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  Check,
  CircleCheck,
  HeartHandshake,
  House,
  Menu,
  Shield,
  Store,
  Users,
  Wrench,
  X,
} from 'lucide-react';
import { Toaster, toast } from 'sonner';

const WHATSAPP_URL = 'https://wa.me/5491157535240';
const STORE_URL = 'https://limpiadorles.mitiendanube.com/';

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Section = ({ id, children, className = '' }: { id?: string; children: ReactNode; className?: string }) => (
  <motion.section
    id={id}
    variants={reveal}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.15 }}
    className={className}
  >
    {children}
  </motion.section>
);

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: '¿Para quién es?', href: '#para-quien' },
    { name: 'Problemas reales', href: '#problemas' },
    { name: 'Solución técnica', href: '#solucion' },
    { name: 'Institucional', href: '#institucional' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-les-accent-stone/40 bg-les-primary-sand/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#inicio" className="text-2xl font-semibold tracking-tight text-les-text-taupe">L.E.S.</a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-base text-les-text-taupe transition hover:opacity-70">{link.name}</a>
          ))}
        </div>
        <button className="rounded-md p-2 text-les-text-taupe md:hidden" onClick={() => setOpen((prev) => !prev)} aria-label="Abrir menú">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-les-accent-stone/40 bg-les-primary-sand px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-lg text-les-text-taupe">{link.name}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default function App() {
  useEffect(() => {
    toast('Asesoramiento disponible por WhatsApp.', { description: 'Respuesta ágil para hogares e instituciones.' });
  }, []);

  const peopleCards = [
    { icon: Users, title: 'Personas con movilidad reducida', copy: 'Mayor estabilidad y autonomía en cada uso.' },
    { icon: HeartHandshake, title: 'Adultos mayores', copy: 'Más seguridad diaria, con menos riesgo de caídas.' },
    { icon: Wrench, title: 'Rehabilitación', copy: 'Acompaña procesos postoperatorios y de recuperación funcional.' },
  ];

  const supportCards = ['Cuidadores', 'Clínicas', 'Geriátricos'];

  const problems = ['Esfuerzo físico al sentarse y levantarse.', 'Soluciones precarias con poca higiene.', 'Costo y complejidad de reformas en baño.'];

  const features = [
    'Elevación del asiento para reducir el esfuerzo de transferencia.',
    'Higiene integrada para una rutina más limpia y simple.',
    'Instalación en 10 min, sin obra ni modificaciones estructurales.',
  ];

  const testimonials = [
    {
      author: 'María G.',
      role: 'Familiar',
      text: 'Con L.E.S. mi mamá volvió a manejar su higiene con más independencia y nosotros estamos más tranquilos.',
    },
    {
      author: 'Dr. Roberto S.',
      role: 'Director de Clínica',
      text: 'La implementación mejoró la dinámica del equipo y elevó nuestros estándares de higiene en internación.',
    },
    {
      author: 'Elena P.',
      role: 'Usuario',
      text: 'Se instaló rápido y cambió por completo mi rutina: más cómoda, más segura y sin obra en casa.',
    },
  ];

  return (
    <div id="inicio" className="min-h-screen bg-les-primary-sand text-les-text-taupe">
      <Toaster position="top-center" theme="light" />
      <Navbar />

      <main className="pt-28">
        <Section className="px-6 py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.22em] text-les-text-taupe/70">Ingeniería argentina para el hogar y la salud</p>
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Más autonomía, higiene y seguridad en el baño sin hacer obra.</h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed md:text-xl">
                L.E.S. combina elevador sanitario y sistema de higiene en una solución práctica y durable para hogares, clínicas y geriátricos.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-les-text-taupe px-8 py-4 text-lg font-medium text-les-primary-sand transition hover:opacity-90">
                  Consultar ahora <ArrowRight size={18} />
                </a>
                <a href={STORE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-les-accent-stone px-8 py-4 text-lg font-medium text-les-text-taupe transition hover:bg-les-bg-offwhite">
                  Ver Tienda Online <Store size={18} />
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-les-accent-stone/60 bg-les-bg-offwhite p-8">
              <img src="/assets/Diseño sin título (4).png" alt="Elevador sanitario L.E.S. instalado" className="w-full rounded-2xl object-cover" />
            </div>
          </div>
        </Section>

        <Section id="para-quien" className="px-6 py-24 md:py-28">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-semibold md:text-5xl">¿Para quién es?</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {peopleCards.map((card) => (
                <article key={card.title} className="rounded-3xl border border-les-accent-stone/60 bg-les-bg-offwhite p-8">
                  <card.icon className="mb-5" size={28} />
                  <h3 className="text-2xl font-medium">{card.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed">{card.copy}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 rounded-3xl border border-les-accent-stone/60 bg-les-bg-offwhite p-8">
              <p className="text-lg">También pensado para <span className="font-medium">{supportCards.join(', ')}</span>.</p>
            </div>
          </div>
        </Section>

        <Section id="problemas" className="bg-les-bg-offwhite px-6 py-24 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.22em] text-les-text-taupe/70">Problemas reales</p>
              <h2 className="text-3xl font-semibold md:text-5xl">Cuidar no debería implicar sobrecarga diaria.</h2>
              <ul className="mt-8 space-y-5">
                {problems.map((problem) => (
                  <li key={problem} className="flex items-start gap-3 text-lg"><Shield className="mt-1" size={18} />{problem}</li>
                ))}
              </ul>
              <blockquote className="mt-10 border-l-2 border-les-accent-stone pl-6 text-xl leading-relaxed italic">
                “Cuidar mejor también es reducir el esfuerzo diario. Una solución pensada para el bienestar del usuario y la tranquilidad de quienes acompañan.”
              </blockquote>
            </div>
            <div className="rounded-[2rem] border border-les-accent-stone/60 bg-les-primary-sand p-8">
              <img src="/assets/Diseño sin título (2).png" alt="Escenario de uso en baño" className="h-full w-full rounded-2xl object-cover" />
            </div>
          </div>
        </Section>

        <Section id="solucion" className="px-6 py-24 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
            <div className="rounded-[2rem] border border-les-accent-stone/60 bg-les-bg-offwhite p-8">
              <img src="/assets/Diseño sin título (1).png" alt="Detalle técnico del elevador L.E.S." className="w-full rounded-2xl object-cover" />
            </div>
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.22em] text-les-text-taupe/70">Solución técnica</p>
              <h2 className="text-3xl font-semibold md:text-5xl">Diseño robusto en Acero Inoxidable y Aluminio.</h2>
              <ul className="mt-8 space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-lg"><CircleCheck size={20} className="mt-1 shrink-0" />{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="institucional" className="bg-les-bg-offwhite px-6 py-24 md:py-28">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-les-accent-stone/60 bg-les-primary-sand p-10 md:p-14">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm uppercase tracking-[0.22em] text-les-text-taupe/70">Institucional B2B</p>
              <h2 className="text-3xl font-semibold md:text-5xl">Optimice la carga de trabajo de su personal y mejore los estándares de higiene.</h2>
              <p className="mt-6 text-lg leading-relaxed">
                Implementación ágil para clínicas, hospitales y geriátricos, con foco en eficiencia operativa, bienestar del paciente y mantenimiento simple.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-base">
                <span className="rounded-full border border-les-accent-stone px-4 py-2">Clínicas</span>
                <span className="rounded-full border border-les-accent-stone px-4 py-2">Hospitales</span>
                <span className="rounded-full border border-les-accent-stone px-4 py-2">Geriátricos</span>
              </div>
            </div>
          </div>
        </Section>

        <Section className="px-6 py-24 md:py-28">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-semibold md:text-5xl">Confianza de familias y profesionales</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <article key={t.author} className="rounded-3xl border border-les-accent-stone/60 bg-les-bg-offwhite p-8">
                  <div className="mb-5 flex gap-1 text-les-text-taupe"><Check size={16} /><Check size={16} /><Check size={16} /><Check size={16} /><Check size={16} /></div>
                  <p className="text-lg leading-relaxed">“{t.text}”</p>
                  <p className="mt-6 text-base font-medium">{t.author}</p>
                  <p className="text-base text-les-text-taupe/80">{t.role}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section className="px-6 pb-28 pt-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-les-accent-stone/60 bg-les-bg-offwhite p-10 text-center md:p-14">
            <h2 className="text-3xl font-semibold md:text-5xl">Independencia para el usuario. Tranquilidad para la familia.</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed">L.E.S. es una pieza de ingeniería argentina pensada para integrar funcionalidad, diseño y bienestar en el baño.</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-les-text-taupe px-8 py-4 text-lg font-medium text-les-primary-sand">Consultar ahora</a>
              <a href={STORE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-les-accent-stone px-8 py-4 text-lg font-medium">Ver Tienda Online</a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-les-accent-stone/50 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-base md:flex-row md:items-center md:justify-between">
          <p>© 2026 L.E.S. · Tecnología Asistiva</p>
          <div className="flex gap-5">
            <span className="inline-flex items-center gap-2"><House size={16} />Industria Argentina</span>
            <span className="inline-flex items-center gap-2"><Building2 size={16} />Uso profesional</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
