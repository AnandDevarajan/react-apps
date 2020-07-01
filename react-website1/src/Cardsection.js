import React from "react";
import Card from "./Card";

const Cardsection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <div className="col-md-4 col-sm-1">
            <Card
              title="Brussels"
              image="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              buttonText="Go to Brussels"
            />
          </div>
          <div className="col-md-4 col-sm-1">
            <Card
              title="Tokyo"
              image="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              buttonText="Go to Tokyo"
            />
          </div>
          <div className="col-md-4 col-sm-1">
            <Card
              title="Paris"
              image="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              buttonText="Go to Paris"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cardsection;
