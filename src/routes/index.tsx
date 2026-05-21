import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingBag, ChefHat, Truck, Award, ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Eyebrow } from "@/components/site/SectionEyebrow";
import { recipes } from "@/lib/recipes";
import hero1 from "@/assets/hero-charcutaria.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/conjunto-macal.png";
import beira from "@/assets/about-beira.jpg";
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
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-[var(--color-cream)]" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 40%, 92% 55%, 80% 30%, 65% 60%, 50% 35%, 35% 65%, 20% 40%, 8% 60%, 0 35%)" }} />

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
  const items = [
    { icon: ShoppingBag, title: "Produtos", desc: "Enchidos, presuntos, fumados e queijos artesanais da Beira Baixa.", to: "/produtos" as const, img: pChar, kicker: "Gama Macal" },
    { icon: ChefHat, title: "Receitas", desc: "Pratos tradicionais portugueses com os produtos Macal.", to: "/receitas" as const, img: pPres, kicker: "Cozinha de tradição" },
    { icon: Truck, title: "Onde comprar", desc: "Encontre Macal em supermercados, mercearias e restaurantes.", to: "/onde-comprar" as const, img: pLat, kicker: "Pontos de venda" },
  ];
  return (
    <section className="relative py-20 lg:py-28 bg-[var(--color-cream)] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0d1b3a 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
      <div className="absolute -top-24 -right-24 size-[420px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 size-[460px] rounded-full bg-[var(--color-gold)]/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Eyebrow>Descubra a Macal</Eyebrow>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl">Sabor, receitas e tradição<br />num só sítio.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {items.map((it, idx) => (
            <Link
              key={it.title}
              to={it.to}
              className="group relative block overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={it.img} alt={it.title} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1400ms]" loading="lazy" width={800} height={600} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-[var(--color-gold)] bg-primary/60 backdrop-blur px-3 py-1 rounded-full border border-[var(--color-gold)]/40">
                  0{idx + 1} · {it.kicker}
                </span>
                <div className="absolute -bottom-7 left-7 size-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg ring-4 ring-[var(--color-cream)]">
                  <it.icon className="size-6" />
                </div>
              </div>
              <div className="p-7 pt-10">
                <h3 className="font-display text-2xl">{it.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{it.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                  Descobrir <ArrowRight className="size-4" />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-accent via-[var(--color-gold)] to-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
            </Link>
          ))}
        </div>
      </div>
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
