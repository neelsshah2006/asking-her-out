import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const router = useRouter();
  const EnterHandler = () => {
    toast.success("Woohooo!! I am really very excited!", { autoClose: 6000 });
    router.push("/happy");
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
          <span>♥</span>
          <br />I am very very Happy to see this.......
          <br />
          <span>♥</span>
        </div>
        <div>
          <Image
            src="/img4.png"
            alt="Description of image"
            width={280}
            height={200}
          />
        </div>
        <div className="text-center">Are you ready to go ahead?</div>
        <div className="flex flex-col justify-center items-center gap-5">
          <button
            className="px-3 py-2 rounded-lg border border-black hover:scale-150"
            onClick={() => {
              EnterHandler();
            }}
          >
            Enter ❤️
          </button>
          <div className="text-center text-lg">PS: You will Love it!</div>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </>
  );
}
