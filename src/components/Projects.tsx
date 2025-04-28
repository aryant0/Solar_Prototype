import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      title: "Greenfield Corporate Campus",
      type: "Commercial",
      location: "Austin, TX",
      capacity: "450 kW",
      description: "Large-scale rooftop installation for a tech company headquarters, reducing their energy costs by 40%.",
      image: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      title: "Sunset Hills Community",
      type: "Residential",
      location: "San Diego, CA",
      capacity: "120 kW",
      description: "Multi-home solar project providing renewable energy to 15 residential properties in a sustainable community.",
      image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      title: "Valley Manufacturing Facility",
      type: "Industrial",
      location: "Denver, CO",
      capacity: "1.2 MW",
      description: "Custom solar solution for a manufacturing facility, including ground-mounted arrays and energy storage.",
      image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            Our Projects
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Featured Solar Installations
          </h2>
          <p className={`text-gray-600 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Explore our portfolio of successful solar energy projects across residential, 
            commercial, and industrial sectors.
          </p>
        </div>
        
        {/* Projects slider */}
        <div 
          className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative">
            {/* Current slide image */}
            <div className="aspect-w-16 aspect-h-9 md:aspect-h-7 lg:aspect-h-5">
              <img 
                src={projects[currentSlide].image} 
                alt={projects[currentSlide].title} 
                className="object-cover w-full h-full transition-opacity duration-500"
              />
            </div>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 text-white">
              <div className="max-w-3xl">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-3 py-1 bg-yellow-500 text-yellow-900 text-xs font-medium rounded-full">
                    {projects[currentSlide].type}
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {projects[currentSlide].location}
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {projects[currentSlide].capacity}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{projects[currentSlide].title}</h3>
                <p className="text-white/80 mb-6 max-w-2xl">{projects[currentSlide].description}</p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Request Similar Project
                </a>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          
          {/* Pagination dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentSlide === index ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Gallery grid - visible on larger screens */}
        <div className={`mt-12 grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
              key={item} 
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img 
                  src={`https://images.pexels.com/photos/${item === 1 ? '2800832' : item === 2 ? '9875441' : item === 3 ? '159397' : item === 4 ? '356036' : item === 5 ? '6970706' : '421888'}/pexels-photo-${item === 1 ? '2800832' : item === 2 ? '9875441' : item === 3 ? '159397' : item === 4 ? '356036' : item === 5 ? '6970706' : '421888'}.jpeg?auto=compress&cs=tinysrgb&w=600`} 
                  alt={`Solar project ${item}`} 
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;