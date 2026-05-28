import { Analytics } from '@vercel/analytics/react';
import { type ComponentType, type ReactNode, useState } from 'react';
import {
  Bath,
  Building2,
  CircleCheck,
  HandHeart,
  HeartHandshake,
  Home,
  House,
  MessageCircle,
  ShieldCheck,
  Store,
  Users,
  Wrench,
} from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'compact';

const WHATSAPP_URL = 'https://wa.me/5491157535240';
const STORE_URL = 'https://limpiadorles.mitiendanube.com/';

const sectionShell = 'px-5 py-16 sm:px-6 md:py-24';
const contentShell = 'mx-auto w-full max-w-7xl';

function Section({ id, children, className = '' }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`${sectionShell} ${className}`}>
      <div className={contentShell}>{children}</div>
    </section>
  );
}

function ActionButton({
  href,
  children,
  variant = 'primary',
  className = '',
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  ariaLabel?: string;
}) {
  const variantClass = {
    primary: 'min-h-[60px] w-full rounded-full bg-les-cta px-6 py-4 text-white shadow-soft hover:bg-les-cta/90 sm:w-auto',
    secondary:
      'min-h-[60px] w-full rounded-full border-2 border-les-border bg-transparent px-6 py-4 text-les-text hover:bg-les-card sm:w-auto',
    compact: 'min-h-12 rounded-full bg-les-cta px-5 py-3 text-white hover:bg-les-cta/90',
  }[variant];

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center gap-2 text-center text-lg font-bold leading-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-les-health ${variantClass} ${className}`}
    >
      {children}
    </a>
  );
}

function ImageFrame({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <figure className={`rounded-[1.75rem] border border-les-border bg-les-card p-3 shadow-soft sm:p-5 ${className}`}>
      <img src={src} alt={alt} className="aspect-[4/3] w-full rounded-[1.25rem] object-cover" />
    </figure>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-les-border bg-les-bg/95 backdrop-blur-md">
      <nav className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-5 py-2 sm:px-6 md:min-h-[72px]" aria-label="Principal">
        <a
          href="#inicio"
          className="rounded-md text-2xl font-bold tracking-tight text-les-text focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-les-health"
          aria-label="Ir al inicio de L.E.S."
        >
          L.E.S.
        </a>
        <ActionButton href={WHATSAPP_URL} variant="compact" className="text-base" ariaLabel="Consultar L.E.S. por WhatsApp">
          <MessageCircle aria-hidden="true" size={20} />
          WhatsApp
        </ActionButton>
      </nav>
    </header>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl text-left">
      {eyebrow && <p className="mb-3 text-lg font-bold text-les-terracotta">{eyebrow}</p>}
      <h2 className="text-[2rem] font-bold leading-tight text-les-text md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-relaxed text-les-muted md:text-xl">{text}</p>}
    </div>
  );
}

function BenefitCard({ icon: Icon, title, copy }: { icon: ComponentType<{ size?: number; strokeWidth?: number; className?: string; 'aria-hidden'?: boolean }>; title: string; copy: string }) {
  return (
    <article className="flex min-h-36 gap-5 rounded-[1.5rem] border border-les-border bg-les-card p-6 shadow-soft md:min-h-44 md:p-8">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-les-section text-les-health" aria-hidden="true">
        <Icon size={28} strokeWidth={2.2} />
      </div>
      <div>
        <h3 className="text-[1.35rem] font-bold leading-snug text-les-text">{title}</h3>
        <p className="mt-2 text-lg leading-relaxed text-les-muted">{copy}</p>
      </div>
    </article>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-lg leading-relaxed text-les-text md:text-xl">
          <CircleCheck className="mt-1 shrink-0 text-les-health" size={24} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-${question.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}`;

  return (
    <article className="rounded-[1.25rem] border border-les-border bg-les-card shadow-soft">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((current) => !current)}
          className="flex min-h-[64px] w-full items-center justify-between gap-4 rounded-[1.25rem] px-5 py-4 text-left text-xl font-bold leading-snug text-les-text focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-les-health md:px-6"
        >
          <span>{question}</span>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-les-border text-les-health" aria-hidden="true">
            {open ? '−' : '+'}
          </span>
        </button>
      </h3>
      {open && (
        <div id={panelId} className="px-5 pb-5 text-lg leading-relaxed text-les-muted md:px-6">
          {answer}
        </div>
      )}
    </article>
  );
}

const peopleCards = [
  { icon: HeartHandshake, title: 'Adultos mayores', copy: 'Más seguridad diaria, con menos riesgo de caídas.' },
  { icon: Users, title: 'Personas con movilidad reducida', copy: 'Mayor estabilidad y autonomía en cada uso.' },
  { icon: Wrench, title: 'Rehabilitación', copy: 'Acompaña procesos postoperatorios y de recuperación funcional.' },
  { icon: HandHeart, title: 'Cuidadores', copy: 'Menos esfuerzo físico en la asistencia diaria.' },
];

