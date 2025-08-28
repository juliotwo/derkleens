// /components/AboutSection.js

'use client'; // Necesario para Framer Motion y hooks

import { motion } from 'framer-motion'; // Importamos motion
import { pageName } from '@/data';
import Image from 'next/image';

const AboutSection = () => {
  // --- Variantes de Animación ---

  // Variante para el contenedor principal que orquesta la animación de sus hijos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Crea un retraso entre la animación de los hijos
      },
    },
  };

  // Variante para los elementos hijos (texto e imagen) para que aparezcan desde abajo
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id='about'
      // Fondo verde muy claro para toda la sección
      className='flex min-h-screen w-full items-center justify-center bg-green-50/70'
    >
      {/* Contenedor principal ahora es un 'motion.div' para controlar las animaciones */}
      <motion.div
        className='container mx-auto grid grid-cols-1 items-center gap-8 p-4 md:grid-cols-2 lg:gap-12'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible' // La animación se activa cuando el componente entra en la vista
        viewport={{ once: true, amount: 0.3 }} // Se activa una vez al ver el 30% del componente
      >
        {/* --- Columna de Texto Animada --- */}
        <motion.div
          variants={itemVariants} // Aplica la animación de item
          className='flex h-full flex-col justify-center rounded-lg bg-white p-8 shadow-md md:order-first lg:p-12'
        >
          <motion.h2
            variants={itemVariants} // Anima también el título
            className='text-2xl font-bold uppercase text-green-900 sm:text-3xl lg:text-4xl'
          >
            About Us
          </motion.h2>
          <motion.div
            variants={itemVariants} // Y el párrafo
            className='mt-6 text-base text-gray-700'
          >
            <p>
              At {pageName}, we are passionate about driving business
              development and growth through high-impact educational
              experiences. We believe in the power of knowledge and networking
              to empower individuals and organizations to thrive in today&apos;s
              dynamic business landscape...
            </p>
          </motion.div>
        </motion.div>

        {/* --- Columna de Imagen Animada --- */}
        <motion.div
          variants={itemVariants} // Aplica la animación de item
          className='relative h-80 w-full overflow-hidden rounded-lg shadow-lg md:order-last md:h-[500px]'
        >
          <Image
            src='/images/about.jpg'
            alt='Team collaborating in a modern office with green plants'
            fill
            className='object-cover transition-transform duration-500 hover:scale-105'
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
