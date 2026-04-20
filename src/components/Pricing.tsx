export default function Pricing() {
  const items = [
    { bonus: false, text: '170 Bosquejos del Libro de Josué' },
    { bonus: false, text: 'Éxodo - Versículo por Versículo' },
    { bonus: false, text: 'Génesis - Versículo por Versículo' },
    { bonus: false, text: 'Levítico - Versículo por Versículo' },
    { bonus: false, text: '30 Días de Oración' },
    { bonus: true, text: 'BONO 1: Los 10 Mandamientos' },
    { bonus: true, text: 'BONO 2: Los Milagros de Jesús' },
    { bonus: true, text: 'BONO 3: Historias Bíblicas para toda la familia' },
    { bonus: true, text: 'BONO 4: Devocionales de Poder' },
    { bonus: true, text: 'BONO 5: Manual de Interpretación Bíblica para Principiantes' },
  ];



  return (
    <section id="precio" className="relative py-20 bg-parchment overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="font-mono-highlight text-red-600 text-sm uppercase tracking-widest mb-3 animate-pulse">OFERTA LIMITADA · ÚLTIMAS UNIDADES DISPONIBLES</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 mb-4 leading-tight">
            ¡Llévate TODO esto por solo
          </h2>
        </div>

        {/* Pricing Card */}
        <div className="bg-gradient-to-b from-navy-800 to-navy-900 rounded-3xl overflow-hidden shadow-2xl border border-gold-500/30">
          {/* Header */}
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 py-4 text-center">
            <p className="font-mono-highlight text-navy-900 font-bold uppercase tracking-wider text-sm">
              PRECIO ESPECIAL POR TIEMPO LIMITADO
            </p>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
            {/* Price */}
            <div className="text-center mb-8 lg:mb-10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-gray-400 text-2xl line-through">$49.50 USD</span>
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-gold-400 text-2xl font-bold">$</span>
                <span className="text-7xl sm:text-8xl font-extrabold text-gradient-gold">9</span>
                <span className="text-gold-400 text-4xl font-bold">.90</span>
                <span className="text-gray-400 text-lg ml-2">USD</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">(Puedes pagar en tu moneda local)</p>
            </div>

            <div className="text-center mb-6 lg:mb-8">
              <p className="text-white font-bold text-lg sm:text-xl">
                Al acceder hoy a CÓDIGO DIVINO, recibirás:
              </p>
            </div>

            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(320px,430px)] xl:grid-cols-[minmax(0,1fr)_460px] gap-8 lg:gap-10 items-start mb-9">
              <div className="min-w-0">
                <div className="space-y-2.5 text-center lg:text-left">
                  {items.map((item, i) => (
                    <div key={i} className="leading-snug">
                      <span className={`text-[15px] sm:text-base ${item.bonus ? 'text-gold-300' : 'text-white'}`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center lg:justify-end lg:self-center">
                <img
                  src="https://lh3.googleusercontent.com/d/15OXDolmdu-9VOQAitch1IA0Uvnbuvf8h"
                  alt="Código Divino"
                  className="w-full max-w-[320px] sm:max-w-[350px] lg:max-w-[400px] xl:max-w-[430px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 whitespace-nowrap">
                <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                <span className="text-gray-300 text-sm">Acceso seguro y 100% digital</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 whitespace-nowrap">
                <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg>
                <span className="text-gray-300 text-sm">Compatible con cualquier dispositivo</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 whitespace-nowrap">
                <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                <span className="text-gray-300 text-sm">Entrega inmediata al correo electrónico</span>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a href="https://hotm.io/codigodivino-psa" className="inline-block w-full sm:w-auto">
                <button className="cta-button text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl animate-pulse-glow w-full sm:w-auto">
                  ¡SÍ, QUIERO ACCEDER AHORA!
                </button>
              </a>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                  Compra segura
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Acceso inmediato
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" /><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" /></svg>
                  Tarjeta / Débito / Digital
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
