import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased w-screen overflow-x-hidden mode-switcher">
          <input type="radio" className="sr-only" name="theme" id="light" />
          <input type="radio" className="sr-only" name="theme" id="dark" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
