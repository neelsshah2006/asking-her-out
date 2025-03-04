import React from "react";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const final = () => {
  return (
    <>
      <Head>
        <title>The Proposal!💕</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@10..72,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/heart.png" />
      </Head>
      <div className="world text-center flex flex-col justify-center items-center gap-2 bg-pink-200 px-10 py-15 rounded-2xl">
        <div className="text-3xl">
          Hey... I am very happy to see us together..😘💕
        </div>
        <div className="text-3xl">
          Share this with me as well.. Zara Whatsapp par mujhe bhi batao --- Me
          bhi toh khush ho jau😁
        </div>
      </div>
      <img
        className="party w-50 h-50 fixed bottom-0 left-0"
        src="/party.gif"
      ></img>
      <Toaster position="bottom-center" />
    </>
  );
};

export default final;
