import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NeuroCode</h3>
            <p className="text-gray-400">
              Tecnologia Inteligente para Empresas Remotas
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Time</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Thiago Silva</li>
              <li>Silas Alvares</li>
              <li>Vinicius</li>
              <li>Davi</li>
              <li>Zack Lemos</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Serviços</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">Sobre</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Conecte-se</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NeuroCode. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;