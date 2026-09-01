import Link from "next/link";

export default function LegalPage({ eyebrow, title, children }) {
  return (
    <main className="legal-page">
      <header className="legal-header shell"><Link className="brand" href="/" aria-label="Voltar para a página inicial"><img src="/logo-fluinow.png" alt="Fluinow" /></Link><Link className="legal-back" href="/">← Voltar ao site</Link></header>
      <article className="legal-content shell"><span className="kicker">{eyebrow}</span><h1>{title}</h1><p className="legal-updated">Última atualização: 1º de setembro de 2026</p>{children}</article>
      <footer className="legal-footer shell"><span>© 2026 Fluinow</span><nav><Link href="/privacidade">Privacidade</Link><Link href="/cookies">Cookies</Link><Link href="/termos">Termos</Link></nav></footer>
    </main>
  );
}
