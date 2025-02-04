import { Providers } from "@/contexts";
import { Message } from "@/components";
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
          <Message />
          <main id="root">{children}</main>
        </body>
      </Providers>
    </html>
  );
}
