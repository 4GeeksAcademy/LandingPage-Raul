 import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  return (
    <div className="text-center">
      <Navbar />
      <Jumbotron />

      <div className="container mt-4">
        <div className="row g-4 justify-content-center">
          <Card
            title="Jeep"
            text="Rendimiento, libertad y aventura en cada kilómetro."
            imgUrl="https://driverevel.com/_next/image?url=https%3A%2F%2Frevel-car-models.s3.eu-west-1.amazonaws.com%2Fpro%2F65145d3ea8026ec0d893da7b%2F%25233e3d3d%2F1695921630449.jpg&w=1200&q=100"
            buttonUrl="#"
            buttonLabel="Solicita tu Oferta"
          />
          <Card
            title="Mercedes Benz"
            text="Lujo, innovación y elegancia para cada día."
            imgUrl="https://driverevel.com/_next/image?url=https%3A%2F%2Frevel-car-models.s3.eu-west-1.amazonaws.com%2Fpro%2F66e98017ad0bac0de9b19cbe%2F%252354534f%2F1741944898296.jpg&w=1200&q=100"
            buttonUrl="#"
            buttonLabel="Solicita tu Oferta"
          />
          <Card
            title="Mazda"
            text="Diseño japonés con alma deportiva."
            imgUrl="https://driverevel.com/_next/image?url=https%3A%2F%2Frevel-car-models.s3.eu-west-1.amazonaws.com%2Fpro%2F67c5a8ab80de03421c670211%2F%2523fafafa%2F1744372630640.jpg&w=1200&q=100"
            buttonUrl="#"
            buttonLabel="Solicita tu Oferta"
          />
          <Card
            title="Cupra"
            text="Pasión, potencia y tecnología en un solo modelo."
            imgUrl="https://driverevel.com/_next/image?url=https%3A%2F%2Frevel-car-models.s3.eu-west-1.amazonaws.com%2Fpro%2F6823588fe7cf53f4301bd640%2F%2523373938%2F1747147021784.jpg&w=1200&q=100"
            buttonUrl="#"
            buttonLabel="Solicita tu Oferta"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
