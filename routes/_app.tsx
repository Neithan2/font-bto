// routes/_app.tsx
import { define } from "../utils.ts";
import { Head, Partial } from "fresh/runtime";
import Navbar from "@/islands/Navbar.tsx";
import Footer from "@/islands/Footer.tsx";

export default define.page(function App(props) {
  // 1. Extraemos 'url' de las props
  const { Component, url } = props;

  return (
    <html lang="es">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link f-permanent rel="icon" type="image/x-icon" href="/favicon.ico?v=2025" />
        <title f-permanent>BTOQ</title>

        {/* ... el resto de tus preloads ... */}
        <link rel="stylesheet" href="/styles.css" />
      </Head>

      <body className="flex flex-col min-h-screen bg-[#1f374f]" f-client-nav>
        {/* 2. PASAR LA URL A LA NAVBAR */}
        <Navbar url={url} />

        <main className="grow">
          <Partial name="main-content">
            <Component {...props} />
          </Partial>
        </main>

        <Footer />
      </body>
    </html>
  );
});
