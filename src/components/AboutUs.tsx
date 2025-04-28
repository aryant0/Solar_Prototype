import React, { useRef, useEffect, useState } from 'react';
import { CheckCircle, Award, ShieldCheck } from 'lucide-react';

const AboutUs: React.FC = () => {
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

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: "Quality Guaranteed",
      description: "We use only premium solar panels with 25+ year warranties."
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      title: "Certified Experts",
      description: "Our team consists of certified solar energy specialists."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      title: "Reliable Support",
      description: "24/7 customer support and maintenance services available."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div 
            className={`relative rounded-lg overflow-hidden shadow-xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="aspect-w-4 aspect-h-3">
              <img 
                src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Solar panels installation" 
                className="object-cover w-full h-full"
              />
            </div>
            {/* Overlap element */}
            <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-5 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-white">15+</div>
              <div className="text-sm text-white">Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              About SolarPeak
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pioneering Solar Solutions Since 2008
            </h2>
            <p className="text-gray-600 mb-6">
              At SolarPeak, we're committed to accelerating the world's transition to sustainable energy. 
              Our team of experts designs and installs custom solar solutions for homeowners and businesses, 
              helping you reduce energy costs while contributing to a cleaner planet.
            </p>
            <p className="text-gray-600 mb-8">
              With over 5,000 successful installations across the country, we've helped our clients 
              save millions on energy bills and significantly reduce carbon emissions.
            </p>

            {/* Features */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 600}ms` }}
                >
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;