import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="bg-navy-900/95 backdrop-blur-md py-3 px-4" style={{ borderTop: '2px solid rgba(255,255,255,0.5)' }}>
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-gold-400 font-bold text-lg" style={{ fontFamily: "'Figtree', sans-serif" }}>
              CÓDIGO DIVINO
            </span>
            <span className="text-gray-300 text-sm">
              <span className="line-through text-gray-300">$49.50</span>{' '}
              <span className="text-green-400 font-bold text-lg">$9.90 USD</span>
            </span>
          </div>
          <a href="https://hotm.io/codigodivino-psa" className="flex-shrink-0 w-full sm:w-auto">
            <button className="cta-button text-white font-bold text-sm sm:text-base px-6 py-3 rounded-xl w-full sm:w-auto">
              ¡QUIERO MI CÓDIGO DIVINO!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