const problems = [
  'Levantarse y sentarse con menos esfuerzo.',
  'Más higiene y comodidad diaria.',
  'Menos carga física para quien acompaña.',
  'Menos necesidad de reformas complejas.',
  'Más seguridad y tranquilidad familiar.',
];

const features = [
  'Estructura robusta en acero inoxidable y aluminio.',
  'Elevación del asiento para reducir el esfuerzo de transferencia.',
  'Sistema de higiene integrado para una rutina más limpia y simple.',
  'Instalación rápida, sin obra ni modificaciones estructurales.',
];

const faqs = [
  {
    question: '¿Requiere una reforma completa?',
    answer:
      'No siempre. L.E.S. está pensado para una instalación rápida, sin obra ni modificaciones estructurales en muchos casos. Consultanos para evaluar tu baño.',
  },
  {
    question: '¿Sirve para hogares e instituciones?',
    answer: 'Sí. Está pensado para hogares, clínicas, hospitales, geriátricos y centros de rehabilitación.',
  },
  {
    question: '¿Cómo ayuda en la higiene diaria?',
    answer: 'Integra un sistema de higiene que facilita una rutina más limpia, cómoda y simple.',
  },
  {
    question: '¿Puedo recibir asesoramiento antes de comprar?',
    answer: 'Sí. Te orientamos por WhatsApp según tus medidas, baño y necesidad.',
  },
  {
    question: '¿La instalación es rápida?',
    answer: 'Sí. La instalación está pensada para ser ágil y sin obra en la mayoría de los casos.',
  },
];

