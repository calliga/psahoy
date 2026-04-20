export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5 pt-10 pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gold-400 font-bold text-xl mb-4" style={{ fontFamily: "'Figtree', sans-serif" }}>
            CÓDIGO DIVINO
          </p>
          <p className="text-gray-300 text-sm mb-4 max-w-xl mx-auto">
            Material digital para el estudio profundo de la Biblia. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 mb-6">
            <a href="https://hotmart.com/pt-br/legal/termos-de-uso" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Términos de Uso</a>
            <a href="https://hotmart.com/pt-br/legal/privacidade-de-dados" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Política de Privacidad</a>
            <a href="https://www.instagram.com/direct/t/18077087471229799" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Contacto</a>
          </div>
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Código Divino. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-xs mt-2 uppercase">
            Este producto es comercializado con el apoyo de Hotmart. La plataforma no realiza control editorial previo de los productos aquí comercializados.
          </p>
        </div>
      </div>
    </footer>
  );
}
