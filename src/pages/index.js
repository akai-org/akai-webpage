import Head from "next/head";
import Button from "../components/Button";

export default function Home() {
  return (
    <main>
      <Head>
        <title>AKAI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button>test button</Button>
    </main>
  );
}
