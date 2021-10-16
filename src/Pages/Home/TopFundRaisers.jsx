import React from "react";
import topFundRaiser1 from "../../assets/img/topFunding1.jpg";
import topFundRaiser2 from "../../assets/img/topFunding2.jpg";
import topFundRaiser3 from "../../assets/img/topFunding3.jpg";

export default function TopFundRaisers() {
  const topFundRaisers = [
    {
      name: "",
      description: "",
      totalFundingReceived: 1050,
      target: 50000,
    },
  ];
  return (
    <section id="topFundRaisers" className="values">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Top Fund Raisers</h2>
          <p>Looking For a Cause to Fund? </p>
        </header>

        <div className="row">
          <div className="col-lg-4">
            <div className="box" data-aos="fade-up" data-aos-delay="200">
              <img src={topFundRaiser1} className="img-fluid" alt="" />
              <h3>Ad cupiditate sed est odio</h3>
              <p>
                Eum ad dolor et. Autem aut fugiat debitis voluptatem
                consequuntur sit. Et veritatis id.
              </p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box" data-aos="fade-up" data-aos-delay="400">
              <img src={topFundRaiser2} className="img-fluid" alt="" />
              <h3>Voluptatem voluptatum alias</h3>
              <p>
                Repudiandae amet nihil natus in distinctio suscipit id.
                Doloremque ducimus ea sit non.
              </p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box" data-aos="fade-up" data-aos-delay="600">
              <img src={topFundRaiser3} className="img-fluid" alt="" />
              <h3>Fugit cupiditate alias nobis.</h3>
              <p>
                Quam rem vitae est autem molestias explicabo debitis sint. Vero
                aliquid quidem commodi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
