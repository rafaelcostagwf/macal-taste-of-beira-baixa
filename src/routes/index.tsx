import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Award, ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Eyebrow } from "@/components/site/SectionEyebrow";
import { recipes } from "@/lib/recipes";
import hero1 from "@/assets/hero-charcutaria.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/conjunto-macal.png";
import salsichas from "@/assets/products/salsichas-criola.png";

import pChar from "@/assets/product-charcutaria.jpg";
import pLat from "@/assets/product-laticinios.jpg";
import pPres from "@/assets/product-presunto.jpg";
import conjunto from "@/assets/conjunto-macal.png";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Macal — Charcutaria e laticínios da Beira Baixa desde 1958" },
      { name: "description", content: "Mais de 60 anos de tradição em enchidos, presuntos e queijos. Receitas, produtos e onde comprar Macal." },
      { property: "og:title", content: "Macal — O sabor autêntico da Beira Baixa, desde 1958" },
      { property: "og:description", content: "Charcutaria e laticínios portugueses certificados IFS Food." },
      { property: "og:type", content: "website" },
    ],
  }),
});

const slides = [
  { img: hero1, kicker: "Desde 1958", title: "O sabor autêntico da Beira Baixa", sub: "Charcutaria e laticínios feitos com os métodos de sempre." },
  { img: hero2, kicker: "Mesa portuguesa", title: "Tradição que se sente em cada fatia", sub: "Enchidos curados naturalmente para a sua mesa." },
  { img: hero3, kicker: "Fumeiro artesanal", title: "Quatro gerações de fumeiro", sub: "Cura lenta. Lume baixo. Tempo a sério." },
];

function HeroCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden text-primary-foreground">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${i === idx ? "opacity-100" : "opacity-0"}`}
        >
          <img src={s.img} alt="" className="absolute inset-0 h-full w-full object-cover scale-105" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/55 to-primary/20" />
        </div>
      ))}

      {/* Bottom torn-paper accent */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-[var(--color-olive)]" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 40%, 92% 55%, 80% 30%, 65% 60%, 50% 35%, 35% 65%, 20% 40%, 8% 60%, 0 35%)" }} />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pt-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/60 bg-primary/40 backdrop-blur px-4 py-1.5 text-[11px] tracking-[0.3em] uppercase text-[var(--color-gold)]">
            <Award className="size-3.5" /> {slides[i].kicker} · IFS Food
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.04] drop-shadow-md">
            {slides[i].title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-primary-foreground/90 leading-relaxed">{slides[i].sub}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/produtos" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-medium text-accent-foreground hover:opacity-90 transition">
              Ver produtos <ArrowRight className="size-4" />
            </Link>
            <Link to="/receitas" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary/20 backdrop-blur px-7 py-3.5 font-medium hover:bg-primary-foreground/10 transition">
              Receitas Macal
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 right-6 z-10 hidden md:flex items-center gap-2">
        <button onClick={() => setI((p) => (p - 1 + slides.length) % slides.length)} aria-label="Anterior" className="size-11 rounded-full border border-primary-foreground/40 bg-primary/30 backdrop-blur hover:bg-primary/60 transition flex items-center justify-center">
          <ChevronLeft className="size-5" />
        </button>
        <button onClick={() => setI((p) => (p + 1) % slides.length)} aria-label="Próximo" className="size-11 rounded-full border border-primary-foreground/40 bg-primary/30 backdrop-blur hover:bg-primary/60 transition flex items-center justify-center">
          <ChevronRight className="size-5" />
        </button>
      </div>
      <div className="absolute bottom-32 left-6 z-10 flex gap-2">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`} className={`h-1.5 rounded-full transition-all ${i === idx ? "w-10 bg-[var(--color-gold)]" : "w-5 bg-primary-foreground/40"}`} />
        ))}
      </div>
    </section>
  );
}

function FeatureCards() {
  const cats = [
    { img: conjunto, label: "Cabazes", to: "/produtos" as const },
    { img: pChar, label: "Enchidos", to: "/produtos" as const },
    { img: pPres, label: "Presuntos", to: "/produtos" as const },
    { img: pLat, label: "Laticínios", to: "/produtos" as const },
    { img: hero1, label: "Fumados", to: "/produtos" as const },
  ];
  return (
    <section className="relative w-full overflow-hidden bg-primary text-primary-foreground">
      {/* Top food strip */}
      <div className="relative h-[26svh] min-h-[180px] max-h-[300px] w-full">
        <img
          src={hero1}
          alt="Charcutaria Macal"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={600}
        />
        {/* Brush / torn transition into the navy section below */}
        <svg
          aria-hidden
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute -bottom-px left-0 right-0 h-[90px] w-full"
        >
          <path
            d="M0,60 C90,110 180,20 270,55 C360,90 450,30 540,60 C640,95 720,25 820,60 C920,95 1010,30 1110,65 C1210,100 1310,40 1440,70 L1440,120 L0,120 Z"
            fill="var(--primary)"
          />
          <path
            d="M0,75 C100,55 200,100 320,80 C440,60 540,105 660,85 C780,65 880,110 1000,90 C1120,70 1240,105 1440,85 L1440,120 L0,120 Z"
            fill="var(--primary)"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Navy content section */}
      <div className="relative pt-8 pb-24 lg:pb-32">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--color-gold) 1px, transparent 1px)", backgroundSize: "26px 26px" }} />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          <div className="max-w-2xl">
            <div aria-hidden className="mb-5 flex gap-1.5 text-[var(--color-gold)]">
              {Array.from({ length: 6 }).map((_, k) => (
                <svg key={k} width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
                  <path d="M7 0 C10 5 13 8 13 12 A6 6 0 0 1 1 12 C1 8 4 5 7 0 Z" />
                </svg>
              ))}
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase">
              Os nossos<br />Produtos
            </h2>

            <p className="mt-6 max-w-xl text-base sm:text-lg uppercase tracking-wide text-[var(--color-gold)]/90">
              Quatro gerações de sabor e tradição da Beira Baixa.
            </p>

            <p className="mt-5 max-w-xl text-base text-primary-foreground/85 leading-relaxed">
              Enchidos, presuntos, fumados e laticínios feitos com os métodos de sempre — cura lenta, lume baixo e tempo a sério. Descubra toda a gama Macal.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/produtos" className="inline-flex items-center gap-2 rounded-sm bg-primary-foreground px-8 py-3.5 font-medium uppercase tracking-[0.2em] text-sm text-primary hover:bg-[var(--color-gold)] hover:text-primary transition">
                Ver gama completa
              </Link>
            </div>
          </div>

          {/* Product */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 -z-0 mx-auto h-[420px] w-[420px] rounded-full bg-[var(--color-gold)]/10 blur-3xl" />
            <img
              src={salsichas}
              alt="Salsichas Criola Macal"
              className="relative z-10 max-h-[480px] w-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]"
              width={800}
              height={800}
            />
          </div>
        </div>

        {/* Category circles */}
        <div className="relative mx-auto mt-20 max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
            {cats.map((c, idx) => (
              <Link key={c.label} to={c.to} className="group flex flex-col items-center text-center">
                <div className="relative size-32 md:size-40 rounded-full overflow-hidden ring-4 ring-primary-foreground/15 group-hover:ring-[var(--color-gold)] transition-all duration-500 shadow-xl group-hover:-translate-y-2">
                  <img src={c.img} alt={c.label} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]" loading="lazy" width={400} height={400} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                  <span className="absolute top-2 left-2 text-[9px] tracking-[0.25em] uppercase text-[var(--color-gold)] bg-primary/70 px-2 py-0.5 rounded-full">0{idx + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-lg md:text-xl uppercase tracking-[0.15em] text-primary-foreground group-hover:text-[var(--color-gold)] transition-colors">
                  {c.label}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
    </section>
  );
}


function HistorySection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img src={conjunto} alt="Gama Macal na Beira Baixa" className="rounded-lg shadow-2xl w-full h-[560px] object-cover" loading="lazy" width={1600} height={1200} />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-accent text-accent-foreground p-6 rounded-lg shadow-xl max-w-[200px]">
            <div className="font-display text-5xl leading-none">66+</div>
            <div className="mt-2 text-sm">Anos a encher enchidos na Beira Baixa</div>
          </div>
        </div>
        <div>
          <Eyebrow>A nossa história</Eyebrow>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-tight">Quatro gerações<br />de sabor e tradição.</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Desde 1958, a Macal nasceu de uma família humilde da Beira Baixa, com a visão de levar a charcutaria portuguesa a todo o país. Hoje, com dois centros de produção e certificação <strong className="text-foreground">IFS Food</strong>, mantemos os métodos artesanais — a cura lenta, o lume baixo e o tempo a sério.
          </p>
          <Link to="/sobre" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground hover:opacity-90 transition">
            Conhecer a Macal <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductsShowcase() {
  const items = [
    { img: pChar, tag: "Enchidos", title: "Chouriço & Linguiça" },
    { img: pPres, tag: "Presuntos", title: "Cura lenta natural" },
    { img: pLat, tag: "Laticínios", title: "Queijos artesanais" },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>Gama Macal</Eyebrow>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl">Sabores com carácter.</h2>
          </div>
          <Link to="/produtos" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all">
            Ver gama completa <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((p) => (
            <Link key={p.title} to="/produtos" className="group relative block overflow-hidden rounded-xl">
              <img src={p.img} alt={p.title} className="aspect-[4/5] w-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]" loading="lazy" width={1024} height={1280} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground">
                <span className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-gold)]">{p.tag}</span>
                <h3 className="mt-2 font-display text-2xl">{p.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  Descobrir <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecipesPreview() {
  const preview = recipes.slice(0, 3);
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(var(--color-gold) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>Receitas</Eyebrow>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl">Cozinhe com a Macal.</h2>
          <p className="mt-5 text-primary-foreground/80">Pratos tradicionais portugueses, com a indicação do produto Macal que dá sabor a cada um.</p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-7">
          {preview.map((r) => (
            <Link key={r.slug} to="/receitas/$slug" params={{ slug: r.slug }} className="group block overflow-hidden rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-[var(--color-gold)]/50 transition">
              <div className="overflow-hidden aspect-[4/3]">
                <img src={r.image} alt={r.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]" loading="lazy" width={1200} height={900} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-[11px] tracking-widest uppercase text-[var(--color-gold)]">
                  <span>{r.time}</span><span>·</span><span>{r.difficulty}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl group-hover:text-[var(--color-gold)] transition-colors">{r.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70">
                  Com <span className="text-primary-foreground">{r.product.name}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/receitas" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-medium text-accent-foreground hover:opacity-90 transition">
            Todas as receitas <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CertBand() {
  const items = ["IFS Food", "HACCP", "Origem Beira Baixa", "Controlo Veterinário", "Cura Natural"];
  return (
    <section className="py-12 bg-[var(--color-gold)]/15 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm uppercase tracking-[0.25em] text-foreground/70">
        {items.map((it) => (
          <span key={it} className="flex items-center gap-2">
            <Award className="size-4 text-accent" /> {it}
          </span>
        ))}
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="py-24 lg:py-32 bg-cover bg-center text-primary-foreground relative" style={{ backgroundImage: `url(${hero3})` }}>
      <div className="absolute inset-0 bg-primary/85" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Eyebrow><span className="text-[var(--color-gold)]">B2B</span></Eyebrow>
        <h2 className="mt-4 font-display text-4xl lg:text-6xl leading-tight">Vamos pôr a Beira Baixa<br />na sua mesa?</h2>
        <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">Restaurantes, retalhistas e distribuidores — peça catálogo, condições comerciais e amostras.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/contactos" className="inline-flex items-center rounded-full bg-accent px-8 py-4 font-medium text-accent-foreground hover:opacity-90 transition">Seja nosso parceiro</Link>
          <a href="tel:+351272000000" className="inline-flex items-center rounded-full border border-primary-foreground/40 px-8 py-4 font-medium hover:bg-primary-foreground/10 transition">+351 272 000 000</a>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <HeroCarousel />
      <FeatureCards />
      <HistorySection />
      <CertBand />
      <ProductsShowcase />
      <RecipesPreview />
      <ContactCTA />
      <Footer />
    </main>
  );
}
