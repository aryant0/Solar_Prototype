import React, { useRef, useState, useEffect } from 'react';
import { PhoneCall, Mail, MapPin, Send, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      if (Math.random() > 0.1) { // 90% success rate for demo
        setFormSubmitted(true);
        setFormError(false);
        // Reset form
        if (formRef.current) {
          formRef.current.reset();
          setFormState({
            name: '',
            email: '',
            phone: '',
            message: ''
          });
        }
      } else {
        setFormError(true);
      }
    }, 1000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Contact Us
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Get in Touch
          </h2>
          <p className={`text-gray-600 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Ready to start your solar journey? Reach out for a free consultation and quote.
            Our team is here to answer all your questions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact form */}
          <div 
            className={`bg-white rounded-xl shadow-xl p-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h4>
                <p className="text-gray-600">
                  Thank you for reaching out. One of our solar consultants will contact you shortly.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="Your Mobile (optional)"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your message (optional)"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                
                {formError && (
                  <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg">
                    There was an error submitting your message. Please try again.
                  </div>
                )}
                
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
          
          {/* Contact info and map */}
          <div>
            <div 
              className={`bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-xl p-8 text-white mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <PhoneCall className="w-5 h-5 text-blue-200" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Phone</h4>
                    <p className="text-blue-100">06123190322</p>
                    <p className="text-blue-100 text-sm">Mon-Fri 8am-6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-blue-200" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <p className="text-blue-100">enasolar24@gmail.com</p>
                    <p className="text-blue-100 text-sm">Always open for inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-blue-200" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Office Location</h4>
                    <p className="text-blue-100">4H/15, B.H. Colony, Bhootnath Road, Patna, Bihar, 800026</p>
                    <p className="text-blue-100 text-sm">Mon-Fri 9am-5pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div 
              className={`rounded-xl overflow-hidden shadow-xl h-80 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <iframe
                title="ENA Solar Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.654932850787!2d85.1436223!3d25.6127699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5f5b6af3d07d%3A0x5b5f6d0b5c9c1f0!2sBhootnath%20Rd%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1648558862985!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;