import { React, useState } from "react";
import "../styles/About.css";
function About() {
  const [isHover, setIsHover] = useState(true);

  const handleHover = () => {
    setIsHover(!isHover);
    console.log("hgfhf");
  };
  return (
    <div className="relative z-10">
      <div className="box">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 590"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,600 C 0,600 0,300 0,300 C 75.42906217794572,280.1346616283064 150.85812435589145,260.26932325661284 223,285 C 295.14187564410855,309.73067674338716 363.9965647543801,379.05736860185505 438,365 C 512.0034352456199,350.94263139814495 591.1556166265888,253.501202335967 649,244 C 706.8443833734112,234.498797664033 743.3809687392649,312.93782205427686 802,356 C 860.6190312607351,399.06217794572314 941.3205084163517,406.74750944692545 1024,364 C 1106.6794915836483,321.25249055307455 1191.336997595328,228.0721401580213 1261,209 C 1330.663002404672,189.9278598419787 1385.3315012023359,244.96392992098936 1440,300 C 1440,300 1440,600 1440,600 Z"
            stroke="none"
            stroke-width="0"
            fill="#efd3db"
            fill-opacity="1"
            className={`transition-all duration-300 ease-in-out delay-150 ${
              isHover ? "path-0" : ""
            }`}
            transform="rotate(-180 720 300)"
          ></path>
        </svg>
      </div>
      <div className="absolute top-0 " onMouseEnter={() => handleHover()}>
        <div className="text-about">
          <p>
            I am a challenger by heart and builder by nature. Over the time I
            have spent time converting designs into{" "}
            <span className="font-bold">
              pixel-perfect, performant, accesible , and responsive
              applications/websites.
            </span>{" "}
            You can simply describe me as a front end addict.
          </p>

          <p className="mt-6">
            When I'm not at the computer, I'm just a bookworm with a knack for
            words and a heart that beats for music. I'm all about exploring new
            spots, jotting down stories, and grooving to tunes wherever the
            journey takes me.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
