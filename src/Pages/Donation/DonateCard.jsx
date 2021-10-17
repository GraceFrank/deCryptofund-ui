import React, { useContext } from "react";
import { AccountContext } from "../../context/AccountContext";

export default function DonateCard({
  donors = 20,
  amountRaised = 500,
  target = 5000,
  title = "Help Williams Fight Cancer",
  id = "0x7AE89988990DAE99000",
}) {
  const [account, connectWallet] = useContext(AccountContext);

  async function handleDonate() {}

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
            <button
              type="button"
              onClick={account ? handleDonate : connectWallet}
              class="btn btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
            >
              <span>{account ? "Donate" : "Connect"}</span>
              <i class="bi bi-arrow-right"></i>
            </button>
          </ul>
          {!account && <p>Connect your wallet to make a donation</p>}
          <a
            href={`https://twitter.com/intent/tweet?&text=${title}&url=${process.env.REACT_APP_APP_BASE_URL}donate/?id=${id}`}
            target="_blank"
            className="btn-buy"
          >
            share <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
