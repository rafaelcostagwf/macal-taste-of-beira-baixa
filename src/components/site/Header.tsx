import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Mail } from "lucide-react";
import logo from "@/assets/macal-logo.png";

const links = [
  { label: "A Macal", to: "/sobre" },
  { label: "Produtos", to: "/produtos" },
  { label: "Receitas", to: "/receitas" },
  { label: "Onde comprar", to: "/onde-comprar" },
  { label: "Contactos", to: "/contactos" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur shadow-lg" : "bg-gradient-to-b from-primary/80 to-transparent"
      } text-primary-foreground`}
    >
      <div className="hidden md:flex justify-end items-center gap-6 px-8 py-1.5 text-[11px] tracking-widest uppercase text-primary-foreground/70 border-b border-primary-foreground/10">
        <a href="mailto:geral@macal.pt" className="flex items-center gap-2 hover:text-[var(--color-gold)] transition">
          <Mail className="size-3" /> geral@macal.pt
        </a>
        <span>Beira Baixa · Portugal</span>
        <span className="text-[var(--color-gold)]">IFS Food Certified</span>
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Macal"
            width={140}
            height={64}
            className="h-14 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-9 text-sm uppercase tracking-[0.18em]">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeProps={{ className: "text-[var(--color-gold)]" }}
                className="text-primary-foreground/85 hover:text-[var(--color-gold)] transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contactos"
          className="hidden md:inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-xs uppercase tracking-widest text-accent-foreground hover:opacity-90 transition"
        >
          Seja parceiro
        </Link>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-primary-foreground/10"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm uppercase tracking-widest text-primary-foreground/85 hover:text-[var(--color-gold)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <Link
              to="/contactos"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-accent px-5 py-3 text-xs uppercase tracking-widest text-accent-foreground"
            >
              Seja parceiro
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
