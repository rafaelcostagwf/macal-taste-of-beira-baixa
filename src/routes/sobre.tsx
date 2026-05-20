import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Eyebrow } from "@/components/site/SectionEyebrow";
import { ArrowRight } from "lucide-react";
import beira from "@/assets/about-beira.jpg";
import hero3 from "@/assets/hero-3.jpg";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
  head: () => ({
    meta: [
      { title: "A Macal — Quatro gerações de sabor desde 1958" },
      { name: "description", content: "História da Macal, empresa familiar de charcutaria e laticínios da Beira Baixa com mais de 60 anos." },
      { property: "og:title", content: "A Macal — Desde 1958" },
      { property: "og:description", content: "Quatro gerações de fumeiro tradicional da Beira Baixa." },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
});

function SobrePage() {
  const milestones = [
    ["1958", "Fundação", "A família Macal abre o primeiro centro produtivo na Beira Baixa."],
    ["1985", "2ª Geração", "Expansão para a gama de laticínios e queijos artesanais."],
    ["2008", "IFS Food", "Certificação internacional de segurança e qualidade alimentar."],
    ["2024", "Hoje", "Dois centros de produção, distribuição nacional e exportação."],
  ];
  return (
    <main className="bg-background text-foreground">
      <Header />
      <section className="relative h-[60vh] min-h-[420px] flex items-end text-primary-foreground">
        <img src={hero3} alt="" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 w-full">
          <Eyebrow><span className="text-[var(--color-gold)]">Desde 1958</span></Eyebrow>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl max-w-3xl">A história da Macal.</h1>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
          <img src={beira} alt="Beira Baixa" className="rounded-lg shadow-2xl w-full h-[560px] object-cover" loading="lazy" width={1600} height={1200} />
          <div>
            <Eyebrow>Família & Beira Baixa</Eyebrow>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl">Quatro gerações de fumeiro.</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A Macal nasceu em 1958, do espírito empreendedor de uma família humilde da Beira Baixa. Pai alfaiate, mãe dona de casa — e a visão de criar algo verdadeiramente diferente para a época: um espaço dedicado à arte do fumeiro tradicional português.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Hoje, com mais de seis décadas, mantemos a mesma filosofia: matérias-primas locais, métodos artesanais e tempo — muito tempo. É isso que faz um bom enchido.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center"><Eyebrow>Linha do tempo</Eyebrow><h2 className="mt-4 font-display text-4xl lg:text-5xl">Marcos da nossa história.</h2></div>
          <ol className="mt-16 relative border-l-2 border-accent/30 ml-4">
            {milestones.map(([y, t, d]) => (
              <li key={y} className="mb-12 ml-8">
                <span className="absolute -left-[11px] size-5 rounded-full bg-accent border-4 border-[var(--color-cream)]" />
                <div className="font-display text-3xl text-accent">{y}</div>
                <h3 className="mt-1 font-display text-2xl">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-4xl">Conheça os produtos Macal</h2>
          <Link to="/produtos" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-medium text-accent-foreground hover:opacity-90 transition">Ver gama <ArrowRight className="size-4" /></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
