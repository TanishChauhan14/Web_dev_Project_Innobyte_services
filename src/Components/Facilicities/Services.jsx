import React from "react";
import {
  faSquareParking,
  faWifi,
  faShieldDog,
  faUtensils,
  faClock,
  faPersonMilitaryRifle,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import {
   faMap
  } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Services() {
  return (
    <div className="flex h-4/5 gap-10 flex-col justify-evenly">
      <div className="flex flex-col gap-2">
        <div className="flex justify-center">
          <h1 className="text-black text-5xl font-normal underline underline-offset-8 decoration-2 font-serif decoration-yellow-600">
            Services
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-black font-medium">
            Discover unparalleled luxury and personalized service at our Guest
            House, where every moment is crafted to exceed your expectations...
          </p>
        </div>
      </div>
      <div className="flex flex-col h-5/6 justify-evenly bg-blend-darken brightness-95 bg-fixed" id="Services">
        <div className="flex flex-col gap-2">
          <div className="flex justify-around">
            <FontAwesomeIcon
              className="h-6 sm:h-7 md:h-8 cursor-pointer"
              icon={faSquareParking}
            />
            <FontAwesomeIcon
              className="h-6 sm:h-7 md:h-8 cursor-pointer"
              icon={faWifi}
            />
            <FontAwesomeIcon
              className="h-6 sm:h-7 md:h-8 cursor-pointer"
              icon={faShieldDog}
            />
            <FontAwesomeIcon
              className="h-6 sm:h-7 md:h-8 cursor-pointer"
              icon={faUtensils}
            />
          </div>
          <div className="flex justify-around">
            <h4 className="h-6 sm:h-7 md:h-8 cursor-pointer">Free Parking</h4>
            <h4 className="h-6 sm:h-7 md:h-8 cursor-pointer">Free Wifi</h4>
            <h4 className="h-6 sm:h-7 md:h-8 cursor-pointer">Pet Friendly</h4>
            <h4 className="h-6 sm:h-7 md:h-8 cursor-pointer">Restaurant</h4>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-around">
            <FontAwesomeIcon
              className="h-6 sm:h-7 md:h-8 cursor-pointer"
              icon={faClock}
            />
            <FontAwesomeIcon
              className="h-6 sm:h-7 md:h-8 cursor-pointer"
              icon={faPersonMilitaryRifle}
            />
            <FontAwesomeIcon
              className="h-6 sm:h-7 md:h-8 cursor-pointer"
              icon={faMap}
            />
            <FontAwesomeIcon
              className="h-6 sm:h-7 md:h-8 cursor-pointer"
              icon={faLocationDot}
            />
          </div>
          <div className="flex justify-around">
            <h4 className="h-6 sm:h-7 md:h-8 cursor-pointer">24-Hours Front Desk</h4>
            <h4 className="h-6 sm:h-7 md:h-8 cursor-pointer">High Class Security</h4>
            <h4 className="h-6 sm:h-7 md:h-8 cursor-pointer">Tourist Guide Support</h4>
            <h4 className="h-6 sm:h-7 md:h-8 cursor-pointer">Downtown Location</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
