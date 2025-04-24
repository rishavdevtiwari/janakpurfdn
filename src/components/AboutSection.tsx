
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Heart, ShieldAlert } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">About Janakpur Foundation</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a non-profit organization dedicated to fighting against child marriages, domestic abuse, and gender inequality in Janakpur, Nepal and surrounding regions through legal advocacy and community empowerment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-foundation-purple/10 p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <Heart className="text-foundation-purple h-6 w-6" />
              </div>
              <h3 className="section-subheading text-center">Our Mission</h3>
              <p className="text-gray-600 text-center">
                To empower women and protect children through legal advocacy, education, and community action that creates lasting positive change.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-foundation-purple/10 p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <Scale className="text-foundation-purple h-6 w-6" />
              </div>
              <h3 className="section-subheading text-center">Our Vision</h3>
              <p className="text-gray-600 text-center">
                A world where every woman and child in Nepal has access to legal protection, equal opportunities, and the ability to build a life free from violence and discrimination.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-foundation-purple/10 p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <ShieldAlert className="text-foundation-purple h-6 w-6" />
              </div>
              <h3 className="section-subheading text-center">Our Impact</h3>
              <p className="text-gray-600 text-center">
                Since our founding in 2024, we've helped hundreds of women and children across Janakpur through legal intervention, education, and community outreach programs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
