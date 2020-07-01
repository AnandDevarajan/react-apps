import React from "react";
import Item from "./Item";
//https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png
const Portfolio = () => {
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>

        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4 mb-5">
            <Item image="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png" />
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <Item image="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png" />
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <Item image="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png" />
          </div>

          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <Item image="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png" />
          </div>

          <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
            <Item image="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/safe.png" />
          </div>

          <div className="col-md-6 col-lg-4">
            <Item image="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
