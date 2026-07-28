import "./globals.css";

export const metadata = {
  title: "Fluinow | IA que trabalha pelo seu negócio",
  description:
    "Agentes de IA, automações inteligentes e produtos SaaS feitos para transformar processos em crescimento.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
