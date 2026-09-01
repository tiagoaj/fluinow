import LegalPage from "../../components/LegalPage";

export const metadata = { title: "Termos de Uso | Fluinow", description: "Condições de acesso e utilização do site da Fluinow." };

export default function TermsPage() {
  return <LegalPage eyebrow="/ Condições de uso" title="Termos de Uso">
    <p className="legal-lead">Ao navegar em fluinow.com.br, você concorda com estes termos. O conteúdo tem finalidade institucional e comercial e não substitui proposta ou contrato específico.</p>
    <section><h2>1. Uso permitido</h2><p>Você pode acessar o site para conhecer a Fluinow e iniciar contato comercial. É proibido comprometer a segurança, copiar conteúdo de forma ilícita, introduzir código malicioso ou violar direitos de terceiros.</p></section>
    <section><h2>2. Propostas e contratação</h2><p>Descrições de serviços, resultados ilustrativos e informações comerciais não constituem garantia nem oferta irrevogável. Escopo, valores, responsabilidades, prazos e níveis de serviço serão definidos em proposta ou contrato próprio.</p></section>
    <section><h2>3. Propriedade intelectual</h2><p>Marcas, textos, imagens, identidade visual e materiais próprios pertencem à Fluinow ou são utilizados sob licença. Marcas de terceiros aparecem para indicar integrações ou compatibilidade e pertencem aos respectivos titulares.</p></section>
    <section><h2>4. Plataformas externas</h2><p>O site pode direcionar para WhatsApp, Meta, Instagram, SNW e outros serviços. A disponibilidade, segurança e o tratamento nessas plataformas seguem também seus termos e políticas.</p></section>
    <section><h2>5. Disponibilidade e responsabilidade</h2><p>Empregamos esforços razoáveis para manter as informações corretas e o site disponível, mas podem ocorrer interrupções, erros ou atualizações. Na extensão permitida pela lei, não respondemos por uso indevido, serviços de terceiros ou eventos fora do nosso controle.</p></section>
    <section><h2>6. Privacidade</h2><p>O tratamento de dados está descrito na <a href="/privacidade">Política de Privacidade</a> e na <a href="/cookies">Política de Cookies</a>.</p></section>
    <section><h2>7. Legislação e contato</h2><p>Aplicam-se as leis brasileiras. Questões serão buscadas primeiro de forma amigável pelo e-mail <a href="mailto:agfluinow@gmail.com">agfluinow@gmail.com</a>, sem prejuízo dos direitos do consumidor.</p></section>
  </LegalPage>;
}
