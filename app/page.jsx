"use client";

import { useEffect, useState } from "react";

const services = [
  {
    number: "01",
    tag: "Agentes de IA",
    title: "Times digitais que não dormem.",
    text: "Agentes treinados no seu negócio para atender, vender, analisar e executar tarefas com autonomia e contexto.",
    bullets: ["SDR e qualificação", "Suporte inteligente", "Operações internas"],
    accent: "blue",
  },
  {
    number: "02",
    tag: "Automações",
    title: "Menos cliques. Mais resultado.",
    text: "Conectamos suas ferramentas e eliminamos o trabalho repetitivo, criando fluxos rápidos, confiáveis e mensuráveis.",
    bullets: ["CRM e marketing", "Financeiro e backoffice", "Dados e relatórios"],
    accent: "lime",
  },
  {
    number: "03",
    tag: "SaaS & Produtos",
    title: "Sua ideia, pronta para escalar.",
    text: "Projetamos e construímos produtos digitais com IA, do protótipo à operação, com foco em experiência e negócio.",
    bullets: ["MVPs de alta qualidade", "Plataformas sob medida", "Evolução contínua"],
    accent: "orange",
  },
];

const steps = [
  ["01", "Diagnóstico", "Mapeamos os gargalos e encontramos onde a IA gera mais impacto."],
  ["02", "Estratégia", "Desenhamos a solução, o fluxo e as métricas que definem sucesso."],
  ["03", "Construção", "Criamos, integramos e testamos tudo em ciclos rápidos."],
  ["04", "Escala", "Monitoramos, aprendemos e evoluímos a operação continuamente."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Fluinow — início">
          <span className="brand-mark"><i /><i /><i /></span>
          <span>fluinow</span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          <span /><span />
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#servicos" onClick={() => setMenuOpen(false)}>Soluções</a>
          <a href="#metodo" onClick={() => setMenuOpen(false)}>Como fazemos</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Por que a Fluinow</a>
        </div>
        <a className="button button-dark nav-cta" href="#contato">Falar com especialista <Arrow /></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy reveal">
          <div className="eyebrow"><span className="status-dot" /> Sua operação, em modo inteligente</div>
          <h1>IA que<br /><em>trabalha</em> pelo<br />seu negócio.</h1>
          <p>Transformamos processos lentos em sistemas inteligentes — com agentes, automações e produtos digitais que geram resultado de verdade.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contato">Quero transformar minha operação <Arrow /></a>
            <a className="text-link" href="#servicos">Conhecer soluções <span>↓</span></a>
          </div>
          <div className="trust-row">
            <div className="avatars"><span>AI</span><span>01</span><span>24h</span></div>
            <p><strong>Estratégia + execução</strong><br />Do primeiro diagnóstico à escala.</p>
          </div>
        </div>

        <div className="hero-system reveal">
          <div className="system-top">
            <span>FLUINOW / OPERAÇÃO AO VIVO</span>
            <span className="online"><i /> ONLINE</span>
          </div>
          <div className="flow-map">
            <div className="flow-line line-one" />
            <div className="flow-line line-two" />
            <div className="flow-line line-three" />
            <div className="node node-main"><span className="node-icon">✦</span><strong>Agente central</strong><small>Orquestrando operação</small><b>PROCESSANDO</b></div>
            <div className="node node-a"><span className="mini-icon blue">↗</span><div><strong>Leads</strong><small>+47 hoje</small></div></div>
            <div className="node node-b"><span className="mini-icon lime">✓</span><div><strong>Processos</strong><small>98% automático</small></div></div>
            <div className="node node-c"><span className="mini-icon orange">◎</span><div><strong>Clientes</strong><small>12 atendidos agora</small></div></div>
          </div>
          <div className="system-bottom">
            <div><span>TEMPO ECONOMIZADO</span><strong>+128h</strong><small>/ mês</small></div>
            <div className="mini-chart"><i /><i /><i /><i /><i /><i /><i /></div>
          </div>
          <div className="floating-note"><span>↗</span><div><strong>+32%</strong><small>Eficiência operacional</small></div></div>
        </div>
      </section>

      <section className="manifest">
        <div className="marquee">
          <span>AGENTES QUE PENSAM</span><b>✦</b><span>AUTOMAÇÕES QUE FLUEM</span><b>✦</b><span>PRODUTOS QUE ESCALAM</span><b>✦</b>
          <span>AGENTES QUE PENSAM</span><b>✦</b><span>AUTOMAÇÕES QUE FLUEM</span><b>✦</b>
        </div>
      </section>

      <section className="services shell section" id="servicos">
        <div className="section-heading reveal">
          <div><span className="kicker">/ O que fazemos</span><h2>Da complexidade<br />à <em>clareza.</em></h2></div>
          <p>Não vendemos tecnologia por tecnologia. Criamos sistemas que resolvem problemas reais, liberam seu time e movem os indicadores certos.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className={`service-card reveal ${service.accent}`} key={service.number}>
              <div className="card-top"><span>{service.number}</span><b>{service.tag}</b></div>
              <div className="service-visual">
                <div className="orbit o1" /><div className="orbit o2" />
                <span>{service.number === "01" ? "✦" : service.number === "02" ? "⌁" : "◫"}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>{service.bullets.map((b) => <li key={b}><i />{b}</li>)}</ul>
              <a href="#contato">Explorar solução <Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="method section" id="metodo">
        <div className="shell">
          <div className="method-intro reveal">
            <span className="kicker light">/ Como fazemos</span>
            <h2>Rápido no movimento.<br /><em>Rigoroso</em> no resultado.</h2>
          </div>
          <div className="method-layout">
            <div className="step-list reveal">
              {steps.map((step, i) => (
                <button key={step[0]} className={activeStep === i ? "active" : ""} onMouseEnter={() => setActiveStep(i)} onClick={() => setActiveStep(i)}>
                  <span>{step[0]}</span><strong>{step[1]}</strong><b>↗</b>
                </button>
              ))}
            </div>
            <div className="method-panel reveal">
              <span className="panel-index">{steps[activeStep][0]}</span>
              <div className="scanline" />
              <div className="panel-icon">✦</div>
              <h3>{steps[activeStep][1]}</h3>
              <p>{steps[activeStep][2]}</p>
              <div className="progress"><i style={{ width: `${(activeStep + 1) * 25}%` }} /></div>
              <small>ETAPA {activeStep + 1} DE 4</small>
            </div>
          </div>
        </div>
      </section>

      <section className="why shell section" id="sobre">
        <div className="why-copy reveal">
          <span className="kicker">/ Por que a Fluinow</span>
          <h2>IA sem teatro.<br /><em>Impacto</em> sem enrolação.</h2>
          <p>Somos o parceiro que entende o negócio antes de escrever a primeira linha de código. Juntamos visão estratégica, design e engenharia para entregar soluções que seu time realmente usa.</p>
          <a className="button button-dark" href="#contato">Construir com a Fluinow <Arrow /></a>
        </div>
        <div className="metric-grid reveal">
          <div className="metric large"><strong>3×</strong><span>mais velocidade</span><p>Da ideia ao primeiro resultado.</p></div>
          <div className="metric dark"><strong>24/7</strong><span>operação ativa</span><p>Sistemas trabalhando enquanto você cresce.</p></div>
          <div className="metric lime-metric"><strong>100%</strong><span>sob medida</span><p>Sem soluções genéricas ou caixas-pretas.</p></div>
        </div>
      </section>

      <section className="cta-section shell" id="contato">
        <div className="cta-card reveal">
          <div className="cta-orb" />
          <span className="kicker light">/ Vamos conversar</span>
          <h2>Seu próximo salto<br />começa com uma<br /><em>boa conversa.</em></h2>
          <p>Em 30 minutos, mapeamos uma oportunidade real de IA dentro da sua operação.</p>
          <a className="button button-primary" href="mailto:agfluinow@gmail.com?subject=Quero%20transformar%20minha%20operação%20com%20IA">Agendar diagnóstico gratuito <Arrow /></a>
          <small>SEM COMPROMISSO • RESPOSTA EM ATÉ 1 DIA ÚTIL</small>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand footer-brand"><span className="brand-mark"><i /><i /><i /></span><span>fluinow</span></div>
        <p>IA que trabalha pelo seu negócio.</p>
        <div><a href="#servicos">Soluções</a><a href="#metodo">Processo</a><a href="mailto:agfluinow@gmail.com">Contato</a></div>
        <span>© 2026 FLUINOW</span>
      </footer>
    </main>
  );
}
