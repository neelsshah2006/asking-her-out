"use client";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

const yes = () => {
  const router = useRouter();
  const YesHandler = () => {
    toast.success("Yayyyyy!! ♥");
    router.push("/yes1");
  };
  const NoHandler = () => {
    toast.error("Why? Please don't do this to me..😭");
    router.push("/no1");
  };
  return (
    <>
      <>
        <Head>
          <title>Ready for the Climax</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Love+Light&family=Love+Ya+Like+A+Sister&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/heart.png" />
        </Head>
        <div className="flex flex-col justify-center items-center gap-10 text-5xl bg-pink-200 px-10 py-15 rounded-2xl">
          <div className="text-center">
            So Can You be mine <span className="text-6xl">Madam ji ♥</span> ?
          </div>
          <div>
            <Image
              src="/img1.jpg"
              alt="Description of image"
              width={200}
              height={100}
              className=""
            />
          </div>
          <div className="flex justify-center items-center gap-5">
            <button
              className="px-3 py-2 rounded-lg border border-black w-[150px] hover:scale-150"
              onClick={() => {
                YesHandler();
              }}
            >
              Yes
            </button>
            <button
              className="px-3 py-2 rounded-lg border border-black w-[150px]"
              onClick={() => {
                NoHandler();
              }}
            >
              No
            </button>
          </div>
        </div>
        <Toaster position="bottom-center" />
      </>
      );
    </>
  );
};

export default yes;
