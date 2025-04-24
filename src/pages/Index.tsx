
import React from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import HistorySection from "@/components/HistorySection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-foundation-purple/5 rounded-xl border border-foundation-purple/20 hover:shadow-md transition-shadow">
              <Award className="h-10 w-10 text-foundation-purple mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">Fighting against child marriages, domestic abuse, and gender inequality through legal advocacy.</p>
            </div>
            
            <div className="text-center p-8 bg-foundation-purple/5 rounded-xl border border-foundation-purple/20 hover:shadow-md transition-shadow">
              <Users className="h-10 w-10 text-foundation-purple mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold mb-2">Our Team</h3>
              <p className="text-gray-600">Led by Ranjana Jha, our dedicated team of professionals works tirelessly to create lasting change.</p>
            </div>
            
            <div className="text-center p-8 bg-foundation-purple/5 rounded-xl border border-foundation-purple/20 hover:shadow-md transition-shadow">
              <MapPin className="h-10 w-10 text-foundation-purple mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold mb-2">Our Location</h3>
              <p className="text-gray-600">Based in Janakpur, Dhanusha District, Ward no.4, Nepal, serving the Terai region and beyond.</p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="relative py-20 bg-foundation-purple/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair text-foundation-darkPurple mb-6">Recent Awareness Program</h2>
            <p className="text-lg text-gray-600 mb-10">
              Our team recently conducted a community awareness program focused on women's rights and child protection in Janakpur. Over 100 women from the local community participated in this empowering event.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="/images/ce1217e6-bfa2-4574-90f3-f6018914f5ee.png" 
                  alt="Community Awareness Program" 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="/images/8114da5c-1dbf-4e4c-a549-60a4ca1fca9b.png" 
                  alt="Women's Rights Workshop" 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            
            <Link to="/projects">
              <Button className="bg-foundation-purple hover:bg-foundation-darkPurple text-white flex items-center mx-auto gap-2 px-6 py-3 rounded-full">
                View All Our Projects <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <ProjectsSection />
      <HistorySection />
      
      <section className="py-20 bg-foundation-lightGray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-heading mb-6">Support Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Your donation helps us continue our work fighting for women's rights and against child marriage in Nepal. Together, we can create lasting positive change.
          </p>
          <Link to="/donate">
            <Button className="donation-button text-lg px-8 py-4 inline-flex items-center gap-2">
              Donate Now <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
