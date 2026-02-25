import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Location() {
  const mapUrl = "https://maps.google.com/maps?width=100%25&height=600&hl=pt-BR&q=Lc%20Vistoria%20Veicular,%20Trindade%20-%20PE&t=&z=16&ie=UTF8&iwloc=B&output=embed";

  return (
    <section id="localizacao" className="w-full bg-white py-16 px-6 lg:py-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <h2 className="text-3xl md:text-4xl font-black text-[#003c8f] mb-4 text-center tracking-wide">
          Nossa Localização
        </h2>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-10 max-w-3xl font-medium leading-relaxed">
          Em breve em nova localização com mais espaço, conforto e comodidade para os nossos clientes!
        </p>
        { /* Map */ }
        <div className="w-full max-w-5xl aspect-square md:aspect-video lg:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100">
          <iframe 
            src={mapUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização LC Vistoria Veicular"
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="mt-8 flex items-center gap-3 bg-yellow-100/80 border border-yellow-300 text-gray-800 px-6 py-4 rounded-full shadow-sm">
          <FaMapMarkerAlt className="text-[#003c8f] flex-shrink-0" size={24} />
          <span className="font-semibold text-sm md:text-base">
            Ponto de referência: <span className="font-normal">Ao lado do colégio Paulo Guerra</span>
          </span>
        </div>

      </div>
    </section>
  );
}