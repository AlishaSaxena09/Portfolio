import React from "react";
import profile from "../images/Alisha.jpg";
import "../styles/Hero.css";

function Hero() {
  return (
    <main className="main flex items-center justify-center gap-12 pb-12">
      <div className="wave-container">
        <div className="wave"></div>
        <img className="profile" src={profile} alt="profile" />
      </div>
      <div className="text-profile text-xl font-semi-bold">
        <h1 className=" text-8xl font-bold text-right tracking-wide">
          Hello
          <br /> <span className="text-type">I'm Alisha</span>
        </h1>
        <p className="mt-6 text-md w-7/12">
          <span className="text-lg font-bold">I'm a front-end developer</span>{" "}
          who constantly seeks out innovative solutions to every day problems.
        </p>
      </div>
    </main>
  );
}

export default Hero;
