import React from "react";
import Container from "../../components/Container";
import Header from "./Header";
import HouseImage from "./HouseImage";
import HouseInfo from "./HouseInfo";
import HouseReservation from "./HouseReservation";

const HouseDetails = () => {
  return (
    <Container>
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col gap-8">
          <Header></Header>
          <HouseImage></HouseImage>
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-56 mt-6">
            <HouseInfo></HouseInfo>
            <div className="mb-10 md:col-span-2 m-auto order-first md:order-last">
            <HouseReservation></HouseReservation>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HouseDetails;
