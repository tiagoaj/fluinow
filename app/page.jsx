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
          <img src="/logo-fluinow.png" alt="Fluinow" />
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          <span /><span />
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#servicos" onClick={() => setMenuOpen(false)}>Soluções</a>
          <a href="#marketing" onClick={() => setMenuOpen(false)}>Marketing</a>
          <a href="#saas" onClick={() => setMenuOpen(false)}>SaaS próprios</a>
          <a href="#metodo" onClick={() => setMenuOpen(false)}>Como fazemos</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Por que a Fluinow</a>
        </div>
        <a className="button button-dark nav-cta" href="#contato">Falar com especialista <Arrow /></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy reveal">
          <div className="eyebrow"><span className="status-dot" /> Tudo que sua empresa precisa para crescer</div>
          <h1>Marketing que atrai.<br /><em>IA que atende.</em><br />Tecnologia que escala.</h1>
          <p>Cuidamos das suas redes sociais e anúncios, atendemos seus leads com agentes de IA e conectamos toda a operação com automações, sistemas e relatórios.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contato">Quero crescer com a Fluinow <Arrow /></a>
            <a className="text-link" href="#marketing">Ver como funciona <span>↓</span></a>
          </div>
          <div className="trust-row">
            <div className="avatars"><span>AI</span><span>01</span><span>24h</span></div>
            <p><strong>Uma empresa. Toda a jornada.</strong><br />Aquisição, atendimento, dados e tecnologia.</p>
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
            <div className="node node-main"><span className="node-icon">✦</span><strong>Operação integrada</strong><small>Marketing + IA + Dados</small><b>EM MOVIMENTO</b></div>
            <div className="node node-a"><span className="mini-icon blue">↗</span><div><strong>Tráfego pago</strong><small>Leads em escala</small></div></div>
            <div className="node node-b"><span className="mini-icon lime">✓</span><div><strong>Agente de IA</strong><small>Atendimento 24/7</small></div></div>
            <div className="node node-c"><span className="mini-icon orange">◎</span><div><strong>Social Media</strong><small>Marca presente</small></div></div>
          </div>
          <div className="system-bottom">
            <div><span>JORNADA CONECTADA</span><strong>360°</strong><small>ponta a ponta</small></div>
            <div className="mini-chart"><i /><i /><i /><i /><i /><i /><i /></div>
          </div>
          <div className="floating-note"><span>✓</span><div><strong>Tudo conectado</strong><small>Uma única parceira</small></div></div>
        </div>
      </section>

      <section className="manifest">
        <div className="marquee">
          <span>MARKETING QUE ATRAI</span><b>✦</b><span>AGENTES QUE CONVERTEM</span><b>✦</b><span>AUTOMAÇÕES QUE ESCALAM</span><b>✦</b>
          <span>DADOS QUE ORIENTAM</span><b>✦</b><span>SOLUÇÕES SOB MEDIDA</span><b>✦</b>
        </div>
      </section>

      <section className="marketing-section section" id="marketing">
        <div className="shell">
          <div className="marketing-heading reveal">
            <div><span className="kicker">/ Marketing Digital</span><h2>Presença que atrai.<br /><em>Mídia que converte.</em></h2></div>
            <p>Nós planejamos o conteúdo, cuidamos das redes sociais, gerenciamos os anúncios e mostramos com clareza o que está trazendo resultado.</p>
          </div>
          <div className="marketing-visual reveal">
            <img src="/marketing-digital-v2.png" alt="Profissional gerenciando conteúdo para redes sociais, campanhas de tráfego pago e relatórios de leads" />
            <div className="marketing-visual-labels">
              <span><b>01</b> Conteúdo e redes sociais</span>
              <span><b>02</b> Campanhas de tráfego pago</span>
              <span><b>03</b> Leads e relatórios</span>
            </div>
          </div>
          <div className="marketing-grid">
            <article className="marketing-feature reveal">
              <div className="marketing-card-head"><span>01</span><b>SOCIAL MEDIA</b></div>
              <div className="social-preview">
                <div className="social-brand"><img src="/logo-fluinow.png" alt="" /></div>
                <div className="social-post p1"><span>CONTEÚDO</span><strong>Marca presente.<br />Mensagem clara.</strong></div>
                <div className="social-post p2"><span>PLANEJAMENTO</span><strong>Calendário que<br />faz sentido.</strong></div>
                <img className="social-logo instagram" src="/brands/instagram.svg" alt="Instagram" />
                <img className="social-logo facebook" src="/brands/facebook.svg" alt="Facebook" />
              </div>
              <h3>Gestão completa das suas mídias sociais.</h3>
              <p>Estratégia editorial, planejamento, criação de conteúdo, design, copy, publicação e acompanhamento para construir autoridade e relacionamento.</p>
              <ul><li>Planejamento e calendário editorial</li><li>Conteúdo, copy e direção criativa</li><li>Gestão de Instagram e Facebook</li></ul>
            </article>
            <article className="marketing-feature reveal">
              <div className="marketing-card-head"><span>02</span><b>TRÁFEGO PAGO</b></div>
              <div className="traffic-dashboard">
                <div className="traffic-top"><span>CAMPANHAS / AO VIVO</span><b><i /> OTIMIZANDO</b></div>
                <div className="traffic-metric"><small>PERFORMANCE</small><strong>+ oportunidades</strong><span>com decisões guiadas por dados</span></div>
                <div className="traffic-chart"><i /><i /><i /><i /><i /><i /><i /><i /></div>
                <div className="traffic-channels"><span><img src="/brands/facebook.svg" alt="" /> Meta Ads</span><span><b>G</b> Google Ads</span></div>
              </div>
              <h3>Investimento orientado a resultado.</h3>
              <p>Criamos, gerenciamos e otimizamos campanhas para gerar alcance, oportunidades e vendas com transparência e visão de negócio.</p>
              <ul><li>Estratégia e estrutura de campanhas</li><li>Gestão de Meta Ads e Google Ads</li><li>Otimização contínua e relatórios</li></ul>
            </article>
          </div>
          <div className="marketing-bridge reveal">
            <div><span>01</span><strong>Atraímos</strong><small>Conteúdo + mídia paga</small></div><i>→</i>
            <div><span>02</span><strong>Atendemos</strong><small>Agentes de IA 24/7</small></div><i>→</i>
            <div><span>03</span><strong>Integramos</strong><small>CRM + automações</small></div><i>→</i>
            <div><span>04</span><strong>Medimos</strong><small>Relatórios inteligentes</small></div>
          </div>
        </div>
      </section>

      <section className="services shell section" id="servicos">
        <div className="section-heading reveal">
          <div><span className="kicker">/ Tecnologia sob medida</span><h2>Quando o padrão não resolve,<br /><em>a gente constrói.</em></h2></div>
          <p>Além do marketing, criamos a tecnologia que sua operação precisa: agentes de IA, automações, integrações e sistemas personalizados.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className={`service-card reveal ${service.accent}`} key={service.number}>
              <div className="card-top"><span>{service.number}</span><b>{service.tag}</b></div>
              <div className="service-visual"><div className="orbit o1" /><div className="orbit o2" /><span>{service.number === "01" ? "✦" : service.number === "02" ? "⌁" : "◫"}</span></div>
              <h3>{service.title}</h3><p>{service.text}</p>
              <ul>{service.bullets.map((b) => <li key={b}><i />{b}</li>)}</ul>
              <a href="#contato">Explorar solução <Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="agents-section section" id="agentes">
        <div className="shell">
          <div className="agents-layout">
            <div className="agents-copy reveal">
              <span className="kicker light">/ Agentes de IA personalizados</span>
              <h2>Um agente que entende<br />seu negócio e <em>faz acontecer.</em></h2>
              <p>Criamos agentes de IA sob medida, treinados com o contexto da sua empresa e conectados às ferramentas que sua operação já usa. Eles conversam, decidem e executam — com a linguagem e as regras do seu negócio.</p>
              <div className="agent-types">
                {["Atendimento", "Agendamento", "SDR", "BDR", "Vendas", "Suporte"].map((type, i) => (
                  <span key={type}><b>0{i + 1}</b>{type}</span>
                ))}
              </div>
              <a className="button agents-button" href="https://wa.me/5549988422630?text=Olá%2C%20quero%20criar%20um%20agente%20de%20IA%20personalizado" target="_blank" rel="noreferrer">Criar meu agente de IA <Arrow /></a>
            </div>

            <div className="agent-ecosystem reveal">
              <img className="robot-visual" src="/ai-agent-robot.png" alt="Agente robô da Fluinow conversando e integrado a diferentes plataformas" />
              <div className="ecosystem-center"><img src="/logo-fluinow.png" alt="Fluinow" /><span>AGENTE CENTRAL</span></div>
              <div className="integration-node node-tiny"><b>tiny</b><small>ERP</small></div>
              <div className="integration-node node-bling"><b>bling!</b></div>
              <div className="integration-node node-kommo"><b>K</b><small>kommo</small></div>
              <div className="integration-node node-facebook"><img src="/brands/facebook.svg" alt="Facebook" /></div>
              <div className="integration-node node-instagram"><img src="/brands/instagram.svg" alt="Instagram" /></div>
              <div className="integration-node node-chatwoot"><img src="/brands/chatwoot.png" alt="Chatwoot" /></div>
              <div className="integration-node node-calcom"><img src="/brands/calcom.svg" alt="Cal.com" /></div>
              <div className="integration-node node-calendar"><img src="/brands/googlecalendar.svg" alt="Google Agenda" /></div>
              <div className="integration-node node-webhook"><b>⌁</b><small>webhooks</small></div>
              <span className="connector c1" /><span className="connector c2" /><span className="connector c3" /><span className="connector c4" />
            </div>
          </div>
          <div className="agents-proof reveal">
            <span>PERSONALIZADO PARA SUA OPERAÇÃO</span>
            <span>INTEGRADO AO SEU ECOSSISTEMA</span>
            <span>EVOLUÇÃO E MONITORAMENTO CONTÍNUOS</span>
          </div>
        </div>
      </section>

      <section className="saas-section section" id="saas">
        <div className="shell">
          <div className="section-heading reveal">
            <div><span className="kicker">/ SaaS próprios</span><h2>Tecnologia que nasce<br />de um <em>problema real.</em></h2></div>
            <p>Além de construir para nossos clientes, criamos produtos próprios para tornar operações de IA mais confiáveis, previsíveis e fáceis de escalar.</p>
          </div>

          <article className="snw-card reveal">
            <div className="snw-copy">
              <div className="product-label"><span>PRODUTO FLUINOW</span><i>MONITORAMENTO 24/7</i></div>
              <div className="snw-title"><span className="snw-mark">S</span><div><strong>SNW</strong><small>Sistema de Notificação WhatsApp</small></div></div>
              <h3>Saiba que a conexão caiu<br /><em>antes do seu cliente.</em></h3>
              <p>Monitoramento em tempo real para agências de IA e empresas que operam WhatsApp. Quando uma conexão cai, o SNW avisa automaticamente o cliente e o time técnico — e confirma quando tudo está online novamente.</p>
              <div className="integration-caption">INTEGRAÇÃO NATIVA COM</div>
              <div className="integration-list">
                <span><img src="/brands/uazapi.png" alt="" /><strong>UAZAPI</strong></span>
                <span><img src="/brands/evolution.png" alt="" /><strong>EVOLUTION</strong></span>
                <span><img src="/brands/waha.png" alt="" /><strong>WAHA</strong></span>
              </div>
              <a className="button snw-button" href="https://snw.fluinow.com.br" target="_blank" rel="noreferrer">Quero conhecer o SNW <Arrow /></a>
            </div>

            <div className="snw-dashboard">
              <div className="dashboard-head"><span>SNW / MONITOR AO VIVO</span><b><i /> 12 CONEXÕES ONLINE</b></div>
              <div className="connection-card offline">
                <div className="connection-icon">!</div>
                <div><small>CONEXÃO DO CLIENTE</small><strong>WhatsApp desconectado</strong><span>Detectado agora</span></div>
                <b>OFFLINE</b>
              </div>
              <div className="notification-flow">
                <div className="flow-step"><span>01</span><i>⚡</i><div><strong>Detecção imediata</strong><small>Monitoramento em tempo real</small></div></div>
                <div className="flow-step"><span>02</span><i>↗</i><div><strong>Alertas automáticos</strong><small>Cliente + time técnico</small></div></div>
                <div className="flow-step active"><span>03</span><i>✓</i><div><strong>Reconexão confirmada</strong><small>Time técnico notificado</small></div></div>
              </div>
              <div className="reconnect-box">
                <small>OPÇÕES DE RECONEXÃO</small>
                <div><span><i>▦</i> QR Code</span><span><i>#</i> Código de pareamento</span></div>
              </div>
              <div className="dashboard-footer"><span><i /> SISTEMA OPERACIONAL</span><small>Última verificação: agora</small></div>
            </div>
          </article>

          <div className="snw-benefits reveal">
            <div><span>01</span><strong>Reduza o tempo offline</strong><p>Seu time descobre a queda no momento em que ela acontece.</p></div>
            <div><span>02</span><strong>Comunique sem esforço</strong><p>Cliente e suporte recebem as informações certas automaticamente.</p></div>
            <div><span>03</span><strong>Feche o ciclo</strong><p>A reconexão também pode ser notificada para confirmar a normalização.</p></div>
          </div>
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
          <div className="cta-robot-wrap">
            <div className="robot-speech">E aí, bora conversar?</div>
            <img src="/cta-robot-headset.png" alt="Robô feliz da Fluinow usando headset" />
          </div>
          <span className="kicker light">/ Vamos conversar</span>
          <h2>Seu próximo salto<br />começa com uma<br /><em>boa conversa.</em></h2>
          <p>Em 30 minutos, mapeamos uma oportunidade real de IA dentro da sua operação.</p>
          <a className="button button-primary" href="mailto:agfluinow@gmail.com?subject=Quero%20transformar%20minha%20operação%20com%20IA">Agendar diagnóstico gratuito <Arrow /></a>
          <small>SEM COMPROMISSO • RESPOSTA EM ATÉ 1 DIA ÚTIL</small>
        </div>
      </section>

      <a
        className="whatsapp-float"
        href="https://wa.me/5549988422630?text=Olá%2C%20vim%20pelo%20site%20da%20Fluinow%20e%20quero%20entender%20como%20a%20IA%20pode%20ajudar%20meu%20negócio."
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Fluinow pelo WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.04 3a12.5 12.5 0 0 0-10.7 18.96L3.5 28.7l6.9-1.8A12.5 12.5 0 1 0 16.04 3Zm0 22.7c-1.94 0-3.83-.55-5.46-1.58l-.39-.23-4.1 1.07 1.1-3.98-.25-.41a10.22 10.22 0 1 1 9.1 5.13Zm5.6-7.65c-.31-.16-1.82-.9-2.1-1-.29-.1-.5-.16-.71.16-.2.3-.8 1-.98 1.2-.18.2-.36.23-.67.08-1.8-.9-2.98-1.6-4.18-3.65-.32-.55.32-.51.9-1.7.1-.2.05-.38-.03-.54-.07-.15-.7-1.69-.97-2.31-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.3-1.1 1.07-1.1 2.62 0 1.54 1.13 3.03 1.28 3.24.16.2 2.22 3.39 5.38 4.76 2 .86 2.78.93 3.78.78 1.21-.18 1.82-.74 2.08-1.46.25-.72.25-1.33.18-1.46-.08-.13-.29-.2-.6-.37Z"/></svg>
        <span>Fale com a gente</span>
      </a>

      <footer className="footer shell">
        <div className="brand footer-brand"><img src="/logo-fluinow.png" alt="Fluinow" /></div>
        <p>IA que trabalha pelo seu negócio.</p>
        <div><a href="#servicos">Soluções</a><a href="#saas">SNW</a><a href="#metodo">Processo</a><a href="mailto:agfluinow@gmail.com">Contato</a></div>
        <div className="footer-legal"><a href="/privacidade">Privacidade</a><a href="/cookies">Cookies</a><a href="/termos">Termos</a><button type="button" onClick={() => window.dispatchEvent(new Event("fluinow:open-consent"))}>Gerenciar cookies</button></div>
        <span>© 2026 FLUINOW</span>
      </footer>
    </main>
  );
}
