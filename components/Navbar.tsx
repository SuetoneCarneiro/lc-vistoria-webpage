'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex flex-col z-50">
      <nav className="bg-white w-full px-4 py-2 flex justify-between items-center shadow-sm relative">
        <Link href="/" className="flex-shrink-0">
          <Image 
            src="/img/lc-logo-bg-white.png" 
            alt="Logo LC Vistoria Veicular" 
            width={300} 
            height={180} 
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[#003c8f] font-bold hover:text-blue-700 transition">
            Início
          </Link>
          <Link href="/" className="text-[#003c8f] font-bold hover:text-blue-700 transition">
            Serviços
          </Link>
          <Link href="#sobre-nos" className="text-[#003c8f] font-bold hover:text-blue-700 transition">
            Sobre nós
          </Link>
          <a 
            href="https://wa.me/5587999526208" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-[#003c8f] text-white px-5 py-2.5 rounded-full font-bold hover:bg-blue-800 transition shadow-md"
          >
            <FaWhatsapp size={22} />
            Entrar em contato
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden text-[#003c8f] focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </nav>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6 pt-2 shadow-md flex flex-col gap-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-[#003c8f] font-bold text-lg">
            Início
          </Link>
          <Link href="#sobre-nos" onClick={() => setIsOpen(false)} className="text-[#003c8f] font-bold text-lg">
            Sobre nós
          </Link>
          <a 
            href="https://wa.me/5587999526208" 
            className="flex items-center justify-center gap-2 bg-[#003c8f] text-white px-5 py-3 mt-2 rounded-full font-bold text-lg"
          >
            <FaWhatsapp size={22} />
            Entrar em contato
          </a>
        </div>
      )}

      {/* Yellow advertisement */}
      <div className="bg-yellow-400 w-full py-2.5 text-center px-4">
        <span className="text-[#003c8f] font-extrabold uppercase tracking-wide text-sm md:text-base">
          Em breve em novo endereço!
        </span>
      </div>
    </header>
  );
}