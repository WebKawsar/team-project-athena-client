import React from "react";
import "./HeaderMain.css";
import headerImg from "../../../athena-design-resources/Illustration/header-img.png";
const HeaderMain = () => {
  return (
    <main className="container header-main mt-10">
      <div className="row">
        <div className="col-md-6">
          <h1>Florence agency</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            ratione sunt impedit animi voluptatem .
          </p>
          <button className="btn green-btn">See Pricing</button>
        </div>
        <div className="col-md-4  ">
          <img className="header-img" src={headerImg} alt="" />
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
