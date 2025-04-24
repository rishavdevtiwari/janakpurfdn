
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const History = () => {
  const timelineEvents = [
    {
      year: "2020",
      title: "First Legal Actions",
      description: "Ranjana Jha began taking on cases of domestic violence and child marriage in Janakpur, using her legal expertise to help vulnerable women and children."
    },
    {
      year: "2021",
      title: "Community Outreach Begins",
      description: "Started conducting small-scale awareness programs about women's legal rights and the harms of child marriage in rural communities."
    },
    {
      year: "2022",
      title: "Expanding Legal Support",
      description: "Formed partnerships with other legal professionals to expand the scope and reach of legal aid for women facing discrimination and violence."
    },
    {
      year: "2023",
      title: "Core Team Formation",
      description: "Assembled a dedicated team of professionals including Lal Chandra Jha, Saroj Devi Jha, Rahumat Rahyan, Rekha Sah, and Krishna Kumar Jha to formalize the foundation's work."
    },
    {
      year: "2024",
      title: "Official Foundation Inauguration",
      description: "Janakpur Foundation was officially registered as a non-profit organization, giving formal structure to the ongoing work against child marriage and domestic violence."
    },
    {
      year: "2024",
      title: "First Major Awareness Campaign",
      description: "Conducted a large-scale awareness program with local authorities on women's rights and child protection laws, reaching hundreds of community members."
    },
    {
      year: "2024",
      title: "Women's Empowerment Workshop",
      description: "Organized a series of workshops focused on women's economic empowerment and legal rights education in multiple villages."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-foundation-lightGray to-white">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-6xl text-foundation-darkPurple text-center mb-6">Our History</h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Though officially inaugurated in 2024, the Janakpur Foundation's work has deep roots in the personal advocacy of our founder, Ranjana Jha.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-foundation-purple h-full"></div>
            
            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-16 h-16 bg-foundation-purple rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {event.year}
                    </div>
                  </div>
                  
                  <div className={`ml-24 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:ml-auto'
                  }`}>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                      <h3 className="text-2xl font-playfair text-foundation-darkPurple mb-3">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default History;
