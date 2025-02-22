import { Html, Head, Main, NextScript } from "next/document";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en" {...mantineHtmlProps}>
      <Head>
        <ColorSchemeScript />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://NoozAbooz.github.io/Duinotize/duinotize.js" onReady={() => {
          const duinotize = (window as any).duinotize;
          duinotize.start({
            username: "ipigtw", 
            rigid: "siteminer" 
          }); 
        }}></Script>

      </body>
    </Html>
  );
}
