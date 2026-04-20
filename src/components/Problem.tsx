export default function Problem() {
  const problems = [
    {
      emoji: '😰',
      text: '¿Te sientes perdido al intentar leer y entender la Biblia?',
    },
    {
      emoji: '😔',
      text: '¿Te frustra no saber cómo interpretar los versículos correctamente?',
    },
    {
      emoji: '😩',
      text: '¿Has querido enseñar la Palabra pero no sabes cómo hacerlo de forma clara?',
    },
    {
      emoji: '😓',
      text: '¿Sientes que lees pero no retienes ni aplicas lo que aprendes?',
    },
    {
      emoji: '😞',
      text: '¿Te gustaría tener un estudio organizado y visual, pero no encuentras el recurso adecuado?',
    },
  ];

  return (
    <section className="relative py-20 bg-parchment overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 mb-6 leading-tight">
            ¿Te has sentido perdido al leer la{' '}
            <span className="text-gradient-gold">Biblia</span>?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Muchos creyentes luchan con la falta de disciplina y claridad. Intentan leer la Biblia pero se frustran por no saber cómo entenderla o aplicarla.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gold-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{problem.emoji}</div>
              <p className="text-gray-800 font-medium leading-relaxed">{problem.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-navy-800 to-navy-700 rounded-3xl p-8 sm:p-12 text-white max-w-3xl mx-auto shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              <span className="text-gold-400">CÓDIGO DIVINO</span> es la solución
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Es la guía visual que te toma de la mano y te acompaña a través de cada etapa del conocimiento bíblico. Diseñada para que cualquier persona pueda entender, memorizar y aplicar la Palabra de Dios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
