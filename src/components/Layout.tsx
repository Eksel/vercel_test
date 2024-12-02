import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen w-full ">
      <Navbar />
      <div className="grow w-full conteiner flex flex-row justify-around  items-center">
        {children}
      </div>
      <Footer />
    </div>
  );
}
