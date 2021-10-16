import React from "react";
import Nav from "../../components/Nav";
import About from "./About";
import Hero from "./Hero";
import TopFundRaisers from "./TopFundRaisers";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <main id="main">
        <About />
        <TopFundRaisers />
      </main>
    </>
  );
}
