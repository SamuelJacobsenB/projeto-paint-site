import { Providers } from "@/contexts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Providers>
        <body>
          <main id="root">{children}</main>
        </body>
      </Providers>
    </html>
  );
}
