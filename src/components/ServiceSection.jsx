import React, { useEffect, useState } from "react";
import Services from "./Services";

const ServiceSection = () => {
    const [activeService, setActiveService] = useState(null);
    const [isDetailVisible, setIsDetailVisible] = useState(false);

    useEffect(() => {
        setIsDetailVisible(!!activeService);
    }, [activeService]);

    const handleServiceClick = (label) => {
        setActiveService(activeService !== label ? label : null);
    };

    return (
        <div className="flex flex-row flex-wrap px-4 md:px-40 py-10 text-white w-full">
            <div
                className={`text-balance transition-all duration-300 ease-in-out ${isDetailVisible
                    ? "w-full lg:w-1/6 lg:grid-cols-1"
                    : "w-full lg:grid-cols-4"
                    }`}
            >
                <ul
                    className={`grid ${isDetailVisible
                        ? "lg:grid-cols-1 grid-cols-2"
                        : "grid-cols-2 md:grid-cols-5"
                        } gap-1`}
                >
                    {Services.map(({ label, icon }) => (
                        <li
                            key={label}
                            className={`p-4 border w-full border-gray-600/50 cursor-pointer ${activeService === label
                                ? "bg-gray-600/25"
                                : "bg-black hover:bg-gray-600/25"
                                } transition duration-300 ease-in-out flex items-center`}
                            onClick={() => handleServiceClick(label)}
                        >
                            {getIcon(icon)}
                            <div className="uppercase font-bold leading-[1.2em] text-lg ml-2 heading-text">
                                {label}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {isDetailVisible && (
                <div
                    className="flex-grow lg:w-3/4 transition-all duration-500 ease-in-out overflow-hidden lg:-16 p-4 mt-4 ml-0 border border-gray-600/25 lg:ml-4 lg:mt-0 h-[80vh]"
                    style={{
                        maxHeight: isDetailVisible ? "100%" : "0",
                        opacity: isDetailVisible ? 1 : 0,
                    }}
                >
                    <h2 className="leading-none font-bold uppercase text-4xl lg:text-5xl mb-4 fade-in heading-text">
                        {activeService}
                    </h2>
                    <p className="text-xl primary-text text-gray-400 fade-in">
                        {Services.find((service) => service.label === activeService)?.desc}
                    </p>
                </div>
            )}
        </div>
    );
};
const getIcon = (name) => {
    if (name in icons) {
        return icons[name];
    }
    return <svg />;
};

const icons = {
    lock: (
        <svg
            width="20"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1 11C1 9.11438 1 8.17157 1.58579 7.58579C2.17157 7 3.11438 7 5 7H13C14.8856 7 15.8284 7 16.4142 7.58579C17 8.17157 17 9.11438 17 11V13C17 15.8284 17 17.2426 16.1213 18.1213C15.2426 19 13.8284 19 11 19H7C4.17157 19 2.75736 19 1.87868 18.1213C1 17.2426 1 15.8284 1 13V11Z"
                stroke="#444"
                strokeWidth="2"
            />
            <path
                d="M13 6V5C13 2.79086 11.2091 1 9 1V1C6.79086 1 5 2.79086 5 5V6"
                stroke="#444"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <circle cx="9" cy="13" r="2" fill="#444" />
        </svg>
    ),
};

export default ServiceSection;
