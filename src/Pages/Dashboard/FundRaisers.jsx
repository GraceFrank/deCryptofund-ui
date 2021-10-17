import React from "react";
const fakeProjects = [
  {
    title: "Help Willam fight Cancer",
    description:
      "William Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
    target: 0.1,
    amountRaised: 0.002,
    createdAt: Date.now(),
    lastFundedAt: Date.now(),
    id: 1,
    donors: 2,
    imageSrc:
      "https://images.unsplash.com/photo-1518949142393-f1d68174c92a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9vcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Help Fight Poverty",
    description:
      "William Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
    target: 0.1,
    amountRaised: 0.002,
    createdAt: Date.now(),
    lastFundedAt: Date.now(),
    id: 1,
    donors: 2,
    imageSrc:
      "https://images.unsplash.com/photo-1629293360328-fc31e9e735a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

export default function FundRaisers({ projects = fakeProjects }) {
  const projectsDisplay = projects.map((project) => (
    <FundRaiser data={project} />
  ));

  return (
    <section id="fundRaisers" class="fundRaisers">
      <div class="container" data-aos="fade-up">
        <header class="section-header">
          <h2>Fundraisers</h2>
          <p>Your Projects</p>
        </header>

        <div class="row gy-4">{projectsDisplay}</div>
      </div>
    </section>
  );
}

function FundRaiser({ data }) {
  return (
    <div
      class="col-lg-3 col-md-6 d-flex align-items-stretch"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div class="member">
        <div class="member-img">
          <img src={data.imageSrc} class="img-fluid" alt="" />
        </div>
        <div class="member-info">
          <h4>{data.title}</h4>
          <span>Chief Executive Officer</span>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}
