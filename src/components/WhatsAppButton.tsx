import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // WhatsApp API URL with predefined message
      const whatsappUrl = `https://wa.me/15551234567?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setMessage('');
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat popup */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-xl shadow-2xl overflow-hidden animate-slideUp">
          <div className="bg-[#25D366] p-4 text-white flex justify-between items-center">
            <h3 className="font-medium">Chat with Us</h3>
            <button onClick={toggleOpen} className="text-white hover:text-green-100">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4">
            <p className="text-gray-600 text-sm mb-4">
              Have questions about solar energy? Chat with us on WhatsApp!
            </p>
            <form onSubmit={handleSubmit}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full p-3 border border-gray-300 rounded-lg text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                rows={3}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-2 rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Start WhatsApp Chat
              </button>
            </form>
          </div>
        </div>
      )}

      {/* WhatsApp button */}
      <button
        onClick={toggleOpen}
        className="w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-all hover:scale-110 animate-bounce-slow flex items-center justify-center relative group"
        style={{
          animation: 'bounce 2s infinite'
        }}
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75 group-hover:opacity-0 transition-opacity"></div>
        <MessageCircle className="w-8 h-8" />
      </button>
    </div>
  );
};

export default WhatsAppButton;