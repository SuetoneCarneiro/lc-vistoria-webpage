import Image from 'next/image';

export default function About() {
  return (
    <section id="sobre-nos" className="w-full bg-[#003c8f] py-16 px-6 lg:py-24 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 order-1">
          <h2 className="text-3xl md:text-4xl font-black tracking-wide mb-2">
            Sobre Nós
          </h2>
          
          {/* Paragraphs container */}
          <div className="flex flex-col gap-5 text-lg md:text-xl leading-relaxed font-medium text-blue-50/90">
            <p>
              Somos uma empresa credenciada ao DETRAN-PE e temos como objetivo agilizar os processos de vistoria veicular e facilitar a vida dos nossos clientes.
            </p>
            <p>
              Não é necessário agendar, pegar filas ou esperar por horas. Em poucos minutos entregamos o seu laudo.
            </p>
            <p>
              Atendemos Trindade e toda a região do Araripe, com agilidade, qualidade e preço justo. Sem surpresas, apenas o valor tabelado pelo DETRAN!
            </p>
            <p>
                LC Vistoria Veicular: desde 2022, a escolha certa para quem busca confiança e eficiência em vistoria veicular na região do Araripe!
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-1/2 flex flex-col items-center order-2">
          
          {/* Image container */}
          <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-blue-800/50 flex items-center justify-center group">

            <Image
              src="/img/foto-blusa-branca.jpg"
              alt="Sr. Lenildo Carneiro, organizador da LC Vistoria Veicular"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            /> 
        
          </div>
          
          {/* Image description */}
          <p className="mt-5 text-lg md:text-xl font-medium tracking-wide text-center lg:text-right">
            <span className="text-blue-200">Organização:</span> <span className="text-yellow-400 font-bold">Lenildo Carneiro</span>
          </p>
        </div>

      </div>
    </section>
  );
}