import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-charcutaria.jpg";
import charcImg from "@/assets/product-charcutaria.jpg";
import latImg from "@/assets/product-laticinios.jpg";
import presImg from "@/assets/product-presunto.jpg";
import beiraImg from "@/assets/about-beira.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Macal — Charcutaria e laticínios da Beira Baixa desde 1958" },
      {
        name: "description",
        content:
          "Fornecedor português de charcutaria e laticínios tradicionais. Mais de 60 anos de rigor artesanal, certificação IFS Food. Para restauração, retalho e distribuição.",
      },
      { property: "og:title", content: "Macal — O sabor autêntico da Beira Baixa, desde 1958" },
      {
        property: "og:description",
        content:
          "Enchidos, presuntos e queijos produzidos com os métodos de sempre. Certificação IFS Food.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Header() {
  const links = [
    ["Sobre", "#sobre"],
    ["Produtos", "#produtos"],
    ["Certificações", "#certificacoes"],
    ["Onde comprar", "#onde"],
    ["Notícias", "#noticias"],
    ["Contactos", "#contactos"],
  ];
  return (
    <header className="fixed top-0 z-50 w-full bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/80 text-primary-foreground">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-2xl italic font-semibold">Macal</span>
          <span className="text-[10px] tracking-[0.3em] text-primary-foreground/70">EST. 1958</span>
        </a>
        <ul className="hidden lg:flex items-center gap-8 text-sm">
          {links.map(([l, h]) => (
            <li key={h}>
              <a href={h} className="text-primary-foreground/85 hover:text-[var(--color-gold)] transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contactos"
          className="hidden md:inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90 transition"
        >
          Seja nosso parceiro
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center text-primary-foreground">
      <img
        src={heroImg}
        alt="Tábua com presunto, chouriço e queijos artesanais da Macal"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/65 to-primary/30" />
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/50 bg-primary/40 px-4 py-1.5 text-xs tracking-[0.25em] uppercase text-[var(--color-gold)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
            Certificação IFS Food
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            O sabor autêntico da <em className="text-[var(--color-gold)] not-italic font-normal italic">Beira Baixa</em>, desde 1958.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85 leading-relaxed">
            Charcutaria e laticínios portugueses para restaurantes, retalhistas e distribuidores —
            feitos com os ingredientes e os métodos de sempre. Mais de seis décadas de rigor.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#produtos"
              className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 font-medium text-accent-foreground hover:opacity-90 transition"
            >
              Explore os nossos sabores
            </a>
            <a
              href="#contactos"
              className="inline-flex items-center rounded-full border border-primary-foreground/40 bg-transparent px-7 py-3.5 font-medium text-primary-foreground hover:bg-primary-foreground/10 transition"
            >
              Seja nosso parceiro
            </a>
          </div>
          <dl className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
            {[
              ["66+", "Anos de tradição"],
              ["2", "Centros de produção"],
              ["IFS", "Food certified"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl text-[var(--color-gold)]">{n}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-primary-foreground/70">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={beiraImg}
            alt="Paisagem da Beira Baixa ao entardecer"
            className="rounded-lg shadow-2xl w-full h-[520px] object-cover"
            loading="lazy"
            width={1600}
            height={1200}
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-accent text-accent-foreground p-6 rounded-lg shadow-xl max-w-[200px]">
            <div className="font-display text-4xl">1958</div>
            <div className="mt-1 text-sm">Uma história familiar enraizada na Beira Baixa</div>
          </div>
        </div>
        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-accent">— Sobre nós</span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl">
            Tradição que se sente em cada fatia.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Desde 1958 que a Macal leva à mesa o melhor da charcutaria e dos laticínios tradicionais portugueses. Uma empresa familiar enraizada na Beira Baixa, guiada pela qualidade, pela autenticidade e pelo respeito por quem nos escolhe.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Hoje, com dois centros de produção e certificação <strong className="text-foreground">IFS Food</strong>, continuamos a produzir enchidos, presuntos e queijos com os métodos de sempre — e a exigência de amanhã.
          </p>
          <a
            href="#produtos"
            className="mt-8 inline-flex items-center gap-2 font-medium text-accent hover:gap-3 transition-all"
          >
            Descubra a nossa história <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Products() {
  const items = [
    {
      img: charcImg,
      tag: "Gama Charcutaria",
      title: "Enchidos curados",
      desc: "Chouriço, linguiça, salpicão e morcela — fumeiro tradicional da Beira Baixa.",
    },
    {
      img: presImg,
      tag: "Gama Charcutaria",
      title: "Presuntos de qualidade",
      desc: "Curados naturalmente, com o sabor profundo da cura lenta.",
    },
    {
      img: latImg,
      tag: "Gama Laticínios",
      title: "Queijos artesanais",
      desc: "Queijos de ovelha e mistura, de pastas amanteigadas a curas intensas.",
    },
  ];
  return (
    <section id="produtos" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs tracking-[0.3em] uppercase text-accent">— Os nossos produtos</span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl">Charcutaria e laticínios com carácter.</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Dos enchidos curados ao presunto de qualidade, passando pelos queijos artesanais — cada produto Macal é feito com matérias-primas da região e produzido com o rigor de mais de seis décadas de experiência.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {items.map((p) => (
            <article key={p.title} className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={1024}
                  height={1280}
                />
              </div>
              <div className="p-7">
                <span className="text-[11px] tracking-[0.2em] uppercase text-accent">{p.tag}</span>
                <h3 className="mt-2 font-display text-2xl">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#contactos"
            className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Pedir catálogo completo
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      q: "Trabalhamos com a Macal há mais de uma década. A consistência da qualidade e o serviço fazem toda a diferença na nossa cozinha.",
      who: "Chef António Mendes",
      role: "Restaurante Tasca da Vila, Castelo Branco",
    },
    {
      q: "Os enchidos da Macal são uma referência na nossa charcutaria. Os clientes voltam por causa do sabor autêntico.",
      who: "Mercearia Os Compadres",
      role: "Distribuição retalhista, Lisboa",
    },
    {
      q: "Fornecedor sério, certificação rigorosa e cumprimento de prazos exemplar. Parceiro de confiança total.",
      who: "Grupo Sabores de Portugal",
      role: "Distribuidor nacional",
    },
  ];
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]">— Parceiros que nos escolhem</span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl">Quem cozinha com a Macal.</h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {quotes.map((t) => (
            <figure key={t.who} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-8">
              <div className="text-[var(--color-gold)] font-display text-5xl leading-none">"</div>
              <blockquote className="mt-2 text-primary-foreground/90 leading-relaxed">{t.q}</blockquote>
              <figcaption className="mt-6 border-t border-primary-foreground/10 pt-4">
                <div className="font-medium">{t.who}</div>
                <div className="text-sm text-primary-foreground/60 mt-0.5">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const certs = [
    ["IFS Food", "Padrão internacional de segurança e qualidade alimentar."],
    ["HACCP", "Análise de perigos em todo o processo produtivo."],
    ["Origem Regional", "Matérias-primas e tradição da Beira Baixa."],
    ["Controlo Veterinário", "Aprovação sanitária em todas as gamas."],
  ];
  return (
    <section id="certificacoes" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-accent">— Certificações</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl">Padrões de qualidade que se medem.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Cumprimos os mais exigentes padrões internacionais de segurança alimentar, auditados regularmente por entidades independentes.
            </p>
            <a
              href="#contactos"
              className="mt-8 inline-flex items-center gap-2 font-medium text-accent hover:gap-3 transition-all"
            >
              Ver os nossos padrões de qualidade <span aria-hidden>→</span>
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {certs.map(([name, desc]) => (
              <div key={name} className="border border-border bg-card rounded-lg p-6 hover:border-accent transition-colors">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-[var(--color-gold)]/15 text-[var(--color-gold)] flex items-center justify-center font-display text-lg">✓</span>
                  <h3 className="font-display text-xl">{name}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhereToFind() {
  return (
    <section id="onde" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-accent">— Onde nos encontrar</span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl">Mais perto do que pensa.</h2>
          <p className="mt-6 text-muted-foreground">
            Os produtos Macal estão disponíveis em supermercados, mercearias gourmet e nas mesas dos melhores restaurantes portugueses.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            ["Grande distribuição", "Continente, Pingo Doce, Auchan e cadeias regionais."],
            ["Mercearias & gourmet", "Lojas especializadas de produtos tradicionais portugueses."],
            ["Restauração", "Tabernas, restaurantes e hotéis em todo o país."],
          ].map(([t, d]) => (
            <div key={t} className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-display text-xl">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function News() {
  const posts = [
    { date: "Maio 2026", title: "Renovação da certificação IFS Food com nota superior", excerpt: "Auditoria anual confirma o nosso compromisso com os padrões internacionais de qualidade." },
    { date: "Março 2026", title: "Macal presente na SISAB Portugal 2026", excerpt: "Apresentamos a nova gama de enchidos curados aos compradores internacionais." },
    { date: "Janeiro 2026", title: "Expansão do centro de produção de laticínios", excerpt: "Investimento de €2M reforça a capacidade produtiva sem perder o cunho artesanal." },
  ];
  return (
    <section id="noticias" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-accent">— Notícias</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl">O que vai acontecendo.</h2>
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <article key={p.title} className="group">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.date}</div>
              <h3 className="mt-3 font-display text-2xl group-hover:text-accent transition-colors">{p.title}</h3>
              <p className="mt-3 text-muted-foreground">{p.excerpt}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
                Ler o artigo <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section id="contactos" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]">— Contactos</span>
        <h2 className="mt-3 font-display text-4xl lg:text-6xl">
          Vamos pôr os sabores da Beira Baixa na sua mesa?
        </h2>
        <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Restaurantes, retalhistas e distribuidores — peça o nosso catálogo, condições comerciais e amostras.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:geral@macal.pt"
            className="inline-flex items-center rounded-full bg-accent px-8 py-4 font-medium text-accent-foreground hover:opacity-90 transition"
          >
            Seja nosso parceiro
          </a>
          <a
            href="tel:+351272000000"
            className="inline-flex items-center rounded-full border border-primary-foreground/40 px-8 py-4 font-medium hover:bg-primary-foreground/10 transition"
          >
            +351 272 000 000
          </a>
        </div>
        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
          {[
            ["Email", "geral@macal.pt"],
            ["Sede", "Castelo Branco, Portugal"],
            ["Horário", "Seg–Sex · 9h–18h"],
          ].map(([l, v]) => (
            <div key={l}>
              <div className="text-xs uppercase tracking-widest text-[var(--color-gold)]">{l}</div>
              <div className="mt-2 text-primary-foreground/90">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="py-20 bg-[var(--color-gold)]/15 border-t border-border">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-3xl lg:text-4xl">Receber novidades</h2>
        <p className="mt-3 text-muted-foreground">
          Lançamentos, eventos e receitas inspiradas na charcutaria tradicional.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            placeholder="o.seu@email.pt"
            className="flex-1 rounded-full border border-border bg-card px-5 py-3 outline-none focus:border-accent"
          />
          <button
            type="submit"
            className="rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition"
          >
            Receber novidades
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/70 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between gap-6 items-center">
        <div className="flex flex-col leading-none text-primary-foreground">
          <span className="font-display text-xl italic">Macal</span>
          <span className="text-[10px] tracking-[0.3em] text-primary-foreground/60">EST. 1958</span>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Macal — Charcutaria e laticínios da Beira Baixa. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Certifications />
      <WhereToFind />
      <News />
      <ContactCTA />
      <Newsletter />
      <Footer />
    </main>
  );
}
