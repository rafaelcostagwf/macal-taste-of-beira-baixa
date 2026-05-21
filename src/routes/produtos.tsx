import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Eyebrow } from "@/components/site/SectionEyebrow";
import { ArrowRight, Award } from "lucide-react";
import pChar from "@/assets/product-charcutaria.jpg";
import pLat from "@/assets/product-laticinios.jpg";
import pPres from "@/assets/product-presunto.jpg";
import hero2 from "@/assets/conjunto-macal.png";

export const Route = createFileRoute("/produtos")({
  component: ProdutosPage,
  head: () => ({
    meta: [
      { title: "Produtos Macal — Charcutaria, presuntos e laticínios" },
      { name: "description", content: "Gama Macal: enchidos curados, presuntos de cura lenta e queijos artesanais da Beira Baixa." },
      { property: "og:title", content: "Produtos Macal" },
      { property: "og:description", content: "Enchidos, presuntos e queijos com IFS Food." },
    ],
    links: [{ rel: "canonical", href: "/produtos" }],
  }),
});

const gamas = [
  {
    id: "charcutaria",
    img: pChar,
    tag: "Gama Charcutaria",
    title: "Enchidos curados",
    desc: "Chouriço de carne, linguiça, salpicão, morcela, farinheira — fumeiro tradicional da Beira Baixa, com cura lenta a fumo de lenha.",
    items: ["Chouriço de carne", "Linguiça", "Salpicão", "Morcela", "Farinheira", "Chouriço de cebola"],
  },
  {
    id: "presunto",
    img: pPres,
    tag: "Gama Presuntos",
    title: "Presunto curado",
    desc: "Curado naturalmente durante meses, com o sabor profundo que só o tempo dá. Disponível em peça inteira, fatiado ou em taco.",
    items: ["Presunto peça inteira", "Presunto fatiado", "Presunto em taco", "Paleta curada"],
  },
  {
    id: "laticinios",
    img: pLat,
    tag: "Gama Laticínios",
    title: "Queijos artesanais",
    desc: "Queijos de ovelha e mistura, de pastas amanteigadas a curas intensas. Produção artesanal com leite da região.",
    items: ["Queijo de ovelha amanteigado", "Queijo curado de mistura", "Queijo fresco", "Requeijão"],
  },
];

function ProdutosPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <section className="relative h-[55vh] min-h-[400px] flex items-end text-primary-foreground">
        <img src={hero2} alt="" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 w-full">
          <Eyebrow><span className="text-[var(--color-gold)]">Gama Macal</span></Eyebrow>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl">Os nossos produtos.</h1>
          <p className="mt-4 max-w-xl text-lg text-primary-foreground/85">Tudo o que sai da Macal tem assinatura. Charcutaria, presuntos e laticínios produzidos com rigor IFS Food.</p>
        </div>
      </section>

      {gamas.map((g, idx) => (
        <section key={g.id} id={g.id} className={`py-24 lg:py-32 ${idx % 2 ? "bg-secondary" : ""}`}>
          <div className={`mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center ${idx % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="relative group overflow-hidden rounded-xl">
              <img src={g.img} alt={g.title} className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-[1200ms]" loading="lazy" width={1024} height={1280} />
              <div className="absolute top-5 left-5 bg-accent text-accent-foreground text-[11px] tracking-[0.25em] uppercase px-4 py-1.5 rounded-full">{g.tag}</div>
            </div>
            <div>
              <Eyebrow>{g.tag}</Eyebrow>
              <h2 className="mt-4 font-display text-4xl lg:text-5xl">{g.title}</h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{g.desc}</p>
              <ul className="mt-7 grid sm:grid-cols-2 gap-3">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-foreground">
                    <Award className="size-4 text-accent" /> {it}
                  </li>
                ))}
              </ul>
              <Link to="/contactos" className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground hover:opacity-90 transition">
                Pedir catálogo <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-4xl">Veja-os em ação na cozinha</h2>
          <Link to="/receitas" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-medium text-accent-foreground hover:opacity-90 transition">Ver receitas <ArrowRight className="size-4" /></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
