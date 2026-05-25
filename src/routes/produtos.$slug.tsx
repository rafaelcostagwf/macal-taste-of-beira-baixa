import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ArrowLeft, ArrowRight, Wheat, Beef, Leaf } from "lucide-react";
import { getProduct, products } from "@/lib/products";
import macalLogo from "@/assets/macal-logo.png";
import woodBg from "@/assets/wood-bg.jpg";

export const Route = createFileRoute("/produtos/$slug")({
  component: ProductDetailPage,
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Macal` },
          { name: "description", content: loaderData.product.short },
          { property: "og:title", content: `${loaderData.product.name} — Macal` },
          { property: "og:description", content: loaderData.product.short },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [{ title: "Produto Macal" }],
  }),
  notFoundComponent: () => (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <p className="text-muted-foreground">Produto não encontrado.</p>
        <Link to="/produtos" className="mt-4 inline-block text-accent underline">Ver todos os produtos</Link>
      </div>
    </main>
  ),
  errorComponent: ({ error }) => (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">{error.message}</p>
    </main>
  ),
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  return (
    <main className="bg-background text-foreground">
      <Header />

      {/* HERO — dark red split */}
      <section className="relative pt-32 pb-16 bg-[#7a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(ellipse_at_top_left,white,transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Link to="/produtos" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-8">
              <ArrowLeft className="size-4" /> Voltar
            </Link>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight">{product.name}</h1>
            <p className="mt-5 text-lg text-white/80">{product.short}</p>
            <div className="mt-10 flex items-center gap-4">
              <img src={macalLogo} alt="Macal" className="h-16 w-auto brightness-0 invert" />
              <div className="border-l border-white/30 pl-4">
                <p className="font-display text-xl leading-none">Macal</p>
                <p className="tracking-[0.3em] text-[10px] uppercase text-white/70 mt-1">Clássicos</p>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[420px] w-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      </section>

      {/* INFO GERAL + wood */}
      <section className="relative grid lg:grid-cols-2">
        <div className="bg-[#f3efe8] px-6 py-20 lg:px-16 lg:py-24">
          <h2 className="font-display text-4xl text-[#7a1a1a]">Informação geral</h2>
          <dl className="mt-10 space-y-5 text-foreground/85">
            <div><dt className="inline font-semibold">Produto </dt><dd className="inline">{product.name}</dd></div>
            <div><dt className="inline font-semibold">Gama </dt><dd className="inline">Macal Clássicos</dd></div>
            <div><dt className="inline font-semibold">Peso </dt><dd className="inline">{product.weight}</dd></div>
            <div><dt className="inline font-semibold">Conservação </dt><dd className="inline">{product.conservation}</dd></div>
          </dl>
          <p className="mt-8 leading-relaxed text-foreground/80 max-w-prose">{product.description}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Badge icon={<Leaf className="size-4" />}>Sem corantes</Badge>
            <Badge icon={<Beef className="size-4" />}>Alto teor em proteína</Badge>
            <Badge icon={<Wheat className="size-4" />}>Receita tradicional</Badge>
          </div>
        </div>

        <div className="relative min-h-[400px] flex items-center justify-center p-10">
          <img src={woodBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/30" />
          <img src={product.image} alt="" className="relative max-h-[520px] w-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]" />
        </div>
      </section>

      {/* INGREDIENTES + VALOR NUTRICIONAL */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl text-[#7a1a1a]">Ingredientes</h2>
            <p className="mt-5 leading-relaxed text-foreground/85">{product.ingredients}</p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-[#7a1a1a]">Declaração nutricional</h2>
            <p className="mt-2 text-sm text-muted-foreground">Valores médios por 100 g.</p>
            <div className="mt-5 rounded-xl border border-border overflow-hidden bg-card">
              <table className="w-full text-sm">
                <tbody>
                  {product.nutritional.map((row, i) => (
                    <tr key={row.label} className={i % 2 ? "bg-secondary/40" : ""}>
                      <td className="px-5 py-3 text-foreground/80">{row.label}</td>
                      <td className="px-5 py-3 text-right font-medium tabular-nums">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-[#7a1a1a]">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-3xl text-white">Outros da mesma gama</h2>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2">
              {related.map((p) => (
                <Link key={p.slug} to="/produtos/$slug" params={{ slug: p.slug }} className="group block bg-white/5 hover:bg-white/10 transition aspect-square flex items-center justify-center p-6">
                  <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/produtos" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-7 py-3.5 font-medium text-[#3a1a06] hover:opacity-90 transition">
                Ver todos os produtos <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

function Badge({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border-2 border-[#7a1a1a] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#7a1a1a]">
      {icon}
      {children}
    </span>
  );
}
