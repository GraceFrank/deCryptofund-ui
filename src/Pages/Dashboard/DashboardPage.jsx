import React from "react";
import Nav from "../../components/Nav";
import FundRaisers from "./FundRaisers";
import Header from "./Header";

export default function DashboardPage() {
  return (
    <>
      <Nav />
      <section id="fundRaisers" class="fundRaisers">
        <Header />
        <FundRaisers />
      </section>
    </>
  );
}
