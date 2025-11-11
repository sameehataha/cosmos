import React from "react";

const Background = () => {
  return (
    <div className="w-full z-[2] fixed h-screen">
      <div className=" absolute top-[5%] bg-zinc-400 w-full py-5 flex justify-center text-zinc-800 text-[20px]">
        Facts
      </div>
      <h1 className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[10vw] leading-none tracking-tight">
        Cosmos.
      </h1>
    </div>
  );
};

export default Background;
