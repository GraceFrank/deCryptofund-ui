import React from "react";

export default function DonateCard({
  donors = 20,
  amountRaised = 500,
  target = 5000,
}) {
  return (
    <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
      <div className="box" style={{ background: "#4154f1", height: "60vh" }}>
        <div className="box" style={{ height: "#4154f1" }}>
          {/* <span className="featured">Featured</span> */}
          <h3 style={{ color: "#4154f1" }}>Donate</h3>
          <div className="price mb-2">
            ${amountRaised}
            <span> out of ${target} raised.</span>
          </div>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style={{ width: (amountRaised / target) * 100 }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div>
            <i class="ri-line-chart-line"></i>
            {donors} donors
          </div>
          <ul>
            <a
              href="#about"
              class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
            >
              <span>Donate</span>
              <i class="bi bi-arrow-right"></i>
            </a>
          </ul>
          <a href="#" className="btn-buy">
            share <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
