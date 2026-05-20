import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Eyebrow } from "@/components/site/SectionEyebrow";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";

export const Route = createFileRoute("/contactos")({
  component: ContactosPage,
  head: () => ({
    meta: [
      { title: "Contactos — Macal" },
      { name: "description", content: "Fale com a Macal. Catálogo, condições comerciais e amostras para restaurantes, retalhistas e distribuidores." },
      { property: "og:title", content: "Contactos Macal" },
      { property: "og:description", content: "Seja nosso parceiro." },
    ],
    links: [{ rel: "canonical", href: "/contactos" }],
  }),
});

function ContactosPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="bg-background text-foreground">
      <Header />
      <section className="pt-40 pb-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Eyebrow><span className="text-[var(--color-gold)]">Contactos</span></Eyebrow>
          <h1 className="mt-4 font-display text-5xl lg:text-6xl">Vamos falar.</h1>
          <p className="mt-5 text-lg text-primary-foreground/80 max-w-2xl mx-auto">Restaurantes, retalhistas e distribuidores — peça catálogo, condições comerciais ou amostras.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <div className="space-y-7">
            {[
              { icon: MapPin, label: "Sede", value: "Castelo Branco, Portugal" },
              { icon: Mail, label: "Email", value: "geral@macal.pt" },
              { icon: Phone, label: "Telefone", value: "+351 272 000 000" },
              { icon: Clock, label: "Horário", value: "Seg–Sex · 9h–18h" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-[var(--color-gold)]/15 text-accent flex items-center justify-center flex-shrink-0">
                  <c.icon className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="mt-1 text-lg font-medium">{c.value}</div>
                </div>
              </div>
            ))}
            <div className="mt-10 p-6 bg-secondary rounded-xl border border-border">
              <h3 className="font-display text-xl">Certificações</h3>
              <p className="mt-2 text-sm text-muted-foreground">IFS Food · HACCP · Controlo Veterinário</p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="bg-card border border-border rounded-xl p-8 space-y-5"
          >
            {sent ? (
              <div className="text-center py-16">
                <div className="font-display text-3xl text-accent">Obrigado!</div>
                <p className="mt-3 text-muted-foreground">A sua mensagem foi recebida. Responderemos brevemente.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Nome" name="nome" />
                  <Field label="Empresa" name="empresa" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Email" name="email" type="email" />
                  <Field label="Telefone" name="telefone" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Tipo de parceria</label>
                  <select className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 outline-none focus:border-accent">
                    <option>Restauração</option>
                    <option>Retalho</option>
                    <option>Distribuição</option>
                    <option>Exportação</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Mensagem</label>
                  <textarea rows={5} required className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 outline-none focus:border-accent resize-none" />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-medium text-accent-foreground hover:opacity-90 transition">
                  Enviar mensagem <Send className="size-4" />
                </button>
              </>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input name={name} type={type} required className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 outline-none focus:border-accent" />
    </div>
  );
}
