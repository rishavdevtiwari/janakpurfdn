
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Legal Aid for Women",
    description: 
      "Providing free legal consultation and representation to women facing domestic violence and discrimination. Our team of legal experts helps women navigate the legal system, understand their rights, and receive justice.",
    image: "/images/legalsupp.png",
    stats: "15+ Cases Handled • 30+ Successful Interventions",
    achievements: [
      "Provided free legal aid to over 150 women in Janakpur and surrounding areas",
      "Secured protection orders for 45+ domestic violence victims",
      "Helped 30+ women receive compensation and alimony in divorce cases",
      "Trained 25 community volunteers on basic legal rights and procedures"
    ],
    impact: "Through our legal aid program, we've seen a 40% increase in women reporting domestic violence cases, and a significant improvement in case outcomes for those who receive our support."
  },
  {
    id: 2,
    title: "Stop Child Marriage Initiative",
    description: 
      "Working with local authorities to prevent child marriages and provide support to affected children. We intervene in planned child marriages, educate communities about the legal and social consequences, and help victims rebuild their lives.",
    image: "/images/ce1217e6-bfa2-4574-90f3-f6018914f5ee.png",
    stats: "20+ Child Marriages Prevented • 10+ Awareness Programs",
    achievements: [
      "Successfully prevented over 20 child marriages through direct intervention",
      "Established a confidential reporting system in 12 villages",
      "Conducted awareness programs in 15 schools reaching 1,000+ students",
      "Partnered with local police to create rapid response protocols"
    ],
    impact: "Areas where we've implemented our child marriage prevention program have seen up to a 30% reduction in child marriage rates within the first year."
  },
  {
    id: 3,
    title: "Community Awareness Programs",
    description: 
      "Organizing educational campaigns to raise awareness about legal rights, gender equality, and human rights. We conduct workshops, community meetings, and public events to educate people about their rights and challenge harmful social norms.",
    image: "/images/8114da5c-1dbf-4e4c-a549-60a4ca1fca9b.png",
    stats: "25+ Programs Conducted • 1,000+ Community Members Reached",
    achievements: [
      "Organized 25+ awareness programs across Janakpur and surrounding villages",
      "Created simplified legal rights materials in local languages",
      "Trained 10 local leaders as community advocates",
      "Established women's discussion groups in 8 villages"
    ],
    impact: "Communities where we've conducted awareness programs show a 50% increase in women's knowledge of their legal rights and a 35% increase in community support for gender equality."
  },
  {
    id: 4,
    title: "Women's Economic Empowerment",
    description: 
      "Supporting women through vocational training, education, and entrepreneurship opportunities to gain financial independence. Economic independence is crucial for women to escape abusive situations and make free choices about their lives.",
    image: "/images/economicempowerment.png",
    stats: "50+ Women Trained • 3+ Small Businesses Started",
    achievements: [
      "Provided vocational training to 50+ women in marketable skills",
      "Helped establish 15+ women-owned small businesses",
      "Facilitated micro-loans for business startup costs",
      "Created peer mentoring networks for new entrepreneurs"
    ],
    impact: "Women who complete our economic empowerment program report an average 60% increase in personal income and significantly greater decision-making power within their families."
  },
  {
    id: 5,
    title: "Legal Skills Against Domestic Abuse",
    description: 
      "Providing comprehensive training on legal rights, procedures, and resources to help women combat domestic abuse. Our program focuses on practical legal knowledge and support systems.",
    image: "/images/domesticabusetraining.jpg",
    stats: "10+ Women Trained • 2 Legal Workshops Conducted",
    achievements: [
      "Conducted 2 foundational legal awareness workshops",
      "Trained 10 women in understanding legal procedures and rights",
      "Created simplified legal guides in local languages",
      "Established connections with local legal professionals"
    ],
    impact: "Initial participants report increased confidence in understanding their legal rights and available support systems for addressing domestic abuse situations."
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-foundation-lightGray to-white">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-6xl text-foundation-darkPurple text-center mb-6">Our Projects</h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Explore the detailed impact of our initiatives in Janakpur and beyond. Each project reflects our commitment to creating lasting positive change.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {projects.map((project) => (
              <div key={project.id} className="grid md:grid-cols-2 gap-10 items-center">
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div>
                  <h2 className="text-3xl md:text-4xl font-playfair text-foundation-darkPurple mb-4">{project.title}</h2>
                  <p className="text-gray-600 mb-6 text-lg">{project.description}</p>
                  
                  <div className="text-lg font-medium text-foundation-purple mb-6">{project.stats}</div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-foundation-darkPurple mb-3">Key Achievements</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="text-gray-600">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foundation-darkPurple mb-3">Impact</h3>
                    <p className="text-gray-600">{project.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
