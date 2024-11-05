import React from "react";
import classes from "./style.module.scss";
import Image from "next/image";
import urlImage from "../../../../../../../public/assets/images/teammember1.jpg";

type Props = {};

const TeamItems = (props: Props) => {
  return (
    <div
      className={`${classes["cart"]}  w-full  grid lg:grid-cols-3 md:grid-cols-3 xs:grid-col-1 h-100 `}
    >
      <div className={`${classes?.["cart-item"]} `}>
        <Image width={360} height={409} alt="team-member" src={urlImage} />
      </div>
      <div className={`${classes?.["cart-item"]} `}>
        <Image width={360} height={409} alt="team-member" src={urlImage} />
      </div>
      <div className={`${classes?.["cart-item"]} `}>
        <Image width={360} height={409} alt="team-member" src={urlImage} />
      </div>
    </div>
  );
};

export default TeamItems;
