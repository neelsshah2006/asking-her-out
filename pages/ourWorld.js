import { useRouter } from "next/router";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import Head from "next/head";

const ourWorld = () => {
  const router = useRouter();
  const click = () => {
    toast.success(
      "Woohooo!! Also reply me in chat, mujhe bhi toh pata chale....",
      { autoClose: 10000 }
    );
    router.push("/final");
  };
  const No = () => {
    toast.error("☹️ Why? Talk to me in chat for this... Please!!", {
      autoClose: 10000,
    });
  };
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
      <div className="world bg-pink-200 flex flex-col justify-center p-5 rounded-2xl max-w-[90vw] gap-2 text-xl">
        <span className="text-2xl text-left w-full">
          To My Dearest Priy Sakhi😘,
        </span>
        <div>
          Frankly, I always wanted a female best friend and having you is one of
          the best gifts I have!
        </div>
        <span>
          ❤️Tu j e ek che, jeni saathe hu koi pan vaat share kari shaku chu…
          sari ke kharab, jevi pan hoi.❤️
        </span>
        <div>🤗That bond between us is truly awesome..</div>
        <div>
          I cherish every conversation, every inside joke, and every silent
          moment where words aren't needed, yet we understand each other
          perfectly.
        </div>
        <div>
          You have been my closest friend, my confidant, my Param Sakhi🤗, but
          somewhere along the way, my heart started beating a little differently
          for you.
        </div>
        <div>
          I don’t know the exact moment it happened— All I know is that{" "}
          <u>
            my world🌏 feels brighter when you’re around, and my heart❤️ feels
            at home with you.
          </u>
        </div>
        <div>
          I’ve always cherished our bond, and I never want to lose what we have.
          But I also can’t hide the truth any longer—
        </div>
        <span className="text-3xl w-full text-center">I love you.</span>
        <div>
          {" "}
          Not just as my best friend, but as the one who has my heart
          completely.
        </div>
        <span className="text-3xl w-full text-center">
          Will you accept my Proposal 😘?
        </span>
        <div className="flex justify-center items-center gap-3">
          <button
            className="px-3 py-2 rounded-lg border border-black"
            onClick={() => {
              click();
            }}
          >
            Yesssss!! ❤️
          </button>
          <button
            className="finalNo px-3 py-2 rounded-lg border border-black"
            onClick={() => {
              No();
            }}
          >
            No....☹️
          </button>
        </div>
        <div className="w-full text-center text-sm">
          PS: This is the last and final Ask from me!
        </div>
      </div>
      <Toaster position="bottom-center" />
    </>
  );
};

export default ourWorld;
