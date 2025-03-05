"use client";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const EnterHandler = () => {
    router.push("/yes");
  };
  return (
    <>
      <Head>
        <title>The Neel's Way!</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Love+Light&family=Love+Ya+Like+A+Sister&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/heart.png" />
      </Head>
      <div className="flex flex-col w-full h-full justify-center items-center text-center text-6xl gap-5">
        <div>Get Ready for Neel's Way of Proposal!<br/>😁😎</div>
        <button
          className="px-3 py-2 rounded-lg border border-black hover:scale-150"
          onClick={() => {
            EnterHandler();
          }}
        >
          Enter ❤️
        </button>
      </div>
    </>
  );
}
