import React from "react";
import image from "./images/header.jpg";

export default function FundingDetails() {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="foundation image" />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">Mantle Education Foundation</h5>
        </div>
        <p className="card-text">
          Seeks to increase access to modern teaching and learning materials for
          students who attend Livingstonia Community School. The school serves
          1,852 students who live in a very poor area. The ratio of students to
          textbooks is 1:20. The grant proposal requests support to purchase 160
          textbooks for students in grades 1-8.
        </p>
      </div>
    </div>
  );
}
