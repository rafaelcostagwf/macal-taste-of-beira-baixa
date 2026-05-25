import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Eyebrow } from "@/components/site/SectionEyebrow";
import { ArrowLeft, ArrowRight, Award } from "lucide-react";
import { getProduct, products } from "@/lib/products";

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

      <section className="pt-32 pb-6 bg-[#7a1a1a] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/produtos" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <ArrowLeft className="size-4" /> Voltar aos produtos
          </Link>
        </div>
      </section>

      <section className="bg-[#7a1a1a] text-white pb-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-square bg-white/5 rounded-2xl overflow-hidden flex items-center justify-center p-8">
            <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain drop-shadow-2xl" />
          </div>
          <div>
            <Eyebrow><span className="text-[var(--color-gold)]">Gama Macal</span></Eyebrow>
            <h1 className="mt-3 font-display text-4xl lg:text-6xl">{product.name}</h1>
            <p className="mt-4 text-lg text-white/80">{product.short}</p>
            <p className="mt-6 text-white/85 leading-relaxed">{product.description}</p>

            <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border border-white/15 p-4">
                <dt className="text-white/60 uppercase tracking-wider text-[11px]">Peso</dt>
                <dd className="mt-1 font-medium">{product.weight}</dd>
              </div>
              <div className="rounded-lg border border-white/15 p-4">
                <dt className="text-white/60 uppercase tracking-wider text-[11px]">Categoria</dt>
                <dd className="mt-1 font-medium capitalize">{product.category}</dd>
              </div>
            </dl>

            <Link to="/contactos" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-7 py-3.5 font-medium text-[#3a1a06] hover:opacity-90 transition">
              Pedir este produto <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14">
          <div>
            <Eyebrow>Informação</Eyebrow>
            <h2 className="mt-3 font-display text-3xl lg:text-4xl">Ingredientes & conservação</h2>
            <div className="mt-6 space-y-5 text-foreground/85 leading-relaxed">
              <div>
                <h3 className="font-display text-xl text-foreground">Ingredientes</h3>
                <p className="mt-2">{product.ingredients}</p>
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground">Conservação</h3>
                <p className="mt-2">{product.conservation}</p>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground pt-2">
                <Award className="size-4 text-accent" /> Produzido sob certificação IFS Food / HACCP
              </div>
            </div>
          </div>

          <div>
            <Eyebrow>Valor nutricional</Eyebrow>
            <h2 className="mt-3 font-display text-3xl lg:text-4xl">Tabela nutricional</h2>
            <p className="mt-2 text-sm text-muted-foreground">Valores médios por 100 g.</p>
            <div className="mt-6 rounded-xl border border-border overflow-hidden bg-card">
              <table className="w-full text-sm">
                <tbody>
                  {product.nutritional.map((row, i) => (
                    <tr key={row.label} className={i % 2 ? "bg-secondary/50" : ""}>
                      <td className="px-5 py-3 text-foreground/80">{row.label}</td>
                      <td className="px-5 py-3 text-right font-medium">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-6">
            <Eyebrow>Da mesma gama</Eyebrow>
            <h2 className="mt-3 font-display text-3xl lg:text-4xl">Também poderá gostar</h2>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map((p) => (
                <Link key={p.slug} to="/produtos/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="aspect-square bg-[#7a1a1a] rounded-xl overflow-hidden flex items-center justify-center p-6">
                    <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="mt-3 font-medium text-foreground group-hover:text-accent transition">{p.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
