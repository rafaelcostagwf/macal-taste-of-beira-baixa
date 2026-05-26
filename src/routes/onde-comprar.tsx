import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Eyebrow } from "@/components/site/SectionEyebrow";
import { Store, ShoppingCart, Utensils, ArrowRight } from "lucide-react";
import oliveirasBg from "@/assets/oliveiras-bg.jpg";
import logoMercadona from "@/assets/logos/mercadona.png";
import logoCorteIngles from "@/assets/logos/corte-ingles.png";
import logoAuchan from "@/assets/logos/auchan.png";
import logoIntermarche from "@/assets/logos/intermarche.png";
import logoPingoDoce from "@/assets/logos/pingo-doce.png";
import logoMinipreco from "@/assets/logos/minipreco.png";
import logoLidl from "@/assets/logos/lidl.png";

export const Route = createFileRoute("/onde-comprar")({
  component: OndeComprarPage,
  head: () => ({
    meta: [
      { title: "Onde comprar Macal — Pontos de venda em Portugal" },
      { name: "description", content: "Encontre os produtos Macal em supermercados, mercearias gourmet e restaurantes portugueses." },
      { property: "og:title", content: "Onde comprar Macal" },
      { property: "og:description", content: "Pontos de venda Macal em Portugal." },
    ],
    links: [{ rel: "canonical", href: "/onde-comprar" }],
  }),
});

const lojas = [
  { name: "Pingo Doce", logo: logoPingoDoce },
  { name: "Auchan", logo: logoAuchan },
  { name: "Intermarché", logo: logoIntermarche },
  { name: "Lidl", logo: logoLidl },
  { name: "Minipreço", logo: logoMinipreco },
  { name: "El Corte Inglés", logo: logoCorteIngles },
  { name: "Mercadona", logo: logoMercadona },
];

function OndeComprarPage() {
  const canais = [
    { icon: Store, title: "Grande distribuição", desc: "Continente, Pingo Doce, Auchan, Intermarché e cadeias regionais em todo o país." },
    { icon: ShoppingCart, title: "Mercearias & gourmet", desc: "Lojas especializadas em produtos tradicionais portugueses e mercearias finas." },
    { icon: Utensils, title: "Restauração", desc: "Tabernas, restaurantes e hotéis que servem Macal nas suas mesas." },
  ];
  const regioes = ["Lisboa & Vale do Tejo", "Norte", "Centro", "Alentejo", "Algarve", "Madeira", "Açores"];

  const marqueeLogos = [...lojas, ...lojas];

  return (
    <main className="relative bg-background text-foreground">
      <div
        className="pointer-events-none fixed inset-0 -z-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${oliveirasBg})` }}
        aria-hidden
      />
      <div className="pointer-events-none fixed inset-0 -z-0 bg-background/70" aria-hidden />

      <div className="relative z-10">
        <Header />
        <section className="pt-40 pb-16 bg-primary/95 text-primary-foreground">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <Eyebrow><span className="text-[var(--color-gold)]">Onde comprar</span></Eyebrow>
            <h1 className="mt-4 font-display text-5xl lg:text-6xl">Macal, mais perto do que pensa.</h1>
            <p className="mt-5 text-lg text-primary-foreground/80 max-w-2xl mx-auto">Os produtos Macal estão disponíveis em supermercados, mercearias gourmet e nas mesas dos melhores restaurantes portugueses.</p>
          </div>
        </section>

        {/* Logo carousel — rotating marquee */}
        <section className="py-14 bg-card/80 backdrop-blur border-y border-border">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">Disponível em</p>
            <div className="mt-8 overflow-hidden marquee-mask">
              <div className="flex w-max gap-12 animate-marquee">
                {marqueeLogos.map((l, i) => (
                  <div
                    key={`${l.name}-${i}`}
                    className="shrink-0 h-20 w-44 flex items-center justify-center px-4"
                    title={l.name}
                  >
                    <img
                      src={l.logo}
                      alt={l.name}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6">
            {canais.map((c) => (
              <div key={c.title} className="bg-card/90 backdrop-blur border border-border rounded-xl p-8 hover:border-accent transition">
                <div className="size-14 rounded-full bg-[var(--color-gold)]/15 text-accent flex items-center justify-center">
                  <c.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl">{c.title}</h3>
                <p className="mt-3 text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-secondary/80 backdrop-blur">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <Eyebrow>Cobertura nacional</Eyebrow>
            <h2 className="mt-4 font-display text-4xl">Em todas as regiões.</h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {regioes.map((r) => (
                <span key={r} className="rounded-full bg-card border border-border px-5 py-2.5 text-sm">{r}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary/95 text-primary-foreground text-center">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-display text-4xl">Não encontra perto de si?</h2>
            <p className="mt-4 text-primary-foreground/80">Fale connosco e indicamos o ponto de venda mais próximo.</p>
            <Link to="/contactos" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-medium text-accent-foreground hover:opacity-90 transition">Contactar Macal <ArrowRight className="size-4" /></Link>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
