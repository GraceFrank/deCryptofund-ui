import React, { useState } from "react";

export default function Header() {
  return (
    <>
      <header class="section-header">
        <div className="d-flex justify-content-around">
          <div>
            <h2>Fundraisers</h2>
            <p>Your Projects</p>
          </div>
          <a
            className="btn btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
            href="/create"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Create Fund Raiser
          </a>
        </div>
      </header>
    </>
  );
}
