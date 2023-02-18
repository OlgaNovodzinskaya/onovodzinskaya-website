import { Inter } from "@next/font/google";
import styles from "@web/styles/Home.module.css";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Real Estate App</p>
        </div>

        <div className={`${styles.center} prose`}>
          <h1>Find apartments fast & easily all over from Russia!</h1>
        </div>

        <div className={styles.grid}>
          <a
            href="https://t.me"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Telegram <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Contact me on Telegram</p>
          </a>

          <a
            href="https://instagram.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Instagram <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Contact me on Instagram</p>
          </a>

          <a
            href="https://facebook.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Facebook <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Contact me on Facebook</p>
          </a>

          <a
            href=":mailto"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Email <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Contact me on Email</p>
          </a>
        </div>
      </main>
    </>
  );
};

export default Home;
