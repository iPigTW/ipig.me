import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Head>
        <title>iPig's Bio</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta content="iPig's Bio" property="og:title" />
        <meta content="I'm a 13 years old programmer from Taiwan" property="og:description" />
        <meta content="https://ipig.me/ipig.png" property="og:image" />
        <meta content="#0047AB" data-react-helmet="true" name="theme-color" />
        <link rel="shortcut icon" href="/ipig.png" />
        
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
