import React from "react";
import "../styles/Experience.css";
import mrikal from "../images/mrikal1.mp4";

export default function Experience({ props }) {
  console.log(props, "hjey");
  return (
    <div className="experience">
      <div className="">
        {props.workExperience.map((exp) => {
          return (
            <div className="grid grid-cols-2">
              <div class=" max-w-sm p-6 dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                  <span>({exp.duration})</span>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {exp.company}
                  </h5>
                  <h2>{exp.position}</h2>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {exp.description}
                </p>
                <a
                  href="/"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View Projects
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <iframe
                  style={{ background: "#FFFFFF" }}
                  src={mrikal}
                  frameborder="0"
                  width="fit-content"
                  height="350"
                  title="mrikal"
                  allowFullScreen
                  allowtransparency="true"
                  className="frame"
                ></iframe>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
