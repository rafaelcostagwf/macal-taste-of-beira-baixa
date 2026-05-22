import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Linkedin, Award } from "lucide-react";
import logo from "@/assets/macal-logo.png";

export function Footer() {
  return (
    <footer className="relative bg-[var(--color-cream)] text-foreground">
      {/* Torn paper top — dark navy peeling away to reveal cream */}
      <div className="relative -mt-px">
        <div
          className="h-24 bg-primary"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 55%, 95% 70%, 88% 45%, 80% 75%, 72% 50%, 64% 80%, 55% 55%, 47% 78%, 38% 50%, 30% 72%, 22% 48%, 14% 75%, 6% 55%, 0 72%)",
          }}
        />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 grid lg:grid-cols-[1fr_1.2fr_1.2fr_1fr] gap-12">
          {/* Logo */}
          <div className="flex lg:justify-start justify-center">
            <div className="text-center lg:text-left">
              <img src={logo} alt="Macal" width={170} height={170} className="h-32 w-auto mx-auto lg:mx-0" />
              <p className="mt-3 text-[11px] tracking-[0.35em] uppercase text-[var(--color-gold)] font-medium">
                Desde 1958
              </p>
            </div>
          </div>

          {/* Contactos */}
          <div>
            <h4 className="font-display text-2xl font-semibold uppercase tracking-wide text-primary">
              Contactos
            </h4>
            <div className="mt-6 space-y-3 text-[15px] leading-relaxed text-foreground/80">
              <p>
                Zona Industrial de Mação<br />
                6120-396 Mação<br />
                Portugal
              </p>
              <p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Mação,+Portugal"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-gold)] underline-offset-4 hover:underline"
                >
                  [ ver no mapa ]
                </a>
              </p>
              <p className="pt-2">+351 272 000 000 <sup className="text-xs">*</sup></p>
              <p>
                <a href="mailto:geral@macal.pt" className="hover:text-accent transition">
                  geral@macal.pt
                </a>
              </p>
            </div>
          </div>

          {/* Outras Informações */}
          <div>
            <h4 className="font-display text-2xl font-semibold uppercase tracking-wide text-primary">
              Outras Informações
            </h4>
            <ul className="mt-6 space-y-2.5 text-[15px] text-foreground/80">
              <li><Link to="/sobre" className="hover:text-accent transition">A Macal</Link></li>
              <li><Link to="/produtos" className="hover:text-accent transition">Produtos</Link></li>
              <li><Link to="/receitas" className="hover:text-accent transition">Receitas</Link></li>
              <li><Link to="/onde-comprar" className="hover:text-accent transition">Onde comprar</Link></li>
              <li><a href="#" className="hover:text-accent transition">Termos e condições</a></li>
              <li><a href="#" className="hover:text-accent transition">Política de privacidade</a></li>
            </ul>
            <a
              href="https://www.livroreclamacoes.pt/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs uppercase tracking-widest hover:bg-accent transition"
            >
              Livro de Reclamações
            </a>
          </div>

          {/* Siga-nos */}
          <div>
            <h4 className="font-display text-2xl font-semibold uppercase tracking-wide text-primary">
              Siga-nos
            </h4>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Youtube, href: "#", label: "YouTube" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="size-11 rounded-full bg-foreground/10 hover:bg-accent hover:text-accent-foreground text-foreground flex items-center justify-center transition"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-xs text-foreground/55 leading-relaxed">
              <sup>*</sup> custo de chamada para a rede fixa nacional
            </p>
          </div>
        </div>

        {/* Certifications band */}
        <div className="border-t border-foreground/10">
          <div className="mx-auto max-w-7xl px-6 py-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.25em] text-foreground/65">
            {["IFS Food", "HACCP", "Portugal Sou Eu", "Origem Beira Baixa", "Controlo Veterinário"].map((it) => (
              <span key={it} className="flex items-center gap-2">
                <Award className="size-4 text-accent" /> {it}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-foreground/10">
          <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-foreground/55 text-center">
            © {new Date().getFullYear()} Macal — Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
