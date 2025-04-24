import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Legal Aid for Women",
    description: "Providing free legal consultation and representation to women facing domestic violence and discrimination.",
    image: "/images/carousel-1.png",
    stats: "15+ Cases Handled • 8+ Successful Interventions",
  },
  {
    id: 2,
    title: "Stop Child Marriage Initiative",
    description: "Working with local authorities to prevent child marriages and provide support to affected children.",
    image: "/images/carousel-2.jpg",
    stats: "5+ Child Marriages Prevented • 10+ Awareness Programs",
  },
  {
    id: 3,
    title: "Community Awareness Programs",
    description: "Organizing educational campaigns to raise awareness about legal rights, gender equality, and human rights.",
    image: "/images/ce1217e6-bfa2-4574-90f3-f6018914f5ee.png",
    stats: "12+ Programs Conducted • 200+ Community Members Reached",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Through dedicated efforts and your generous support, we implement various projects to create lasting change in Janakpur and surrounding areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foundation-darkPurple mb-2 font-playfair">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="text-sm font-semibold text-foundation-purple mb-4">{project.stats}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/projects">
            <Button className="bg-foundation-purple hover:bg-foundation-darkPurple text-white flex items-center gap-2 px-6 py-3 rounded-full">
              View Detailed Projects <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
