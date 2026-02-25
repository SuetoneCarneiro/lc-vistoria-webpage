import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full bg-white flex justify-center items-center py-16 px-6 lg:py-24">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        { /* Left side */ }
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#003c8f] leading-tight">
            Sua Vistoria Veicular Rápida e Segura
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Garanta a regularização do seu veículo com a <span className='font-bold'>LC Vistoria Veicular, empresa credenciada pelo DETRAN-PE em Trindade</span>! Atendemos clientes de toda a região do Araripe com confiança, agilidade e qualidade.
          </p>
          
          <a 
            href="https://wa.me/5587999526208" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 bg-[#003c8f] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition shadow-lg mt-4"
          >
            <FaWhatsapp size={26} />
            Entrar em contato
          </a>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full max-w-lg aspect-[4/3] bg-gray-100 rounded-2xl shadow-xl flex items-center justify-center border-2 border-gray-200">
            <Image 
                src="/img/caminhao1.jpg" 
                alt="Carro para vistoria" 
                width={600} 
                height={450} 
                className="rounded-2xl object-cover"
              /> 
            
          </div>
        </div>

      </div>
    </section>
  );
}