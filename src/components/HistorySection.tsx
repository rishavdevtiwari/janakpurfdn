
import React from "react";

const timelineEvents = [
  {
    year: "2020",
    title: "Early Beginnings",
    description: "Ranjana Jha begins taking legal action against child marriages and domestic violence cases in Janakpur.",
  },
  {
    year: "2021",
    title: "First Legal Interventions",
    description: "Successfully represented several women in domestic violence cases, setting precedents for future legal work.",
  },
  {
    year: "2022",
    title: "Community Awareness Program",
    description: "Launched educational campaigns in rural areas to inform women of their legal rights and protections.",
  },
  {
    year: "2023",
    title: "Team Formation",
    description: "Assembled a core team of legal and social work professionals committed to the foundation's mission.",
  },
  {
    year: "2024",
    title: "Foundation Officially Established",
    description: "Janakpur Foundation was formally registered as a non-profit organization in January 2024.",
  },
  {
    year: "2024",
    title: "First Major Outreach Event",
    description: "Organized a large-scale community awareness program with local authorities on women's rights and child protection.",
  },
  {
    year: "2024",
    title: "Current Initiatives",
    description: "Expanding programs to more villages in the Terai region while strengthening partnerships with other organizations.",
  },
];

const HistorySection = () => {
  return (
    <section id="history" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Our Journey</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Though formally established in 2024, the work of Janakpur Foundation has deeper roots through the efforts of our founder, Ranjana Jha.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-start md:items-center gap-4 mb-12 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/3 text-center md:text-right px-4">
                <div className={`text-3xl font-bold ${
                  index % 2 === 1 ? 'md:text-left' : 'md:text-right'
                } text-foundation-purple`}>
                  {event.year}
                </div>
              </div>
              
              <div className="relative flex items-center justify-center">
                <div className="h-full absolute left-4 md:left-0 md:top-10 w-0.5 bg-foundation-purple"></div>
                <div className="z-10 w-8 h-8 rounded-full bg-foundation-purple flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3 pl-8 md:pl-4 pr-4">
                <h3 className="text-xl font-bold text-foundation-darkPurple">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
