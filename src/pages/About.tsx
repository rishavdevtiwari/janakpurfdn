
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "Ranjana Jha",
      title: "CEO",
      bio: "With MA LLB and MA Sociology degrees, Ranjana has dedicated her education and career to fighting for justice and social change. For over 4 years before founding Janakpur Foundation, she actively took legal action to protect women and children in the region.",
      image: "/images/ranjanajha.png"
    },
    {
      name: "Lal Chandra Jha",
      title: "Accountant",
      bio: "Manages the foundation's finances and ensures transparency in all financial matters.",
      image: "/images/lalchandrajha.png"
    },
    {
      name: "Saroj Devi Jha",
      title: "Social Mobilizer",
      bio: "Works directly with communities to organize awareness programs and mobilize support for various initiatives.",
      image: "/images/sarojdevi.png"
    },
    {
      name: "Rahumat Rahyan",
      title: "Social Worker",
      bio: "Provides direct support to women and children in need, connecting them with the foundation's resources.",
      image: "/images/rahamat.png"
    },
    {
      name: "Rekha Sah",
      title: "Social Worker",
      bio: "Specializes in child protection and works to identify and prevent cases of child marriage.",
      image: "/images/rekha.png"
    },
    {
    name: "Angad Thakur",
    title: "Social Worker",
    bio: "Specializes in women empowerment and works to identify and prevent cases of domestic abuse.",
    image: "/images/angadthakur.png"
    },
    {
      name: "Krishna Kumar Jha",
      title: "Legal Adviser",
      bio: "Provides expert legal counsel to the foundation and represents clients in legal proceedings.",
      image: "/images/krishna.png"
    },
    {
      name: "Rani Kumari",
      title: "Office Staff",
      bio: "Overlooks Funding and Manpower division, mobilizes social workers.",
      image: "/images/rani.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-foundation-lightGray to-white">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-6xl text-foundation-darkPurple text-center mb-6">About Us</h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Learn about the Janakpur Foundation's mission, vision, and the dedicated team working to create positive change in Nepal.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair text-foundation-darkPurple mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                The Janakpur Foundation is dedicated to fighting against child marriages, domestic abuse, and gender inequality in Janakpur, Nepal and surrounding regions through legal advocacy and community empowerment.
              </p>
              <p className="text-lg text-gray-600">
                We believe in creating lasting change by empowering women, protecting children, and challenging outdated practices that perpetuate inequality and harm.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/carousel-1.png" 
                alt="Foundation Mission" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/ce1217e6-bfa2-4574-90f3-f6018914f5ee.png" 
                alt="Foundation Vision" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-playfair text-foundation-darkPurple mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-4">
                We envision a Nepal where all women and children live free from violence, discrimination, and harmful practices. Our goal is to create a society where everyone has equal access to justice, education, and opportunities.
              </p>
              <p className="text-lg text-gray-600">
                Through legal advocacy, education, and community mobilization, we work to transform the social norms that enable child marriage, domestic violence, and other forms of gender-based discrimination.
              </p>
            </div>
          </div>

          <div className="bg-foundation-lightGray rounded-xl p-8 md:p-12 mb-20">
            <h2 className="text-3xl md:text-4xl font-playfair text-foundation-darkPurple mb-6 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-foundation-purple w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><circle cx="12" cy="10" r="2"></circle><line x1="8" x2="8" y1="2" y2="4"></line><line x1="16" x2="16" y1="2" y2="4"></line></svg>
                </div>
                <h3 className="text-xl font-semibold text-foundation-darkPurple mb-2">Justice</h3>
                <p className="text-gray-600">We believe in equal justice under the law for all people, regardless of gender, age, or social status.</p>
              </div>
              <div className="text-center">
                <div className="bg-foundation-purple w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </div>
                <h3 className="text-xl font-semibold text-foundation-darkPurple mb-2">Empowerment</h3>
                <p className="text-gray-600">We work to give women and children the knowledge, skills, and support they need to advocate for themselves.</p>
              </div>
              <div className="text-center">
                <div className="bg-foundation-purple w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
                </div>
                <h3 className="text-xl font-semibold text-foundation-darkPurple mb-2">Courage</h3>
                <p className="text-gray-600">We stand firm in challenging harmful traditions and practices, even when faced with resistance.</p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-playfair text-foundation-darkPurple mb-6 text-center">Our Founder</h2>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:flex">
              <div className="md:flex-shrink-0 md:w-1/3">
                <img 
                  src="/images/ranjana.png" 
                  alt="Ranjana Jha" 
                  className="h-full w-full object-cover md:h-full md:w-full"
                />
              </div>
              <div className="p-8 md:p-10 md:w-2/3">
                <h3 className="text-2xl font-semibold text-foundation-darkPurple mb-2">Ranjana Jha</h3>
                <p className="text-foundation-purple font-medium mb-4">CEO & Founder</p>
                <p className="text-gray-600 mb-4">
                  Ranjana Jha holds MA LLB and MA Sociology degrees, which she has devoted to contributing to society's betterment. For over 3-4 years before officially founding the Janakpur Foundation in 2024, she has been actively working towards taking legal actions against child marriages, domestic violence, and gender discrimination in the Terai region of Nepal.
                </p>
                <p className="text-gray-600">
                  Her deep understanding of both legal frameworks and sociological patterns has allowed her to address these issues from multiple angles, creating more effective and sustainable solutions for the communities she serves.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-playfair text-foundation-darkPurple mb-6 text-center">Our Team</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              The Janakpur Foundation is led by a dedicated team of professionals with deep knowledge of local issues and a shared commitment to creating positive change.
            </p>
            <div className="team-grid">
              {teamMembers.slice(1).map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
                  <div className="p-6 text-center">
                    <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foundation-darkPurple mb-1">{member.name}</h3>
                    <p className="text-foundation-purple font-medium mb-2">{member.title}</p>
                    <p className="text-gray-600">{member.bio}</p>
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

export default About;
