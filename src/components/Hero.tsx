export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image - golden sky with dark ocean */}
      <div className="absolute inset-0">
        {/* Multi-layer gradient to replicate the golden sunset sky with dark ocean */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 120% 60% at 50% 25%, rgba(180, 140, 50, 0.5) 0%, transparent 70%),
              radial-gradient(ellipse 80% 40% at 30% 35%, rgba(150, 120, 40, 0.4) 0%, transparent 60%),
              radial-gradient(ellipse 100% 50% at 70% 30%, rgba(160, 130, 45, 0.35) 0%, transparent 65%),
              radial-gradient(ellipse 60% 30% at 50% 40%, rgba(200, 160, 60, 0.25) 0%, transparent 50%),
              linear-gradient(
                to bottom,
                #3d3210 0%,
                #4a3a15 8%,
                #5c4a1a 15%,
                #6b5520 22%,
                #7a6025 28%,
                #6b5520 35%,
                #5a4818 42%,
                #4a3a12 50%,
                #3a2e0e 58%,
                #2a220a 65%,
                #1e1808 72%,
                #151005 80%,
                #0e0a03 88%,
                #080602 95%,
                #050401 100%
              )
            `,
          }}
        />
        {/* Cloud-like noise texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(ellipse 40% 20% at 20% 30%, rgba(200, 170, 80, 0.5) 0%, transparent 100%),
              radial-gradient(ellipse 35% 15% at 60% 25%, rgba(180, 150, 60, 0.4) 0%, transparent 100%),
              radial-gradient(ellipse 50% 25% at 80% 35%, rgba(170, 140, 50, 0.35) 0%, transparent 100%),
              radial-gradient(ellipse 30% 12% at 40% 38%, rgba(190, 160, 70, 0.3) 0%, transparent 100%),
              radial-gradient(ellipse 45% 18% at 15% 42%, rgba(160, 130, 45, 0.25) 0%, transparent 100%),
              radial-gradient(ellipse 55% 22% at 75% 28%, rgba(175, 145, 55, 0.3) 0%, transparent 100%)
            `,
          }}
        />
        {/* Light beam from center-top */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 30% 50% at 50% 20%, rgba(220, 190, 100, 0.15) 0%, transparent 100%)
            `,
          }}
        />
        {/* Dark bottom vignette (ocean) */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to top, rgba(5, 4, 1, 0.95) 0%, rgba(5, 4, 1, 0.7) 25%, transparent 55%)
            `,
          }}
        />
      </div>

      {/* Main content container - centered vertically */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
        {/* Centered content block */}
        <div className="w-full">
          {/* Main content grid - 2 columns */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-7 items-center w-full">
            {/* Left - Text */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                <span className="text-gradient-gold">CÓDIGO DIVINO</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 leading-snug">
                Comprende la Biblia de Principio a Fin con Claridad, Profundidad y Poder Espiritual
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Un estudio visual y didáctico que revela los misterios y enseñanzas de toda la Biblia de una manera clara, organizada y accesible para todos.
              </p>

              {/* CTA */}
              <a href="https://hotm.io/codigodivino-psa" className="inline-block">
                <button className="cta-button text-white font-bold text-lg sm:text-xl px-10 py-5 rounded-2xl shadow-2xl animate-pulse-glow w-full sm:w-auto">
                  ¡QUIERO MI CÓDIGO DIVINO!
                </button>
              </a>
              <p className="text-gray-400 text-sm mt-4 flex items-center justify-center lg:justify-start gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                Compra 100% segura · Acceso inmediato
              </p>
            </div>

            {/* Right - Book Image */}
            <div className="relative flex justify-center order-1 lg:order-2">
              <div className="animate-float relative">
                {/* Golden glow behind the book */}
                <div className="absolute inset-0 bg-gold-500/20 blur-[80px] rounded-full scale-75" />
                <img
                  src="https://lh3.googleusercontent.com/d/10HMvmV943c7swFREFnopggFkfHTsJkox"
                  alt="Código Divino - Ebook"
                  className="relative w-full max-w-md lg:max-w-lg drop-shadow-[0_20px_60px_rgba(234,179,8,0.35)]"
                />
              </div>
            </div>
          </div>

          {/* Social proof - centered below the grid */}
          <div className="mt-12 text-center">
            {/* 5 stars - 15px above the social proof text */}
            <div className="flex justify-center gap-1 mb-[15px]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-7 h-7 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="inline-flex items-center gap-3">
              <p className="text-white font-bold text-lg">+4,000 cristianos</p>
              <p className="text-gray-400 text-base">ya transformaron su estudio bíblico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
