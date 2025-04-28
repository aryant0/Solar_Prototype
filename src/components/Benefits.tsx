import React, { useRef, useState, useEffect } from 'react';
import { DollarSign, Leaf, Clock, Shield, BarChart, Award } from 'lucide-react';

const Benefits: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [counters, setCounters] = useState({
    installations: 0,
    savings: 0,
    customers: 0,
  });

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
  
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // ms
      const steps = 60;
      const stepTime = duration / steps;
      
      let currentStep = 0;
      
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          installations: Math.floor(progress * 5000),
          savings: Math.floor(progress * 30),
          customers: Math.floor(progress * 98),
        });
        
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepTime);
      
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const benefits = [
    {
      icon: <DollarSign className="w-10 h-10 text-yellow-500" />,
      title: "Financial Benefits",
      description: "Solar energy significantly reduces your electricity bills, provides excellent ROI, and increases property value."
    },
    {
      icon: <Leaf className="w-10 h-10 text-green-500" />,
      title: "Environmental Impact",
      description: "Reduce your carbon footprint with clean, renewable energy that helps combat climate change."
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-500" />,
      title: "Energy Independence",
      description: "Gain energy security with reduced dependence on the grid and protection from rising utility prices."
    }
  ];

  const tabContent = [
    {
      title: "Residential Benefits",
      icon: <Home className="w-6 h-6" />,
      content: "Homeowners can save up to 30% on their energy bills, increase property value by up to 4%, and qualify for federal tax incentives. Most systems pay for themselves within 7-10 years while lasting 25+ years."
    },
    {
      title: "Business Benefits",
      icon: <Building className="w-6 h-6" />,
      content: "Businesses benefit from reduced operating costs, protection against utility rate increases, accelerated depreciation, and enhanced corporate sustainability goals. Solar installations demonstrate environmental responsibility to customers and stakeholders."
    },
    {
      title: "Environmental Benefits",
      icon: <Leaf className="w-6 h-6" />,
      content: "Each kilowatt of solar energy prevents about 1.5 tons of carbon emissions annually. Our average residential system offsets the equivalent of planting 100-150 trees each year or removing 2 cars from the road."
    }
  ];

  return (
    <section id="benefits" ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative">
      {/* Wave top divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-green-500 opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 bg-blue-800 text-blue-200 rounded-full text-sm font-medium mb-4">
            Why Choose Solar
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Benefits of Solar Energy
          </h2>
          <p className={`text-blue-100 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Investing in solar energy offers numerous advantages beyond just saving on electricity bills.
            Discover how solar power can benefit you, your wallet, and the planet.
          </p>
        </div>
        
        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all duration-700 border border-white/20 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200 + 500}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-blue-100">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Tabs section */}
        <div className={`bg-white/5 rounded-xl p-6 backdrop-blur-lg border border-white/10 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="flex flex-wrap border-b border-white/20 mb-6">
            {tabContent.map((tab, index) => (
              <button
                key={index}
                className={`px-5 py-3 font-medium text-sm transition-colors ${
                  activeTab === index 
                    ? 'text-white border-b-2 border-yellow-400' 
                    : 'text-blue-200 hover:text-white'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="flex items-center space-x-2">
                  {React.cloneElement(tab.icon, {
                    className: `w-4 h-4 ${activeTab === index ? 'text-yellow-400' : 'text-blue-200'}`
                  })}
                  <span>{tab.title}</span>
                </div>
              </button>
            ))}
          </div>
          
          <div className="p-2">
            <p className="text-blue-100 leading-relaxed">
              {tabContent[activeTab].content}
            </p>
          </div>
        </div>
        
        {/* Stats counter section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div 
            className={`text-center transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
              {counters.installations.toLocaleString()}+
            </div>
            <p className="text-blue-200">Successful Installations</p>
          </div>
          
          <div 
            className={`text-center transition-all duration-1000 delay-1100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
              ${counters.savings}M+
            </div>
            <p className="text-blue-200">Customer Savings</p>
          </div>
          
          <div 
            className={`text-center transition-all duration-1000 delay-1200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
              {counters.customers}%
            </div>
            <p className="text-blue-200">Customer Satisfaction</p>
          </div>
        </div>
      </div>
      
      {/* Wave bottom divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg className="relative block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

// Home and Building icons for the tabs
const Home = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const Building = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
    <path d="M9 22v-4h6v4"></path>
    <path d="M8 6h.01"></path>
    <path d="M16 6h.01"></path>
    <path d="M12 6h.01"></path>
    <path d="M12 10h.01"></path>
    <path d="M12 14h.01"></path>
    <path d="M16 10h.01"></path>
    <path d="M16 14h.01"></path>
    <path d="M8 10h.01"></path>
    <path d="M8 14h.01"></path>
  </svg>
);

export default Benefits;