import React from "react";
import { faClock, faPhone , faBanSmoking , faFax ,faShieldDog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hotelinfo() {
  return (
    <div className="text-black ">
      <div className="px-24 pt-4 pb-5">
        <h4 className="text-4xl">Hotel Information :</h4>
      </div>
      <div className="px-24 text-xl flex-col font-normal  flex gap-7 pb-5">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 ">
              <FontAwesomeIcon
                className="h-3 sm:h-4 md:h-5 mt-[6px] text-yellow-600 cursor-pointer"
                icon={faClock}
              />
              <h3 className=" text-2xl  ">CHECK-IN</h3>
            </div>
            <h3 className="ml-7">04 : 00 PM</h3>
          </div>
          <div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <FontAwesomeIcon
                  className="h-3 sm:h-4 md:h-5 mt-[6px] text-yellow-600 cursor-pointer"
                  icon={faPhone}
                />
                <h3 className=" text-2xl ">PHONE NUMBER</h3>
              </div>
              <h3 className="ml-7">+91 9007062180</h3>
            </div>
          </div>
          <div className="flex flex-col gap-1">
          <div className="flex gap-1">
          <FontAwesomeIcon
              className="h-3 sm:h-4 md:h-5 text mt-[6px] text-yellow-600 cursor-pointer"
              icon={faBanSmoking}
            />
            <h3 className=" text-2xl ">NO SMOKING</h3>
          </div>
          <h3 className="ml-7">100% Smoke Free</h3>
        </div>
        </div>
        <div className="flex justify-between ">
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <FontAwesomeIcon
              className="h-3 sm:h-4 md:h-5 mt-[6px] text-yellow-600 cursor-pointer"
              icon={faClock}
            />
            <h3 className=" text-2xl ">CHECK-OUT</h3>
          </div>
          <h3 className="ml-7">11 : 00 AM</h3>
        </div>
        <div className="flex flex-col mr-11 gap-1">
          <div className="flex gap-1">
            <FontAwesomeIcon
              className="h-3 sm:h-4 md:h-5 mt-[6px] text-yellow-600 cursor-pointer"
              icon={faFax}
            />
            <h3 className=" text-2xl ">FAX NUMBER</h3>
          </div>
          <h3 className="ml-7">+91 9007062180</h3>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <FontAwesomeIcon
              className="h-3 sm:h-4 md:h-5 mt-[6px] text-yellow-600 cursor-pointer"
              icon={faShieldDog}
            />
            <h3 className=" text-2xl ">PET-POLICY</h3>
          </div>
          <h3 className="ml-7">Pet Allowed: Yes</h3>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Hotelinfo;
