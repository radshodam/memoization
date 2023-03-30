import Head from "next/head";
import Image from "next/image";
import { Inter ,Exo } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="memoization" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>

        <h1 className="main">
          lorem lorem lorem 
        </h1>
      </div>
    </>
  );
}
