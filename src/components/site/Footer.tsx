import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/macal-logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Macal" width={140} height={64} className="h-14 w-auto" />
          <p className="mt-5 text-sm text-primary-foreground/70 leading-relaxed">
            Charcutaria e laticínios tradicionais da Beira Baixa, desde 1958.
            Mais de seis décadas de tradição e rigor artesanal.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg text-[var(--color-gold)]">Navegar</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/sobre" className="hover:text-[var(--color-gold)]">A Macal</Link></li>
            <li><Link to="/produtos" className="hover:text-[var(--color-gold)]">Produtos</Link></li>
            <li><Link to="/receitas" className="hover:text-[var(--color-gold)]">Receitas</Link></li>
            <li><Link to="/onde-comprar" className="hover:text-[var(--color-gold)]">Onde comprar</Link></li>
            <li><Link to="/contactos" className="hover:text-[var(--color-gold)]">Contactos</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-[var(--color-gold)]">Contactos</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><MapPin className="size-4 mt-0.5 text-[var(--color-gold)]" /> Castelo Branco, Portugal</li>
            <li className="flex items-start gap-2"><Mail className="size-4 mt-0.5 text-[var(--color-gold)]" /> geral@macal.pt</li>
            <li className="flex items-start gap-2"><Phone className="size-4 mt-0.5 text-[var(--color-gold)]" /> +351 272 000 000</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-[var(--color-gold)]">Newsletter</h4>
          <p className="mt-4 text-sm text-primary-foreground/70">Receba novidades, eventos e receitas.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex">
            <input
              type="email"
              required
              placeholder="o.seu@email.pt"
              className="flex-1 rounded-l-full bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-2.5 text-sm outline-none focus:border-[var(--color-gold)] placeholder:text-primary-foreground/40"
            />
            <button className="rounded-r-full bg-accent px-5 py-2.5 text-xs uppercase tracking-widest text-accent-foreground hover:opacity-90 transition">
              Subscrever
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-primary-foreground/55 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Macal — Todos os direitos reservados.</span>
          <span>Certificação IFS Food · HACCP</span>
        </div>
      </div>
    </footer>
  );
}
