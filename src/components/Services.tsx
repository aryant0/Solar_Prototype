import React, { useRef, useState, useEffect } from 'react';
import { Home, Building, Factory, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const services = [
    {
      icon: <Home className="w-10 h-10 text-yellow-500" />,
      title: "Residential Solar",
      description: "Custom solar solutions for homeowners looking to reduce energy bills and increase property value.",
      features: ["Roof and ground-mounted systems", "Battery storage options", "Smart monitoring", "25-year warranty"]
    },
    {
      icon: <Building className="w-10 h-10 text-blue-500" />,
      title: "Commercial Solar",
      description: "Scalable solar solutions for businesses of all sizes, with flexible financing options.",
      features: ["Rooftop and carport systems", "Power purchase agreements", "Energy management", "Quick ROI"]
    },
    {
      icon: <Factory className="w-10 h-10 text-green-500" />,
      title: "Industrial Solar",
      description: "Large-scale solar installations for factories and industrial facilities with high energy demands.",
      features: ["MW-scale installations", "Custom system design", "Integration with existing systems", "Operation & maintenance"]
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-500" />,
      title: "Energy Storage",
      description: "Battery storage solutions to maximize your solar investment and provide backup power.",
      features: ["Lithium-ion technology", "Smart power management", "Seamless backup transition", "Modular expansion"]
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute -top-10 right-0 w-64 h-64 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Comprehensive Solar Energy Solutions
          </h2>
          <p className={`text-gray-600 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            We offer end-to-end solar services from consultation and design to installation and maintenance,
            tailored to your specific energy needs and goals.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-700 group overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: `${index * 150 + 500}ms`,
                borderTop: '4px solid transparent',
                borderTopColor: index === 0 ? '#F59E0B' : index === 1 ? '#3B82F6' : index === 2 ? '#10B981' : '#8B5CF6'
              }}
            >
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-5 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 mr-2"></span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 bg-gray-50 group-hover:bg-gray-100 transition-colors">
                <a href="#contact" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;