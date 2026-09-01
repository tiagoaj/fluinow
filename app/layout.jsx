import "./globals.css";

export const metadata = {
  title: "Fluinow | Marketing, IA e tecnologia de ponta a ponta",
  description:
    "Marketing digital, gestão de mídias sociais, tráfego pago, agentes de IA, automações, integrações e sistemas personalizados em uma única empresa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
