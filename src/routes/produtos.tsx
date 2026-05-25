import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Eyebrow } from "@/components/site/SectionEyebrow";
import { ArrowRight } from "lucide-react";
import hero2 from "@/assets/conjunto-macal.png";
import { categories, products, type ProductCategory } from "@/lib/products";

type CatSearch = "todos" | ProductCategory;
const validCats: CatSearch[] = ["todos", "enchidos", "presuntos", "laticinios", "fumados", "cabazes"];

export const Route = createFileRoute("/produtos")({
  component: ProdutosPage,
  validateSearch: (search: Record<string, unknown>): { cat: CatSearch } => ({
    cat: validCats.includes(search.cat as CatSearch) ? (search.cat as CatSearch) : "todos",
  }),
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

function ProdutosPage() {
  const { cat } = Route.useSearch();
  const navigate = useNavigate();

  const filtered = cat === "todos" ? products : products.filter((p) => p.category === (cat as ProductCategory));

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

      {/* Brand block + filters */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-display text-5xl text-accent">Macal</p>
          <p className="mt-1 tracking-[0.4em] text-sm text-muted-foreground uppercase">Clássicos</p>

          <div className="mt-10 flex flex-wrap justify-center gap-2 md:gap-1">
            {categories.map((c) => {
              const active = (cat ?? "todos") === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => navigate({ to: "/produtos", search: { cat: c.id } })}
                  className={`px-5 md:px-7 py-3 text-sm md:text-base font-medium rounded-md transition border-2 ${
                    active ? "border-accent text-accent" : "border-transparent text-foreground hover:text-accent"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product grid Nobre-style */}
      <section className="bg-[#7a1a1a]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((p) => (
              <Link
                key={p.slug}
                to="/produtos/$slug"
                params={{ slug: p.slug }}
                className="group relative aspect-square flex items-center justify-center p-6 md:p-10 border border-white/5 hover:bg-white/5 transition"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition">
                  <p className="text-white font-medium text-sm">{p.name}</p>
                </div>
              </Link>
            ))}
            {filtered.length === 0 && (
              <p className="col-span-full text-center text-white/70 py-20">Sem produtos nesta categoria.</p>
            )}
          </div>
        </div>
      </section>

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
