
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonationForm from "@/components/DonationForm";

const Donate = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-foundation-lightGray to-white">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-6xl text-foundation-darkPurple text-center mb-6">Make a Donation</h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Your generosity helps us continue our fight against child marriages, domestic abuse, and gender inequality in Nepal. Every donation makes a difference.
          </p>
        </div>
      </div>

      <DonationForm />
      
      <Footer />
    </div>
  );
};

export default Donate;
