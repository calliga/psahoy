export default function Benefits() {
  const benefits = [
    {
      icon: '📖',
      title: 'Comprensión profunda',
      desc: 'Entenderás la narrativa bíblica desde Génesis hasta Apocalipsis de forma visual y ordenada.',
    },
    {
      icon: '🧠',
      title: 'Memorización efectiva',
      desc: 'Bosquejos visuales que te ayudan a retener y recordar las enseñanzas clave.',
    },
    {
      icon: '🎯',
      title: 'Aplicación práctica',
      desc: 'Cada estudio incluye reflexiones y aplicaciones para tu vida diaria.',
    },
    {
      icon: '🙏',
      title: 'Crecimiento espiritual',
      desc: 'Devocionales y oraciones que fortalecen tu relación con Dios cada día.',
    },
    {
      icon: '👨‍🏫',
      title: 'Herramienta de enseñanza',
      desc: 'Perfecto para preparar clases, prédicas y estudios bíblicos grupales.',
    },
    {
      icon: '📱',
      title: 'Acceso desde cualquier dispositivo',
      desc: 'Material 100% digital, disponible en tu celular, tablet o computadora.',
    },
  ];

  return (
    <section className="relative py-20 bg-dark-divine overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-mono-highlight text-gold-400 text-sm uppercase tracking-widest mb-3">VENTAJAS EXCLUSIVAS</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ventajas de usar{' '}
            <span className="text-gradient-gold">CÓDIGO DIVINO</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="group bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-6 hover:border-gold-500/40 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gold-300 mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
