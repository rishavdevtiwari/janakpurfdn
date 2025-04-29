import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Calendar, Users } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";


export const blogPosts = [
  {
    id: 1,
    title: "Legal Aid Program Empowers 15 Women",
    excerpt: "Our latest legal aid session provided crucial support to women facing domestic violence issues in rural Janakpur.",
    image: "/images/meeting..jpg",
    date: "March 20, 2025",
    category: "Legal Aid",
    author: "Ranjana Jha"
  },
  {
    id: 2,
    title: "Child Marriage Prevention Campaign Reaches 5 Villages",
    excerpt: "Our volunteers conducted awareness workshops in 5 villages, educating communities about the harms of child marriage.",
    image: "/images/carousel-2.jpg",
    date: "March 5, 2025",
    category: "Child Rights",
    author: "Rani Kumari"
  },
  {
    id: 3,
    title: "Women's Rights Awareness Workshop",
    excerpt: "Over 30 women participated in our legal awareness workshop focused on understanding property rights and protection laws.",
    image: "/images/8114da5c-1dbf-4e4c-a549-60a4ca1fca9b.png",
    date: "March 15, 2025",
    category: "Awareness",
    author: "Rekha Devi"
  },
  {
    id: 4,
    title: "Women's Economic Empowerment",
    excerpt: "Supporting women through vocational training, education, and entrepreneurship opportunities to gain financial independence.",
    image: "/images/img101.png",
    date: "March 25, 2025", 
    category: "Empowerment",
    author: "Rekha Devi"
  },
  {
    id: 5,
    title: "Legal Skills Against Domestic Abuse",
    excerpt: "Empowering women with legal knowledge and resources to combat domestic violence in rural communities.",
    image: "/images/domesticabusetraining.jpg",
    date: "April 28, 2025",
    category: "Legal Training",
    author: "Ranjana Jha"
  },
];

const ProjectsSection = () => {
  const navigate = useNavigate();
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = useRef(null);
  const [api, setApi] = useState(null);

  const handleCardClick = (id) => {
    navigate(`/projects#${id}`);
  };

  useEffect(() => {
    if (!api || !autoPlay) return;
    
    autoPlayRef.current = setInterval(() => {
      api.scrollNext();
    }, 3000);
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [api, autoPlay]);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Latest Updates & Impact Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Read about our most recent initiatives, success stories, and the impact we're making in the communities we serve.
          </p>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {blogPosts.map((post) => (
                <CarouselItem key={post.id} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/3">
                  <Card 
                    className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full cursor-pointer"
                    onMouseEnter={() => setAutoPlay(false)}
                    onMouseLeave={() => setAutoPlay(true)}
                    onClick={() => handleCardClick(post.id)}
                  >
                    <div className="h-52 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center text-sm text-foundation-purple mb-2">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.category}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foundation-darkPurple mb-2 font-playfair">{post.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          <Users size={16} className="text-foundation-purple mr-2" />
                          <span className="text-sm text-gray-500">By {post.author}</span>
                        </div>
                        <div className="text-foundation-purple font-medium hover:text-foundation-darkPurple flex items-center">
                          Read More <ArrowRight size={16} className="ml-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/projects">
            <Button className="bg-foundation-purple hover:bg-foundation-darkPurple text-white flex items-center gap-2 px-6 py-3 rounded-full">
              View All Stories <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

