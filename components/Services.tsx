import { FaCheckCircle } from 'react-icons/fa';

export default function Services() {
  const servicesList = [
    "Transferência de propriedade",
    "Mudança de município",
    "Mudança de UF",
    "Mudança de categoria",
    "Segunda via de CRV (DUT)",
    "Segunda via de CRLV (DUAL)",
    "Vistoria Espectral (Cautelar)",
    "E muito mais..."
  ];

  return (
    <section id="servicos" className="w-full bg-[#003c8f] py-16 px-6 lg:py-24 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-black text-white mb-10 text-center tracking-wide">
          Nossos Serviços
        </h2>
        
        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 bg-white/10 p-5 rounded-xl border border-white/5 hover:bg-white/20 transition-all duration-300 shadow-sm"
            >
              <FaCheckCircle className="text-yellow-400 flex-shrink-0" size={24} />
              <span className="text-white font-medium text-lg leading-tight">
                {service}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}