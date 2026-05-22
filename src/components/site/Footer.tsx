import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/macal-logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Macal" width={140} height={140} className="h-24 w-auto" />
          <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
            Charcutaria e laticínios da Beira Baixa, desde 1958.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4 text-[var(--color-gold)]">Navegação</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/sobre" className="hover:text-accent transition">A Macal</Link></li>
            <li><Link to="/produtos" className="hover:text-accent transition">Produtos</Link></li>
            <li><Link to="/receitas" className="hover:text-accent transition">Receitas</Link></li>
            <li><Link to="/onde-comprar" className="hover:text-accent transition">Onde comprar</Link></li>
            <li><Link to="/contactos" className="hover:text-accent transition">Contactos</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4 text-[var(--color-gold)]">Contactos</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><MapPin className="size-4 mt-0.5 text-accent" /> Zona Industrial de Mação, 6120-396 Mação</li>
            <li className="flex items-center gap-2"><Phone className="size-4 text-accent" /> +351 272 000 000</li>
            <li className="flex items-center gap-2"><Mail className="size-4 text-accent" /> geral@macal.pt</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4 text-[var(--color-gold)]">Certificações</h4>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            IFS Food · HACCP · Origem Beira Baixa · Controlo Veterinário
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-primary-foreground/60 text-center">
          © {new Date().getFullYear()} Macal — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
