export default function Guarantee() {
  return (
    <section className="relative py-20 bg-dark-divine overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-green-500/5 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8 sm:p-12 text-center">
          {/* Shield image */}
          <img
            src="https://lh3.googleusercontent.com/d/1NQyV5qZei6Gn-lj092gBeGhSkKV2kt5C"
            alt="Garantía 7 días"
            className="mx-auto mb-6 object-contain"
            style={{ width: '250px', height: '200px' }}
          />

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
            Garantía Incondicional de{' '}
            <span className="text-green-400">7 Días</span>
          </h2>

          <p className="text-xl text-gold-200 font-semibold mb-4">
            ¿Aún tienes dudas? Tranquilo, tu compra está 100% protegida.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            Si por cualquier motivo el contenido que recibes no cumple con lo prometido, tienes hasta <strong className="text-white">7 días</strong> para solicitar el reembolso completo, sin preguntas ni complicaciones.
          </p>

          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Recuerda que tu acceso es de por vida, y constantemente añadimos nuevos materiales diseñados para fortalecer tu fe, tu ministerio y tu enseñanza en la Iglesia.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-5 py-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span className="text-green-300 text-sm font-medium">Reembolso total</span>
            </div>
            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-5 py-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span className="text-green-300 text-sm font-medium">Sin preguntas</span>
            </div>
            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-5 py-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span className="text-green-300 text-sm font-medium">Acceso de por vida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
