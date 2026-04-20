export default function Testimonials() {
  const testimonials = [
    {
      name: 'María G.',
      location: 'México',
      text: 'Nunca pensé que podría entender la Biblia de esta manera. Los bosquejos visuales son increíbles. ¡Mi vida de oración cambió completamente!',
      rating: 5,
    },
    {
      name: 'Carlos R.',
      location: 'Colombia',
      text: 'Soy pastor y este material me ha facilitado enormemente la preparación de mis prédicas. Mis congregantes están más comprometidos que nunca.',
      rating: 5,
    },
    {
      name: 'Ana L.',
      location: 'Argentina',
      text: 'Compré el Código Divino para estudiar con mi familia y ha sido una bendición. Mis hijos ahora aman las historias bíblicas y las entienden perfectamente.',
      rating: 5,
    },
    {
      name: 'Roberto M.',
      location: 'Perú',
      text: 'Los devocionales de 30 días cambiaron mi disciplina espiritual. Ahora tengo un orden para mi tiempo con Dios cada mañana. ¡Totalmente recomendado!',
      rating: 5,
    },
    {
      name: 'Patricia S.',
      location: 'Chile',
      text: 'El manual de interpretación bíblica me abrió los ojos. Antes cometía muchos errores al leer la Biblia. Ahora entiendo el contexto y la aplicación.',
      rating: 5,
    },
    {
      name: 'Luis F.',
      location: 'Ecuador',
      text: 'Increíble la calidad del material por ese precio. Los bonos valen mucho más de lo que pagué. Dios los bendiga por este trabajo tan hermoso.',
      rating: 5,
    },
  ];

  return (
    <section className="relative py-20 bg-dark-divine overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-mono-highlight text-gold-400 text-sm uppercase tracking-widest mb-3">TESTIMONIOS REALES</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Más de <span className="text-gradient-gold">4.000 cristianos</span> ya están transformando su estudio bíblico
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Testimonios reales de personas que ya viven una nueva experiencia espiritual gracias a este material.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-bold text-sm">{t.name}</p>
                <p className="text-gray-300 text-xs mt-1">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
