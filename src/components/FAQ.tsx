import { useState } from 'react';

const faqs = [
  {
    question: '¿Cómo recibiré el material después de la compra?',
    answer: 'Una vez confirmado el pago, recibirás un correo electrónico con el acceso inmediato a todo el contenido digital. No necesitas esperar ni pagar envío. Todo es 100% online y accesible desde cualquier dispositivo.',
  },
  {
    question: '¿Y si el material no es lo que esperaba?',
    answer: 'No te preocupes. Tienes 7 días de garantía incondicional. Si el contenido no cumple tus expectativas, puedes solicitar tu reembolso total sin complicaciones.',
  },
  {
    question: '¿Necesito tener conocimientos previos de la Biblia para aprovechar el contenido?',
    answer: '¡Para nada! CÓDIGO DIVINO fue diseñado para todos: nuevos creyentes, estudiantes, líderes, padres o pastores. El lenguaje es claro, práctico y accesible.',
  },
  {
    question: '¿Por qué es tan económico? ¿Es un producto confiable?',
    answer: 'Queremos que miles de personas tengan acceso a este estudio sin barreras. El bajo precio no refleja baja calidad, sino una misión: facilitar el aprendizaje bíblico a todo cristiano comprometido. Más de 4.000 personas ya han confiado en nosotros.',
  },
  {
    question: '¿Puedo pagar en mi moneda local?',
    answer: 'Sí. Aunque el precio esté en USD, al momento de la compra podrás pagar automáticamente en tu moneda local, usando tarjeta de crédito, débito o billetera digital de forma segura.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 bg-parchment overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 mb-4 leading-tight">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gold-200/50 shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gold-50/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-bold text-navy-900 pr-4">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 flex-shrink-0 text-gold-600 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
