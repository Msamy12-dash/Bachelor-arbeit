import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <main>
            <div>{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}