export default function App() {
  return (
    <div id="inicio" className="min-h-screen overflow-x-hidden bg-les-bg text-les-text">
      <Header />

      <main>
        <Section className="pt-10 md:pt-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-14">
            <div className="text-left">
              <p className="inline-flex rounded-full border border-les-border bg-les-section px-4 py-2 text-lg font-bold text-les-terracotta">
                Ingeniería argentina para el hogar y la salud
              </p>
              <h1 className="mt-5 text-[2.45rem] font-bold leading-[1.14] tracking-[-0.02em] text-les-text sm:text-[2.625rem] md:text-6xl">
                Más autonomía, higiene y seguridad en el baño.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-les-muted md:text-xl">
                L.E.S. combina elevador sanitario y sistema de higiene integrado para facilitar el día a día en hogares, clínicas y geriátricos.
              </p>
              <p className="mt-5 flex items-start gap-3 rounded-[1.25rem] border border-les-border bg-les-card p-4 text-lg font-bold leading-relaxed text-les-text">
                <ShieldCheck className="mt-1 shrink-0 text-les-health" size={24} aria-hidden="true" />
                Sin obra. Instalación rápida. Asesoramiento personalizado.
              </p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <ActionButton href={WHATSAPP_URL} ariaLabel="Consultar por WhatsApp sobre medidas, instalación y disponibilidad">
                  <MessageCircle aria-hidden="true" size={24} />
                  Consultar por WhatsApp
                </ActionButton>
                <ActionButton href={STORE_URL} variant="secondary" ariaLabel="Ver tienda online de L.E.S.">
                  <Store aria-hidden="true" size={23} />
                  Ver tienda online
                </ActionButton>
              </div>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-les-muted">Respondemos dudas sobre medidas, instalación y disponibilidad.</p>
            </div>
            <ImageFrame
              src="/assets/baño_moderno_con_elevador_sanitario.png"
              alt="Elevador sanitario L.E.S. instalado en un baño real, integrado al inodoro y visible para entender su uso diario."
            />
          </div>
        </Section>

        <Section id="para-quien">
          <SectionHeading title="¿Para quién es?" text="Una ayuda concreta para usuarios, familias y equipos de cuidado que buscan más autonomía y seguridad en el baño." />
          <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2 xl:grid-cols-4">
            {peopleCards.map((card) => (
              <div key={card.title}>
                <BenefitCard icon={card.icon} title={card.title} copy={card.copy} />
              </div>
            ))}
          </div>
        </Section>

        <Section id="problemas" className="bg-les-section">
          <div className="grid gap-9 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-14">
            <div>
              <SectionHeading title="Problemas que resuelve" text="Cuidar no debería implicar sobrecarga diaria." />
              <div className="mt-8 rounded-[1.5rem] border border-les-border bg-les-card p-6 shadow-soft md:p-8">
                <CheckList items={problems} />
              </div>
              <div className="mt-7">
                <ActionButton href={WHATSAPP_URL} ariaLabel="Consultar por WhatsApp sobre los problemas que resuelve L.E.S.">
                  <MessageCircle aria-hidden="true" size={24} />
                  Consultar por WhatsApp
                </ActionButton>
              </div>
            </div>
            <ImageFrame src="/assets/baño_moderno.png" alt="Baño real preparado para un uso más seguro, cómodo e higiénico con asistencia sanitaria." />
          </div>
        </Section>

        <Section id="solucion">
          <div className="grid gap-9 lg:grid-cols-[0.86fr_1fr] lg:items-center lg:gap-14">
            <ImageFrame
              src="/assets/hinodoro_elevador_sanitario_tapa_levantada.png"
              alt="Detalle del elevador sanitario L.E.S. con asiento elevado y sistema integrado de higiene."
              className="lg:order-first"
            />
            <div>
              <SectionHeading
                eyebrow="Solución técnica"
                title="Una solución práctica y durable"
                text="L.E.S. combina elevación del asiento, higiene integrada y materiales resistentes para facilitar el uso diario del baño."
              />
              <div className="mt-8 rounded-[1.5rem] border border-les-border bg-les-card p-6 shadow-soft md:p-8">
                <CheckList items={features} />
              </div>
            </div>
          </div>
        </Section>

        <Section id="hogar" className="bg-les-section">
          <div className="grid gap-9 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-14">
            <div>
              <SectionHeading
                title="Se integra al hogar"
                text="Diseño pensado para baños modernos. L.E.S. se adapta al entorno para mantener comodidad, accesibilidad y estética en el uso diario."
              />
            </div>
            <ImageFrame
              src="/assets/baño_moderno_2.png"
              alt="Baño moderno con instalación sanitaria accesible y elevador integrado al ambiente del hogar."
            />
          </div>
        </Section>

        <Section id="institucional">
          <article className="rounded-[1.75rem] border border-les-border bg-les-card p-6 shadow-soft md:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-center">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-les-section px-4 py-2 text-lg font-bold text-les-health">
                  <ShieldCheck aria-hidden="true" size={22} />
                  Industria Argentina
                </div>
                <SectionHeading
                  title="También para instituciones"
                  text="Solución pensada para clínicas, hospitales, geriátricos y centros de rehabilitación."
                />
                <p className="mt-5 text-lg leading-relaxed text-les-muted md:text-xl">
                  Optimiza la carga de trabajo del personal y mejora los estándares de higiene, bienestar del paciente y mantenimiento simple.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                {['Clínicas', 'Hospitales', 'Geriátricos', 'Uso profesional'].map((badge) => (
                  <span key={badge} className="inline-flex min-h-12 items-center rounded-full border border-les-border bg-les-section px-5 text-lg font-bold text-les-text">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Section>

        <Section id="preguntas" className="bg-les-section">
          <SectionHeading title="Preguntas frecuentes" text="Respuestas simples para tomar una decisión con más tranquilidad antes de consultar o comprar." />
          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </div>
            ))}
          </div>
        </Section>

        <Section className="pb-20 md:pb-28">
          <article className="rounded-[1.75rem] border border-les-border bg-les-card p-6 text-left shadow-soft md:p-12">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-[2rem] font-bold leading-tight text-les-text md:text-5xl">Independencia para el usuario. Tranquilidad para la familia.</h2>
              <p className="mt-5 text-lg leading-relaxed text-les-muted md:text-xl">
                Te ayudamos a evaluar medidas, instalación, compatibilidad y disponibilidad.
              </p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <ActionButton href={WHATSAPP_URL} ariaLabel="Consultar por WhatsApp para evaluar medidas e instalación de L.E.S.">
                  <MessageCircle aria-hidden="true" size={24} />
                  Consultar por WhatsApp
                </ActionButton>
                <ActionButton href={STORE_URL} variant="secondary" ariaLabel="Ver tienda online de L.E.S.">
                  <Store aria-hidden="true" size={23} />
                  Ver tienda online
                </ActionButton>
              </div>
              <p className="mt-6 flex items-start gap-3 text-lg leading-relaxed text-les-text">
                <CircleCheck className="mt-1 shrink-0 text-les-health" size={24} aria-hidden="true" />
                L.E.S. es ingeniería argentina pensada para integrar funcionalidad, diseño y bienestar en el baño.
              </p>
            </div>
          </article>
        </Section>
      </main>

      <Analytics />

      <footer className="border-t border-les-border px-5 py-10 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-lg leading-relaxed text-les-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 L.E.S. · Tecnología Asistiva</p>
          <div className="flex flex-wrap gap-3 text-les-text">
            <span className="inline-flex items-center gap-2 rounded-full border border-les-border px-4 py-2">
              <House size={20} aria-hidden="true" />
              Industria Argentina
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-les-border px-4 py-2">
              <Building2 size={20} aria-hidden="true" />
              Uso profesional
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-les-border px-4 py-2">
              <Home size={20} aria-hidden="true" />
              Hogares
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-les-border px-4 py-2">
              <Bath size={20} aria-hidden="true" />
              Baños accesibles
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
