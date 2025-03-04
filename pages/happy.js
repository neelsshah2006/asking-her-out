import { useRouter } from "next/router";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const ourWorld = () => {
  const router = useRouter();
  setTimeout(() => {
    toast.success("My Sweet Message for you :>");
    router.push("/ourWorld");
  }, 10000);
  return (
    <>
      <video
        onLoad={() => {
          nextPage();
        }}
        src={"/video.mp4"}
        autoPlay
      ></video>
      <Toaster position="bottom-center" />
    </>
  );
};

export default ourWorld;
