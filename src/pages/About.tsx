import React from 'react';
import { Download, ArrowRight } from 'lucide-react';

const About = () => {
  const products = [
    {
      title: "Solar Panel",
      description: "Harness the power of the sun with our high-efficiency solar panels, designed to maximize energy production and durability. Explore our range for residential, commercial, industrial and large-scale applications."
    },
    {
      title: "Solar Inverters",
      description: "Convert solar energy into usable electricity with our state-of-the-art inverters. Our inverters ensure optimal performance and seamless integration with your solar system."
    },
    {
      title: "Solar Measurement Units",
      description: "Monitor and optimize your solar energy production with our precision measurement units. These devices provide real-time data and insights to help you manage your energy usage efficiently."
    },
    {
      title: "Balance Of System",
      description: "Complete your solar setup with our comprehensive Balance of System components. From mounting structures to wiring and safety equipment, we offer everything you need for a reliable and efficient solar installation."
    }
  ];

  const features = [
    {
      title: "Diverse Energy Needs",
      description: "Providing a variety of cell configurations and power ranges to meet diverse energy needs and preferences, ensuring seamless integration with existing infrastructure for minimal disruption."
    },
    {
      title: "Tailored Solutions",
      description: "Tailored solutions suitable rooftop PV installations across residential, government, industrial, and commercial sectors."
    },
    {
      title: "Financial Benefits",
      description: "Offering the lowest levelized cost of electricity (LCOE) and highest internal rate of return (IRR) for maximum financial benefit, along with flexible financing options and incentives to support renewable energy adoption."
    },
    {
      title: "Long-term Performance",
      description: "Monitoring, maintenance, and data-driven insights to ensure long-term performance, reliability, and environmental impact."
    }
  ];

  const benefits = [
    {
      title: "Higher Performance and Efficiency",
      description: "Our cutting-edge technologies ensure higher performance and efficiency, maximizing energy production and minimizing waste. Enjoy up to 30% greater efficiency with our optimized solar setups."
    },
    {
      title: "Enhanced Power Output",
      description: "Experience a significant boost in power output, with our advanced solar solutions delivering up to 25% more electricity compared to conventional systems."
    },
    {
      title: "Save on Electricity Bills",
      description: "Take control of your energy costs and significantly reduce monthly electricity bills by harnessing the sun's energy with solar panels. For example, for every 1 kW solar setup, you can save up to 1.5 tons of carbon dioxide emissions annually, contributing to a cleaner and healthier environment."
    },
    {
      title: "Protect yourself against rising costs",
      description: "Reduce your electricity bills by up to 40% with our solar services. Our efficient systems help you save on energy expenses, providing long-term cost benefits for your home or business."
    },
    {
      title: "Avail subsidy",
      description: "The Indian government offers financial help, in the form of a subsidy, to homeowners installing on-grid rooftop solar systems. This reduces the cost of installing solar. You should take advantage of this while you still can; the subsidy on solar will not be offered forever"
    },
    {
      title: "Limitless Energy",
      description: "The sun continuously strikes the Earth with 173,000 terawatts of solar energy, making it the most abundant energy resource on earth. This amount of energy is more than 10,000 times the world's total energy use."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transforming Sunshine into Savings</h1>
            <div className="space-y-4 text-blue-100">
              <p>Trusted Partner for Sustainable Energy</p>
              <p>Build, Operate and Transfer Expertise</p>
              <p>Quality Components, Tailored Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="inline-flex items-center text-blue-600 hover:text-blue-700">
              Click to read more about our products
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features & Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Downloads</h2>
            <p className="mb-8">
              Access our brochure for detailed information about our advanced solar solutions. 
              Learn about our innovative products, exceptional services, and how we can help you 
              achieve greater efficiency and cost savings. Discover the benefits of our solar 
              technology and start your journey towards a sustainable future.
            </p>
            <button className="inline-flex items-center bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors">
              <Download className="w-5 h-5 mr-2" />
              Download here
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Contact us</h2>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Your Mobile (optional)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your message (optional)"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Visit us</h2>
            <p className="text-gray-600 mb-4">4H/15, B.H. Colony, Bhootnath Road, Patna, Bihar, 800026</p>
            <div className="h-80 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="ENA Solar Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.654932850787!2d85.1436223!3d25.6127699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5f5b6af3d07d%3A0x5b5f6d0b5c9c1f0!2sBhootnath%20Rd%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1648558862985!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;