import React from "react";
import donationImage from "../../assets/img/donoation.jpg";

export default function DonateDetails() {
  return (
    <section id="team" class="team">
      <div class="container" data-aos="fade-up">
        <div class="col-lg-9 col-md-9" data-aos="fade-up" data-aos-delay="300">
          <div class="member">
            <div class="member-img">
              <img src={donationImage} class="img-fluid" alt="" />
              <div class="social">
                <a href="">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            <div class="member-info">
              <h4>William Anderson</h4>
              <span>Cancer Victim</span>
              <p>
                Vero omnis enim consequatur. Voluptas consectetur unde qui
                molestiae deserunt. Voluptates enim aut architecto porro
                aspernatur molestiae modi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
