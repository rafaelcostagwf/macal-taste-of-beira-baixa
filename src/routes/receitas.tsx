import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Eyebrow } from "@/components/site/SectionEyebrow";
import { recipes } from "@/lib/recipes";
import { Clock, Users, ChefHat, ArrowRight } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";

export const Route = createFileRoute("/receitas")({
  component: ReceitasPage,
  head: () => ({
    meta: [
      { title: "Receitas Macal — Cozinha tradicional portuguesa" },
      { name: "description", content: "Pratos tradicionais portugueses com os produtos Macal: feijoada, caldo verde, migas e tábuas." },
      { property: "og:title", content: "Receitas Macal" },
      { property: "og:description", content: "Cozinhe com a Macal — tradição em cada prato." },
    ],
    links: [{ rel: "canonical", href: "/receitas" }],
  }),
});

const filters = ["Todas", "Fácil", "Médio", "Difícil"] as const;

function ReceitasPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todas");
  const list = filter === "Todas" ? recipes : recipes.filter((r) => r.difficulty === filter);

  return (
    <main className="bg-background text-foreground">
      <Header />
      <section className="relative h-[55vh] min-h-[400px] flex items-end text-primary-foreground">
        <img src={hero2} alt="" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 w-full">
          <Eyebrow><span className="text-[var(--color-gold)]">Receitas</span></Eyebrow>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl">Cozinhe com a Macal.</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85">Pratos tradicionais portugueses com a indicação do produto Macal que dá sabor a cada um.</p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-sm uppercase tracking-widest transition ${
                  filter === f ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {list.map((r) => (
              <Link key={r.slug} to="/receitas/$slug" params={{ slug: r.slug }} className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={r.image} alt={r.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]" loading="lazy" width={1200} height={900} />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] tracking-widest uppercase text-accent">
                    <span className="flex items-center gap-1.5"><Clock className="size-3.5" /> {r.time}</span>
                    <span className="flex items-center gap-1.5"><Users className="size-3.5" /> {r.servings}</span>
                    <span className="flex items-center gap-1.5"><ChefHat className="size-3.5" /> {r.difficulty}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl group-hover:text-accent transition-colors">{r.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{r.intro}</p>
                  <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Produto Macal</div>
                      <div className="text-sm font-medium">{r.product.name}</div>
                    </div>
                    <ArrowRight className="size-5 text-accent group-hover:translate-x-1 transition-transform" />
                  </div>
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
