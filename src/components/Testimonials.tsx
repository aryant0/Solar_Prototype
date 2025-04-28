import React, { useRef, useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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

  // Automatic testimonial rotation
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const testimonials = [
    {
      name: "Michael Johnson",
      role: "Homeowner",
      location: "San Francisco, CA",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      stars: 5,
      text: "Switching to solar with SolarPeak was one of the best decisions we've made for our home. The installation was quick and professional, and our energy bills have been cut by over 70%!"
    },
    {
      name: "Sarah Thompson",
      role: "Business Owner",
      location: "Austin, TX",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      stars: 5,
      text: "As a small business owner, I was concerned about the initial investment, but SolarPeak made the process incredibly smooth with their financing options. Our ROI has been better than expected!"
    },
    {
      name: "David Rodriguez",
      role: "Property Manager",
      location: "Miami, FL",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
      stars: 4,
      text: "Managing multiple properties means I need reliable partners. SolarPeak has consistently delivered quality installations across all our buildings, reducing our operational costs significantly."
    }
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-gray-50 relative">
      {/* Top triangle shape */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-white clip-triangle"></div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-500 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            What Our Clients Say
          </h2>
          <p className={`text-gray-600 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Don't just take our word for it. Hear from clients who have experienced the benefits of solar energy firsthand.
          </p>
        </div>
        
        {/* Testimonials carousel */}
        <div 
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-xl p-8 md:p-10 transition-all duration-700 ${
                  activeTestimonial === index 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-10 scale-95 absolute inset-0'
                }`}
              >
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                  <Quote className="w-16 h-16 text-yellow-400 opacity-20" />
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeTestimonial === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className={`mt-16 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-8 text-center border-b md:border-b-0 md:border-r border-gray-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
              <p className="text-gray-500">Customer Satisfaction</p>
            </div>
            <div className="p-8 text-center border-b md:border-b-0 md:border-r border-gray-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-500">Years Experience</p>
            </div>
            <div className="p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-500">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;