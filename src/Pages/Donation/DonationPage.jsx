import React from "react";
import Nav from "../../components/Nav";
import DonateCard from "./DonateCard";
import DonateDetails from "./DonateDetails";

export default function DonatePage() {
  return (
    <>
      <Nav />
      <section id="pricing" class="pricing">
        <div class="container" data-aos="fade-up">
          <header class="section-header">
            <h2>Pricing</h2>
            <p>Check our Pricing</p>
          </header>
          <div className="d-flex justify-content-between d-flex align-items-start">
            <DonateDetails />

            <DonateCard />
          </div>
        </div>
      </section>
    </>
  );
}
