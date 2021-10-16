import React from "react";
import heroSvg from "../../assets/img/hero.svg";

export default function Hero() {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">Crowd funding of projects with crypto</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              Connect your wallet and start a crypto crowd funding Project
            </h2>
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="text-center text-lg-start">
                <a
                  href="#about"
                  className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Start Fund Raiser</span>

                  <i className="bi bi-arrow-right"></i>
                </a>

                <a
                  href="#about"
                  className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Connect Wallet</span>

                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 hero-img"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src={heroSvg} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
