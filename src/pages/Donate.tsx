
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonationForm from "@/components/DonationForm";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/components/ProjectsSection";

const Donate = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  
  const handleNext = () => {
    setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
  };
  
  const handlePrev = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  const recentProject = blogPosts[0]; 

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-foundation-lightGray to-white">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-6xl text-foundation-darkPurple text-center mb-6">Make a Donation</h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Your generosity helps Janakpur Foundation continue our fight against child marriages, domestic abuse, and gender inequality in Nepal. Every donation makes a difference.
          </p>
        </div>
      </div>
      
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <Slider
              value={[currentSlide]}
              max={totalSlides - 1}
              step={1}
              onValueChange={(value) => setCurrentSlide(value[0])}
              className="w-2/3 mx-auto"
            />
          </div>

          <div className="flex justify-between mb-6 px-4">
            <Button 
              variant="outline" 
              onClick={handlePrev} 
              disabled={currentSlide === 0}
              className="flex items-center"
            >
              <ArrowLeft className="mr-2" size={16} />
              Previous
            </Button>
            
            <div className="text-center text-foundation-darkPurple font-medium">
              {currentSlide === 0 ? "Where Your Money Goes" : 
               currentSlide === 1 ? "Donation Form" : 
               "Bank Transfer Details"}
            </div>
            
            <Button 
              variant="outline" 
              onClick={handleNext} 
              disabled={currentSlide === totalSlides - 1}
              className="flex items-center"
            >
              Next
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>

          <div className="transition-all duration-300">
            {currentSlide === 0 && (
              <section className="py-8 bg-white">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl md:text-4xl font-playfair text-foundation-darkPurple text-center mb-10">Where Your Money Goes</h2>
                  
                  <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                    <div className="bg-foundation-purple/5 p-8 rounded-xl border border-foundation-purple/20 text-center">
                      <div className="text-5xl font-bold text-foundation-purple mb-2">65%</div>
                      <h3 className="text-xl font-semibold mb-4 text-foundation-darkPurple">Direct Program Services</h3>
                      <p className="text-gray-600">
                        Funds legal aid for women, educational workshops, and intervention services for victims of domestic violence and child marriage.
                      </p>
                    </div>
                    
                    <div className="bg-foundation-purple/5 p-8 rounded-xl border border-foundation-purple/20 text-center">
                      <div className="text-5xl font-bold text-foundation-purple mb-2">25%</div>
                      <h3 className="text-xl font-semibold mb-4 text-foundation-darkPurple">Community Outreach</h3>
                      <p className="text-gray-600">
                        Supports awareness campaigns, educational materials, and training local advocates in rural communities.
                      </p>
                    </div>
                    
                    <div className="bg-foundation-purple/5 p-8 rounded-xl border border-foundation-purple/20 text-center">
                      <div className="text-5xl font-bold text-foundation-purple mb-2">10%</div>
                      <h3 className="text-xl font-semibold mb-4 text-foundation-darkPurple">Administration</h3>
                      <p className="text-gray-600">
                        Covers essential operational costs to ensure effective program delivery and sustainable impact.
                      </p>
                    </div>
                  </div>
                  
                  <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-xl border border-gray-200">
                    <h3 className="text-2xl font-playfair text-foundation-darkPurple mb-4">Our Commitment to Transparency</h3>
                    <p className="text-gray-600 mb-6">
                      As a newly established foundation led by Ranjana Jha, the Janakpur Foundation is committed to financial transparency and accountability. We're building our programs from the ground up with recent success stories like our {recentProject.title.toLowerCase()} in {recentProject.date}.
                    </p>
                    
                    <div className="text-center mt-8">
                      <Button 
                        onClick={handleNext}
                        className="bg-foundation-purple hover:bg-foundation-darkPurple text-white flex items-center gap-2 px-6 py-3 rounded-full mx-auto"
                      >
                        Proceed to Donation Form <ArrowRight size={18} />
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {currentSlide === 1 && (
              <DonationForm onFormSubmitted={handleNext} />
            )}

            {currentSlide === 2 && (
              <section className="py-8">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl border border-gray-200 shadow-lg">
                    <h2 className="text-3xl font-playfair text-foundation-darkPurple text-center mb-6">Bank Transfer Information</h2>
                    <p className="text-gray-600 text-center mb-8">
                      Please use the following details to complete your donation to Janakpur Foundation via bank transfer
                    </p>
                    
                    <div className="space-y-6">
                      <div className="p-6 bg-gray-50 rounded-lg space-y-3 border border-gray-200">
                        <div className="text-lg font-semibold text-foundation-darkPurple mb-4">For National Transfers (within Nepal):</div>
                        <div>
                          <span className="font-semibold">Bank Name:</span> Nabil Bank
                        </div>
                        <div>
                          <span className="font-semibold">Branch:</span> Janakpur Pidarichowk
                        </div>
                        <div>
                          <span className="font-semibold">Account Holder's Name:</span> Ranjana Jha (Janakpur Foundation)
                        </div>
                        <div>
                          <span className="font-semibold">Account Number:</span> 05201017500751
                        </div>
                      </div>
                      
                      <div className="p-6 bg-gray-50 rounded-lg space-y-3 border border-gray-200">
                        <div className="text-lg font-semibold text-foundation-darkPurple mb-4">For International Transfers:</div>
                        <div>
                          <span className="font-semibold">Bank Name:</span> Nabil Bank
                        </div>
                        <div>
                          <span className="font-semibold">Branch:</span> Janakpur Pidarichowk
                        </div>
                        <div>
                          <span className="font-semibold">Account Holder's Name:</span> Ranjana Jha (Janakpur Foundation)
                        </div>
                        <div>
                          <span className="font-semibold">Account Number:</span> 05201017500751
                        </div>
                        <div>
                          <span className="font-semibold">SWIFT Code:</span> NARBNPKA
                        </div>
                        <div>
                          <span className="font-semibold">Bank Address:</span> Janakpur, Dhanusha District, Nepal
                        </div>
                      </div>

                      <div className="text-sm text-gray-600 p-4 border-l-4 border-foundation-purple bg-foundation-purple/5">
                        <p className="font-semibold mb-2">Important Notes:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Please include your name in the transfer reference.</li>
                          <li>International transfers may take 3-5 business days to process.</li>
                          <li>Bank transfer fees are the responsibility of the donor.</li>
                        </ul>
                      </div>

                      <div className="mt-6 text-center">
                        <div className="text-foundation-darkPurple font-semibold mb-4 text-lg">
                          Our Location
                        </div>
                        <p className="mb-2">Janakpur Foundation</p>
                        <p>Janakpur, Dhanusha District, Ward no.4, Nepal</p>
                        <div className="mt-4 text-foundation-darkPurple font-semibold mb-2">
                          For assistance with your donation:
                        </div>
                        <p>Email: janakpurfoundation01@gmail.com</p>
                      </div>
                      
                      <div className="text-center mt-8">
                        <Button 
                          onClick={() => setCurrentSlide(0)}
                          className="bg-foundation-purple hover:bg-foundation-darkPurple text-white flex items-center gap-2 px-6 py-3 rounded-full mx-auto"
                        >
                          Return to Beginning <ArrowRight size={18} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Donate;
