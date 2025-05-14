import React from 'react';
import { FaShieldAlt, FaLaptopHouse, FaHeadset, FaLeaf } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: <FaShieldAlt className="h-8 w-8 text-tech-blue" />,
      title: "Segurança Cibernética",
      description: "Proteção avançada para dados remotos com Kaspersky e NordVPN."
    },
    {
      icon: <FaLaptopHouse className="h-8 w-8 text-tech-blue" />,
      title: "Infraestrutura Remota",
      description: "Soluções completas para home office com suporte especializado."
    },
    {
      icon: <FaHeadset className="h-8 w-8 text-tech-blue" />,
      title: "Suporte 24/7",
      description: "Assistência técnica disponível a qualquer momento."
    },
    {
      icon: <FaLeaf className="h-8 w-8 text-eco-green" />,
      title: "Sustentabilidade Digital",
      description: "Práticas eco-friendly para redução do consumo energético."
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Nossas Soluções</h2>
          <p className="mt-4 text-xl text-gray-600">
            Tecnologia inteligente para sua empresa remota
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;