import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Pega o ano atual automaticamente

  return (
    <footer className="w-full bg-white py-15 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          {/* Col 1 - copyright and cnpj */}
          <div className="flex-1 text-center md:text-left flex flex-col justify-center py-6">
            <p className="text-[#003c8f] font-bold text-lg mb-1">
              &copy; {currentYear} LC Vistoria Veicular
            </p>
            <p className="text-gray-600 font-medium mb-1">
              Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              CNPJ: 43.265.171/0001-55
            </p>
          </div>

          {/* Col 2 - address */}
          <div className="flex-1 text-center flex flex-col items-center justify-center">
            <FaMapMarkerAlt className="text-[#003c8f] mb-2" size={20} />
            <p className="text-gray-700 font-medium mb-1">
              Rua 29 de Janeiro, nº 164
            </p>
            <p className="text-gray-700 font-medium mb-2">
              Centro de Trindade-PE
            </p>
            <p className="text-blue-900 font-bold text-lg tracking-wide">
              Faça-nos uma visita!
            </p>
          </div>

          {/* Col 3 - social media */}
          <div className="flex-1 flex justify-center md:justify-end items-center gap-4 md:pt-4">
            <a 
              href="https://www.instagram.com/lenildomontalvan/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#003c8f] p-3 rounded-full text-white hover:bg-blue-800 hover:scale-105 transition-all shadow-md"
              aria-label="Aceder ao nosso Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://wa.me/5587999526208" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#003c8f] p-3 rounded-full text-white hover:bg-blue-800 hover:scale-105 transition-all shadow-md"
              aria-label="Falar no WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200"></div>

        <div className="text-center text-sm text-gray-500">
          Desenvolvido por <span className="font-bold text-[#003c8f]">Suetone Carneiro</span>
        </div>

      </div>
    </footer>
  );
}