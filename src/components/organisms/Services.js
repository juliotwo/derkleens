'use client';
import { formatNumber } from '@/utils/amounts';
import Button from '../atoms/Button';
import { useContext } from 'react';
import { CartContext } from 'ui-old-version';
import { productsData } from '@/data';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const servicesData = [
  {
    title: 'Professional Team',
    image: '/images/about-1.jpg',
    description:
      'We have a highly skilled and dedicated professional team committed to delivering high-quality educational experiences. Our experts in business leadership, technological innovation, and financial process efficiency bring extensive experience and specialized knowledge to their respective fields.',
  },
  {
    title: 'Creative and Interactive',
    image: '/images/about-2.jpg',
    description:
      'We stand out by offering interactive and creative courses that go beyond traditional lecture-style sessions. We believe that learning should be engaging, dynamic, and hands-on. Our courses incorporate a variety of interactive elements, such as group discussions, case studies, simulations, and practical exercises. Participants are encouraged to actively participate, ask questions, and collaborate with their peers, fostering a dynamic learning environment.',
  },
];

const Services = ({ isHome = true }) => {
  const { handleAddOrRemoveProduct, validateProductInCart } =
    useContext(CartContext);
  const navigation = useRouter();

  return (
    <>
      {isHome && (
        <section className='bg-white min-h-screen py-28 flex items-center justify-center'>
          <div className='container mx-auto px-4 w-full h-full flex flex-col justify-center'>
            <div className='flex flex-col gap-5 h-full'>
              {servicesData.map((item, i) => (
                <div
                  className='flex items-center gap-10 bg-black text-white'
                  key={i}
                >
                  <Image
                    src={item.image}
                    width={500}
                    height={500}
                    alt='About'
                  />
                  <div className='flex flex-col h-full w-full p-10'>
                    <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold'>
                      {item.title}
                    </h1>

                    <p className='mt-10'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Shop */}
      <div className='bg-green-400'>
        <section
          id='courses'
          className='flex flex-col container mx-auto px-4 min-h-screen justify-center py-28'
        >
          <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase text-white'>
            Our Products
          </h1>

          <div className='w-full grid grid-cols-4 gap-5 mt-10'>
            {productsData
              .filter((item) => parseFloat(item.price) > 60)
              .map((item, i) => {
                const isAdded = validateProductInCart(item.id);

                return (
                  <div
                    className='bg-white flex flex-col rounded-xl shadow-lg shadow-green-500'
                    key={i}
                  >
                    <Image
                      // onClick={() => navigation.push(`/product/${item.id}`)}
                      src={item.image}
                      alt='course image'
                      width={400}
                      height={400}
                      className='w-full h-60 object-cover rounded-t-xl hover:cursor-pointer hover:opacity-90'
                    />
                    <div className='flex flex-col w-full p-5 gap-1 flex-1'>
                      <h1 className='text-sm font-medium uppercase'>
                        {item.name}
                      </h1>
                      <div className='flex-1'>
                        <p className='text-[10px]'>{item.description}</p>
                      </div>
                      <h2 className='font-bold text-sm my-2 text-right'>
                        {item.price} USD
                      </h2>

                      <Button
                        className={`mt-2 ${isAdded ? 'bg-red-500' : ''}`}
                        label={
                          isHome
                            ? 'Get a Quote'
                            : isAdded
                            ? 'Remove from cart'
                            : 'Add to cart'
                        }
                        onClick={() => {
                          if (isHome) {
                            navigation.push(`/contact`);
                            return;
                          }
                          handleAddOrRemoveProduct(item.id);
                        }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
        {!isHome && (
          <section
            id='courses'
            className='flex flex-col container mx-auto px-4 min-h-screen justify-center py-28'
          >
            <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase text-white'>
              Our Additionals
            </h1>

            <div className='w-full grid grid-cols-4 gap-5 mt-10'>
              {productsData
                .filter((item) => parseFloat(item.price) < 60)
                .map((item, i) => {
                  const isAdded = validateProductInCart(item.id);

                  return (
                    <div
                      className='bg-white flex flex-col rounded-xl shadow-lg shadow-green-500'
                      key={i}
                    >
                      <Image
                        // onClick={() => navigation.push(`/product/${item.id}`)}
                        src={item.image}
                        alt='course image'
                        width={400}
                        height={400}
                        className='w-full h-60 object-cover rounded-t-xl hover:cursor-pointer hover:opacity-90'
                      />
                      <div className='flex flex-col w-full p-5 gap-1 flex-1'>
                        <h1 className='text-sm font-medium uppercase'>
                          {item.name}
                        </h1>
                        <div className='flex-1'>
                          <p className='text-[10px]'>{item.description}</p>
                        </div>
                        <h2 className='font-bold text-sm my-2 text-right'>
                          {item.price} USD
                        </h2>

                        <Button
                          className={`mt-2 ${isAdded ? 'bg-red-500' : ''}`}
                          label={
                            isHome
                              ? 'Get a Quote'
                              : isAdded
                              ? 'Remove from cart'
                              : 'Add to cart'
                          }
                          onClick={() => {
                            if (isHome) {
                              navigation.push(`/contact`);
                              return;
                            }
                            handleAddOrRemoveProduct(item.id);
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Services;
