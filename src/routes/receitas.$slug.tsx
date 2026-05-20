import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Eyebrow } from "@/components/site/SectionEyebrow";
import { getRecipe, recipes } from "@/lib/recipes";
import { Clock, Users, ChefHat, ArrowRight, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/receitas/$slug")({
  loader: ({ params }) => {
    const r = getRecipe(params.slug);
    if (!r) throw notFound();
    return { recipe: r };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.recipe.title} — Receita Macal` },
          { name: "description", content: loaderData.recipe.intro },
          { property: "og:title", content: loaderData.recipe.title },
          { property: "og:description", content: loaderData.recipe.intro },
          { property: "og:image", content: loaderData.recipe.image },
          { property: "og:type", content: "article" },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/receitas/${loaderData.recipe.slug}` }] : [],
  }),
  component: RecipeDetail,
  notFoundComponent: () => (
    <main className="bg-background text-foreground min-h-screen">
      <Header />
      <div className="pt-40 pb-20 text-center px-6">
        <h1 className="font-display text-4xl">Receita não encontrada</h1>
        <Link to="/receitas" className="mt-6 inline-flex items-center gap-2 text-accent">
          <ArrowLeft className="size-4" /> Voltar às receitas
        </Link>
      </div>
      <Footer />
    </main>
  ),
  errorComponent: () => (
    <main className="bg-background text-foreground min-h-screen">
      <Header />
      <div className="pt-40 pb-20 text-center px-6">
        <h1 className="font-display text-3xl">Algo correu mal</h1>
        <Link to="/receitas" className="mt-6 inline-flex items-center gap-2 text-accent">
          <ArrowLeft className="size-4" /> Voltar
        </Link>
      </div>
      <Footer />
    </main>
  ),
});

function RecipeDetail() {
  const { recipe } = Route.useLoaderData();
  const related = recipes.filter((r) => r.slug !== recipe.slug).slice(0, 3);

  return (
    <main className="bg-background text-foreground">
      <Header />
      <section className="relative h-[70vh] min-h-[520px] flex items-end text-primary-foreground">
        <img src={recipe.image} alt={recipe.title} className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/20" />
        <div className="relative mx-auto max-w-5xl px-6 pb-16 w-full">
          <Link to="/receitas" className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-[var(--color-gold)]">
            <ArrowLeft className="size-4" /> Todas as receitas
          </Link>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl max-w-3xl leading-tight">{recipe.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm uppercase tracking-widest text-[var(--color-gold)]">
            <span className="flex items-center gap-2"><Clock className="size-4" /> {recipe.time}</span>
            <span className="flex items-center gap-2"><Users className="size-4" /> {recipe.servings}</span>
            <span className="flex items-center gap-2"><ChefHat className="size-4" /> {recipe.difficulty}</span>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 grid lg:grid-cols-[1fr_320px] gap-12">
          <div>
            <p className="font-display text-2xl text-foreground/90 leading-relaxed">{recipe.intro}</p>

            <h2 className="mt-14 font-display text-3xl flex items-center gap-3"><span className="h-px w-10 bg-accent" /> Ingredientes</h2>
            <ul className="mt-6 space-y-3">
              {recipe.ingredients.map((it) => (
                <li key={it} className="flex items-start gap-3 text-lg">
                  <span className="mt-2.5 size-1.5 rounded-full bg-accent flex-shrink-0" /> {it}
                </li>
              ))}
            </ul>

            <h2 className="mt-14 font-display text-3xl flex items-center gap-3"><span className="h-px w-10 bg-accent" /> Preparação</h2>
            <ol className="mt-6 space-y-6">
              {recipe.steps.map((s, i) => (
                <li key={i} className="flex gap-5">
                  <span className="font-display text-3xl text-accent leading-none flex-shrink-0 w-12">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-lg text-foreground/90 leading-relaxed">{s}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside className="lg:sticky lg:top-32 h-fit">
            <div className="bg-primary text-primary-foreground rounded-xl p-7">
              <Eyebrow><span className="text-[var(--color-gold)]">Produto Macal</span></Eyebrow>
              <h3 className="mt-4 font-display text-2xl">{recipe.product.name}</h3>
              <p className="mt-3 text-sm text-primary-foreground/75">A alma desta receita. Sem ele, não é o mesmo.</p>
              <Link to="/produtos" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 transition">
                Ver gama <ArrowRight className="size-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Mais receitas</Eyebrow>
          <h2 className="mt-4 font-display text-3xl lg:text-4xl">Continue a cozinhar com a Macal.</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} to="/receitas/$slug" params={{ slug: r.slug }} className="group block bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={r.image} alt={r.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]" loading="lazy" width={1200} height={900} />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl group-hover:text-accent transition-colors">{r.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{r.product.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
