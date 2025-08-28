'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importamos los íconos que usaremos
import { LuTarget, LuEye, LuGem, LuArrowRight } from 'react-icons/lu';

// --- DATA: Añadí un ícono a cada objeto para que sea más fácil de manejar ---
const missions = [
  {
    icon: <LuTarget size={30} />,
    title: 'Mission',
    description:
      "Our mission at derkleens is to provide exceptional event preparation services to businesses, delivering seamless and memorable experiences that exceed our clients' expectations. We aim to be a reliable partner in creating successful corporate events that inspire, engage, and leave a lasting impact on attendees.",
  },
  {
    icon: <LuEye size={30} />,
    title: 'Vision',
    description:
      'Our vision is to become a leading global provider of event solutions, renowned for our innovation, professionalism, and commitment to delivering unparalleled value to our clients. We strive to continually raise the bar in event management by embracing emerging technologies, fostering creativity, and fostering strong partnerships with our clients and suppliers.',
  },
  {
    icon: <LuGem size={30} />,
    title: 'Values',
    description:
      'Excellence, Collaboration, Integrity, Innovation, Customer Focus, and making a positive Impact. We are committed to delivering excellence in every aspect of our work, from event planning and execution to customer service and client satisfaction. We believe in the power of collaboration and foster a culture of open communication, cooperation, and respect.',
  },
];

// --- CARD COMPONENT: Lógica de la tarjeta interactiva ---
// Lo definimos aquí mismo para mantener todo en un archivo.
const MissionCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='relative flex flex-col justify-start p-8 bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 cursor-pointer overflow-hidden min-h-[250px] transition-shadow duration-300'
    >
      {/* Contenido siempre visible */}
      <div className='flex items-center gap-4'>
        <div className='text-lime-500'>{icon}</div>
        <h3 className='text-2xl font-bold text-gray-800'>{title}</h3>
      </div>

      {/* --- Indicador UX de Interacción (aparece por defecto) --- */}
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className='flex items-center gap-2 text-lime-600 font-semibold mt-6'
          >
            <span>Read More</span>
            <LuArrowRight size={18} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Descripción Animada (aparece con hover) --- */}
      <AnimatePresence>
        {isHovered && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className='text-gray-600 mt-4 font-light text-left'
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- MAIN COMPONENT: La sección completa ---
const MissionsSection = () => {
  return (
    <section className='py-20 md:py-28 bg-gray-50' id='more'>
      <div className='container px-4 mx-auto'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold text-gray-800'>
            Our Core Principles
          </h2>
          <p className='mt-4 text-lg text-gray-500'>
            The foundation of everything we do at derkleens.
          </p>
        </motion.div>

        {/* --- Layout Mejorado: Una sola grilla responsiva --- */}
        <motion.div
          className='grid grid-cols-1 lg:grid-cols-3 gap-8'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }} // Animación escalonada
        >
          {missions.map((item, i) => (
            <MissionCard
              key={i}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionsSection;
