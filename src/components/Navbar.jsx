import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-tech-blue">NeuroCode</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-tech-blue">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-tech-blue">Serviços</Link>
            <Link to="/about" className="text-gray-700 hover:text-tech-blue">Sobre</Link>
            <Link to="/contact" className="text-gray-700 hover:text-tech-blue">Contato</Link>
            <button className="bg-tech-blue text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Área do Cliente
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-tech-blue"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-tech-blue">Home</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-tech-blue">Serviços</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-tech-blue">Sobre</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-tech-blue">Contato</Link>
            <button className="w-full text-left px-3 py-2 bg-tech-blue text-white rounded-md hover:bg-blue-700">
              Área do Cliente
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}