import React, { useEffect, useState } from "react";
import FAQ from './FAQ'

const FAQSection = () => {
    const [activeService, setFAQItem] = useState(null);

    const handleFAQClick = (label) => {
        setFAQItem(activeService !== label ? label : null);
    };

    return (
        <div className="flex flex-col  md:px-40 py-10 w-full justify-center items-center">
            <ul className="w-11/12 lg:w-1/2">
                {FAQ.map(({ question, answer }) => (
                    <li key={question} className="mb-4">
                        {activeService !== question && (
                            <div
                                className={`p-4 border w-full border-gray-600/50 cursor-pointer ${activeService === question
                                    ? "bg-gray-600/25"
                                    : "bg-black hover:bg-gray-600/25"
                                    } transition duration-300 ease-in-out flex items-center`}
                                onClick={() => handleFAQClick(question)}
                            >
                                {getIcon("lock")}
                                <div className="uppercase font-bold leading-[1.2em] text-lg ml-2 heading-text">
                                    {question}
                                </div>
                            </div>
                        )}
                        {activeService === question && (
                            <div
                                className="transition-all duration-500 ease-in-out overflow-hidden p-4 border border-gray-600/25 mt-2"
                                style={{
                                    maxHeight: activeService === question ? "1000px" : "0",
                                    opacity: activeService === question ? 1 : 0,
                                }}
                            >
                                <h2 className="leading-none font-bold uppercase text-4xl lg:text-5xl mb-4 fade-in heading-text">
                                    {question}
                                </h2>
                                <p className="primary-text text-gray-400 fade-in">
                                    {answer}
                                </p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
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

export default FAQSection;
