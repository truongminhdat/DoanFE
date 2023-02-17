import React, { useCallback, useEffect, useState } from "react";
import "./featureProperty.css";
import Logo from "../../../assets/hotelsontra.png";
import { getlimitHotel } from "../../../services/hotelService";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeatureProperty = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [users, setUsers] = useState([]);

  const fetch = useCallback(async () => {
    const fetchUser = async () => {
      const { data } = await getlimitHotel();
      if (data) {
        setUsers(data.hotels);
      }
    };
    fetchUser();
  }, [users]);
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="fp">
      {users.map((user) => (
        <div className="fpItem" key={user.id}>
          <img src={user.url} className="img-fluid" />
          <span className="fpName">{user.name}</span>
          <span className="fpCity">{user.city}</span>
          <span className="fpPrice">{user.address}</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Đánh giá</span>
          </div>

          <div className="fp">
            {users.map((user) => (
              <div className="fpItem" key={user.id}>
                <img src={user.url} className="img-fluid" />
                <span className="fpName">{user.name}</span>
                <span className="fpCity">{user.city}</span>
                <span className="fpPrice">{user.address}</span>
                <div className="fpRating">
                  <button>8.9</button>
                  <span>Đánh giá</span>
                </div>
              </div>
            ))}
          </div>

          <div className="fp">
            {users.map((user) => (
              <div className="fpItem" key={user.id}>
                <img src={user.url} className="img-fluid" />
                <span className="fpName">{user.name}</span>
                <span className="fpCity">{user.city}</span>
                <span className="fpPrice">{user.address}</span>
                <div className="fpRating">
                  <button>8.9</button>
                  <span>Đánh giá</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default FeatureProperty;
