export default function WhatIncludes() {
  const books = [
    {
      title: '170 Bosquejos del Libro de Josué',
      description: 'Resúmenes temáticos con enseñanzas, aplicaciones y oraciones que te guiarán por todo el libro de Josué de forma clara y visual.',
      image: 'https://lh3.googleusercontent.com/d/1yG9g5bCt0Z2bTLDGRf7JYz9lm1BRV9-2',
    },
    {
      title: '30 Días de Oración con Versículos del Pentateuco',
      description: 'Una guía devocional para fortalecer tu vida de oración durante 30 días, basada en los cinco primeros libros de la Biblia.',
      image: 'https://lh3.googleusercontent.com/d/1_7dFmU90qfufHjsGH2fbT7RyE2g8afkN',
    },
    {
      title: 'Génesis - Explicado Versículo por Versículo',
      description: 'Estudio profundo, práctico y espiritual de cada versículo del libro de Génesis, con reflexiones y aplicaciones diarias.',
      image: 'https://lh3.googleusercontent.com/d/1lXmbGwKEcepEDHu-5Qbx2tPqYuaz7GZk',
    },
    {
      title: 'Éxodo - Explicado Versículo por Versículo',
      description: 'Comprensión clara y edificante del mensaje de Éxodo, explicado de forma accesible para todo lector.',
      image: 'https://lh3.googleusercontent.com/d/1iAdImalXxyeuG0tsb-3UNhSRhRuEgTey',
    },
    {
      title: 'Levítico - Explicado Versículo por Versículo',
      description: 'Guía espiritual para entender el propósito de las leyes, ofrendas y enseñanzas de Levítico, aplicadas a la vida moderna.',
      image: 'https://lh3.googleusercontent.com/d/1kG9npl_hBRy5VcsV0aJ5kIIFYHbkDifM',
    },
  ];

  return (
    <section className="relative py-20 bg-parchment overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-mono-highlight text-gold-700 text-sm uppercase tracking-widest mb-3">CONTENIDO COMPLETO</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 mb-6 leading-tight">
            ¿Qué incluye{' '}
            <span className="text-gradient-gold">CÓDIGO DIVINO</span>?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Recibirás una biblioteca espiritual completa, compuesta por estudios visuales, devocionales y explicaciones versículo por versículo de los principales libros de la Biblia.
          </p>
        </div>

        <div className="space-y-5 sm:space-y-6">
          {books.map((book, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-4 sm:gap-5 md:gap-6 bg-white/65 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 border border-gold-200/60 shadow-md hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-28 sm:h-32 md:h-36 w-auto drop-shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-navy-900 mb-2">{book.title}</h3>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{book.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
