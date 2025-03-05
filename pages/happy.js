"use client";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const ourWorld = () => {
  const router = useRouter();
  setTimeout(() => {
    toast.success("My Sweet Message for you :>");
    router.push("/final");
  }, 10000);
  return (
    <>
      <Head>
        <title>Happy..!😁</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/heart.png" />
      </Head>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <video
          onLoad={() => {
            nextPage();
          }}
          src={"/video.mp4"}
          autoPlay
        ></video>
        <h1 className="world text-3xl">My Happiness after this..🤗😁</h1>
        <p>Wait for 10 secs..</p>
        <Toaster position="bottom-center" />
      </div>
    </>
  );
};

export default ourWorld;
