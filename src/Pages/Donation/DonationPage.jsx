import React from "react";
import Nav from "../../components/Nav";
import DonateCard from "./DonateCard";
import DonateDetails from "./DonateDetails";
import Donors from "./Donors";

export default function DonatePage() {
  return (
    <>
      <Nav />
      <section id="pricing" class="pricing">
        <div class="container mt-5" data-aos="fade-up">
          <header class="section-header">
            <h2>Donation</h2>
            <p>Help William Fight Cancer</p>
          </header>
          <div className="d-flex justify-content-between d-flex align-items-start">
            <div>
              <DonateDetails />
              <Donors />
            </div>

            <DonateCard />
          </div>
        </div>
      </section>
    </>
  );
}
