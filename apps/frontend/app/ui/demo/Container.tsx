"use client";

import Image from "next/image";
import React, { useState } from "react";

// Define the types for the props and state
type Feature = {
  title: string;
  description: string;
  id: number;
  image: any;
};

type ContainerProps = {
  features: Feature[];
};

const STRAPI_URL = "http://localhost:1337";

const Container: React.FC<ContainerProps> = ({ features }) => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(
    features[0]
  );

  const handleFeatureClick = (feature: Feature) => {
    setSelectedFeature(feature);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="grid relative grid-cols-1 md:grid-cols-2">
          <div></div>
          <div className="absolute right-[30%] translate-x-[0%,-30%] bg-red-600 bg-opacity-80 text-white rounded-full flex flex-col justify-center items-start text-start p-12 h-52 w-52  md:w-72 md:h-72 lg:w-96 lg:h-96">
            {selectedFeature && (
              <>
                <h2 className="md:text-xl text-sm mb-4">
                  {selectedFeature.title}
                </h2>
                <p className="md:text-xl md:flex hidden text-sm">
                  {selectedFeature.description}
                </p>
              </>
            )}
          </div>
          <div className="lg:w-96  md:w-72 ml-24 md:ml-0 w-52">
            {selectedFeature && (
              <img
                src={STRAPI_URL + selectedFeature.image.url} // Adjust the path as needed
                alt={selectedFeature.title}
                className="rounded-full lg:w-96 lg:h-96  md:w-72 md:h-72 h-52 w-52 object-cover "
              />
            )}
          </div>
        </div>
        <div className="flex items-center justify-center mt-8  md:mt-0 lg:justify-center md:justify-end">
          <div className="flex md:w-[60%] w-full  flex-col gap-3">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`py-2 px-2 text-center flex justify-between items-start md:text-right cursor-pointer rounded-l-full ${
                  selectedFeature?.id === feature.id
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => handleFeatureClick(feature)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"
                    />
                  </g>
                </svg>
                <p>{feature.title} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
