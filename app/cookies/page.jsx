import LegalPage from "../../components/LegalPage";

export const metadata = { title: "Política de Cookies | Fluinow", description: "Categorias, finalidades e controle de cookies utilizados pela Fluinow." };

export default function CookiesPage() {
  return <LegalPage eyebrow="/ Transparência" title="Política de Cookies">
    <p className="legal-lead">Cookies são pequenos arquivos ou identificadores usados pelo navegador. Esta política informa quais categorias podem ser utilizadas e como você controla sua escolha.</p>
    <section><h2>1. Categorias</h2><div className="cookie-list"><div><strong>Necessários</strong><span>Sempre ativos</span><p>Permitem funções essenciais e armazenam sua escolha de consentimento no próprio navegador. Não são usados para publicidade.</p></div><div><strong>Medição e desempenho</strong><span>Desligados por padrão</span><p>Geram métricas agregadas sobre páginas acessadas e desempenho. Só são ativados com autorização.</p></div><div><strong>Marketing e anúncios</strong><span>Desligados por padrão</span><p>Podem medir conversões e formar públicos para campanhas, incluindo o Meta Pixel quando configurado.</p></div></div></section>
    <section><h2>2. Tecnologias previstas</h2><div className="legal-table"><div><strong>Tecnologia</strong><strong>Finalidade e duração</strong></div><div><span><code>fluinow_consent_v1</code></span><span>Registra as categorias escolhidas até a versão do consentimento mudar ou o armazenamento ser apagado.</span></div><div><span>Meta Pixel e cookies associados</span><span>Medição de campanhas e publicidade, somente após consentimento. A duração é definida pela Meta e pode variar.</span></div></div><p>Novas ferramentas opcionais exigirão atualização desta política e do centro de preferências antes da ativação.</p></section>
    <section><h2>3. Como controlar</h2><p>Na primeira visita, você pode aceitar, recusar os opcionais ou personalizar. A recusa não impede o uso do site. Para alterar ou revogar sua escolha, clique em “Gerenciar cookies” no rodapé. Apagar os dados do navegador fará o banner reaparecer.</p></section>
    <section><h2>4. Terceiros</h2><p>Cookies de terceiros seguem também suas próprias políticas. Quando o Meta Pixel estiver ativo com consentimento, dados sobre navegador, dispositivo, endereço IP e eventos de navegação poderão ser enviados à Meta para medição e publicidade. Consulte a <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noreferrer">Política de Privacidade da Meta</a>.</p></section>
    <section><h2>5. Contato</h2><p>Dúvidas e solicitações: <a href="mailto:agfluinow@gmail.com?subject=Privacidade%20e%20cookies">agfluinow@gmail.com</a>.</p></section>
  </LegalPage>;
}
