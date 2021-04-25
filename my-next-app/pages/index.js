import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export const getServerSideProps = async () => {
  const { getValue } = await import("../lib/redis");
  const curr = await getValue("curr");
  return {
    props: { curr },
  };
};

export default function Home({ curr: _curr }) {
  const [curr, setCurr] = useState(_curr);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next.js!</h1>

        <button
          onClick={async () => {
            const json = await fetch("/api/increment", {
              method: "POST",
            }).then((e) => e.json());
            setCurr(json.curr);
          }}
        >
          Click! {curr}
        </button>
      </main>
    </div>
  );
}
