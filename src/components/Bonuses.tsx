export default function Bonuses() {
  const bonuses = [
    {
      number: 1,
      title: 'Los 10 Mandamientos: Historia y Aplicación Espiritual',
      desc: 'Descubre el origen, el significado profundo y cómo aplicar los mandamientos en la vida moderna. Una guía clara y reveladora para vivir según la voluntad de Dios.',
      image: 'https://lh3.googleusercontent.com/d/1y19XOyAY45b2V_gAGKapqjkEfGXIr7TK',
    },
    {
      number: 2,
      title: 'Los Milagros de Jesús',
      desc: 'Explora cada milagro realizado por el Señor: sanidades, prodigios y señales que siguen impactando vidas. Incluye contexto bíblico, reflexión y lección espiritual.',
      image: 'https://lh3.googleusercontent.com/d/1SM-m5sfTFmGFR4gZi8yn754qrP_PDxZq',
    },
    {
      number: 3,
      title: 'Historias Bíblicas para toda la familia',
      desc: 'Una colección visual y resumida de las historias más poderosas del Antiguo y Nuevo Testamento, ideal para enseñar a niños y adultos en casa o en la iglesia.',
      image: 'https://lh3.googleusercontent.com/d/1-3BBWlWHeg4mfZIoFoIn3UwcPuHxMTmw',
    },
    {
      number: 4,
      title: 'Devocionales de Poder: 30 días para profundizar tu fe',
      desc: 'Una serie de devocionales con reflexiones, versículos clave y oraciones para fortalecer tu conexión diaria con Dios.',
      image: 'https://lh3.googleusercontent.com/d/1lTzVtJcsmcWpZExn__fdLRk_iTJalpBD',
    },
    {
      number: 5,
      title: 'Manual de Interpretación Bíblica para Principiantes',
      desc: 'Una guía clara y práctica que te enseñará cómo interpretar correctamente los textos bíblicos, evitar errores comunes y aplicar los principios de hermenéutica de forma sencilla.',
      image: 'https://lh3.googleusercontent.com/d/1l5QlektKNedFpnZuChr7PkvZf1VE4T2s',
    },
  ];

  return (
    <section className="relative py-20 bg-parchment overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 mb-4 leading-tight">
            ¡BONOS EXCLUSIVOS POR{' '}
            <span className="text-red-600">TIEMPO LIMITADO</span>!
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Al adquirir <strong className="text-gold-700">CÓDIGO DIVINO</strong> hoy, recibirás totalmente <strong className="text-green-600">GRATIS</strong> estos 5 regalos exclusivos que complementarán tu estudio y crecimiento espiritual:
          </p>
        </div>

        <div className="space-y-6">
          {bonuses.map((bonus, i) => (
            <div
              key={i}
              className="flex flex-row items-center gap-4 sm:gap-6 bg-white/80 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-gold-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  style={{ minHeight: '170px', height: '170px', width: 'auto', maxWidth: '130px' }}
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-mono-highlight text-xs bg-green-600 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                    Bono {bonus.number}
                  </span>
                  <span className="text-sm text-gray-400 line-through">DE: $9.90</span>
                  <span className="text-sm font-bold text-green-600">POR: $0</span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{bonus.title}</h3>
                <p className="text-gray-600 leading-relaxed">{bonus.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-navy-800 to-navy-700 rounded-3xl p-8 text-white inline-block shadow-2xl">
            <p className="text-2xl sm:text-3xl font-bold mb-2">
              ¡Todo esto valorado en más de <span className="line-through text-gray-400">$49.50 USD</span>…
            </p>
            <p className="text-xl text-gold-300 font-bold">
              totalmente <span className="text-green-400 text-2xl">GRATIS</span> solo por tiempo limitado!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
