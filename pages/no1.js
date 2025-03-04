import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const router = useRouter();
  const YesHandler = () => {
    toast.success("Yayyyyy!! ♥");
    router.push("/yes");
  };

  const NoHandler = () => {
    toast.error("Nope!! You Can't say this to me!! 🙌");
    let button = document.querySelector(".No");
    button.classList.add("absolute");
    button.classList.add("bottom-0");
    button.classList.add("opacity-0");
  };
  return (
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
          Why?😭 <br />
          Don't you like me?😭
        </div>
        <div>
          <Image
            src="/img3.jpg"
            alt="Description of image"
            width={200}
            height={100}
          />
        </div>
        <div className="flex justify-center items-center gap-5">
          <button
            className="px-3 py-2 rounded-lg border border-black w-[150px] hover:scale-150"
            onClick={() => {
              YesHandler();
            }}
          >
            I like you
          </button>
          <button
            className="No px-3 py-2 rounded-lg border border-black w-[150px]"
            onFocus={() => {
              NoHandler();
            }}
          >
            No, I don't
          </button>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </>
  );
}
