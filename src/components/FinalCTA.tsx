export default function FinalCTA() {
  return (
    <section className="relative py-20 bg-dark-divine overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-gold-500/10 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-gold-500/10 blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
          No dejes pasar esta{' '}
          <span className="text-gradient-gold">oportunidad divina</span>
        </h2>
        <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
          Profundiza en la Palabra con sabiduría y entendimiento visual. Tu vida espiritual nunca será la misma.
        </p>
        <p className="text-gold-300 text-lg font-semibold mb-10">
          ¡Aprovecha ahora antes de que la oferta termine!
        </p>

        {/* Book showcase */}
        <div className="flex justify-center mb-10">
          <img
            src="https://lh3.googleusercontent.com/d/15OXDolmdu-9VOQAitch1IA0Uvnbuvf8h"
            alt="Código Divino"
            className="w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[480px] h-auto object-contain drop-shadow-[0_20px_60px_rgba(234,179,8,0.4)] animate-float"
          />
        </div>

        {/* Price reminder */}
        <div className="mb-8">
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="text-gray-400 text-xl line-through">$49.50 USD</span>
            <span className="text-gold-400 text-5xl sm:text-6xl font-extrabold">$9.90</span>
            <span className="text-gray-400 text-lg">USD</span>
          </div>
          <p className="text-gray-400 text-sm">(Paga en tu moneda local)</p>
        </div>

        {/* CTA */}
        <a href="https://hotm.io/codigodivino-psa" className="inline-block">
          <button className="cta-button text-white font-bold text-xl px-14 py-6 rounded-2xl shadow-2xl animate-pulse-glow">
            ¡ACCEDER A CÓDIGO DIVINO AHORA!
          </button>
        </a>

        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
            Compra segura
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Acceso inmediato
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            7 días de garantía
          </span>
        </div>
      </div>
    </section>
  );
}
