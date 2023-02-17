import React from "react";
import Room from "./Room";
import Header from "./Header";
import HomeSlide from "./HomeSlide";

import RoomType from "./RoomType";
import AddressHomeStay from "./AddressHomeStay";
import BookingInstruction from "./BookingInstruction";
import Footer from "./Footer";
const TrangChu = () => {
  return (
    <div>
      <Header />
      <div>
        <HomeSlide />
      </div>
      <Room />
      <RoomType />
      <AddressHomeStay />
      <BookingInstruction />
      <Footer />
    </div>
  );
};
export default TrangChu;
