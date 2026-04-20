export default function ForWho() {
  const benefits = [
    '✔️ Quieres comprender verdaderamente cada capítulo y versículo de la Biblia.',
    '✔️ Quieres enseñar a otros de manera didáctica y espiritual.',
    '✔️ Buscas una forma visual y práctica de memorizar historias y enseñanzas.',
    '✔️ Deseas aprender sobre la vida y enseñanzas de Jesús de forma clara.',
    '✔️ Te sientes frustrado al leer la Biblia sin entender su mensaje profundo.',
  ];

  return (
    <section className="relative py-20 bg-dark-divine overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Este material es para ti si:
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-gold-500/20 rounded-xl p-5 hover:bg-white/10 transition-all duration-300"
              >
                <p className="text-lg text-gray-200 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <img
              src="https://lh3.googleusercontent.com/d/1HJDdW6ji0FTxPTasQSFyv9NFGto6sbcy"
              alt="Personas estudiando la Biblia"
              className="w-full max-w-md drop-shadow-[0_15px_40px_rgba(234,179,8,0.2)] animate-float"
            />
          </div>
        </div>

        {/* Target audience */}
        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            ¿Quién puede usarlo?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: null, img: 'https://lh3.googleusercontent.com/d/14ZojTa3eTYVNWCXmWMzoKr3yxVFdnTK5', title: 'Profesores y Pastores', desc: 'Material perfecto para clases, prédicas y discipulados.' },
              { icon: null, img: 'https://lh3.googleusercontent.com/d/1Z1V82vCqHdfCHCu5l1ELcrOf6A-WnMal', title: 'Estudiantes y nuevos creyentes', desc: 'Una forma sencilla y poderosa de aprender.' },
              { icon: null, img: 'https://lh3.googleusercontent.com/d/1k2VEFm48bXUgE6eT0Pd1thiyWi0Q1TsG', title: 'Familias', desc: 'Enseña a tus hijos de forma visual y memorable.' },
              { icon: null, img: 'https://lh3.googleusercontent.com/d/10OcNEO5Oiy2u6Xgaolh0TUNdk7PfZM43', title: 'Líderes de célula', desc: 'Una herramienta que transforma vidas en grupos pequeños.' },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-b from-navy-700/50 to-navy-800/50 border border-gold-500/20 rounded-2xl p-6 text-center hover:border-gold-500/40 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  {item.img ? (
                    <img src={item.img} alt={item.title} style={{width: '235px', height: '235px'}} className="object-contain rounded-xl" />
                  ) : (
                    <span className="text-5xl">{item.icon}</span>
                  )}
                </div>
                <h4 className="text-lg font-bold text-gold-300 mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
