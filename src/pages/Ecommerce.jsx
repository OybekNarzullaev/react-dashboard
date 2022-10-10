import React from "react";
import { Button } from "../components";
import { earningData } from "../data/dummy";
import MainImg from "../data/main.png";

const Ecommerce = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${MainImg})` }}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-xl">$63,448.72</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              size="md"
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-1 m-3">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`ml-2 text-sm text-${item.pcColor}`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* new section */}
      <div className="flex flex-wrap justify-center gap-10">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"></div>
      </div>
    </div>
  );
};

export default Ecommerce;
