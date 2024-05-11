'use client';
import {
  address,
  email,
  footerOptions,
  pageName,
  phoneNumber,
  phoneWhatsApp,
} from '@/data';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full bg-green-200 py-10 text-[10px] sm:text-sm'>
      <div className='flex flex-col container px-4 mx-auto gap-5'>
        <div className='flex justify-between items-center'>
          <p>{pageName} - Copyright © 2024 - All Rights Reserved</p>

          <Image
            alt='Visa mastercard'
            width={90}
            height={90}
            src={'/images/visaMaster.png'}
          />
        </div>

        <div className='flex flex-col gap-5 w-full'>
          <div className='flex gap-5 items-center'>
            {footerOptions.map((item, i) => (
              <Link
                href={item.href}
                className='font-medium hover:underline'
                key={i}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className='flex items-center gap-5'>
          <div className='flex gap-5 items-center'>
            <p>{email}</p>
            <p>{phoneNumber}</p>
          </div>{' '}
          <p>{address}</p>
        </div>
        <div className='flex items-center justify-between w-full mt-10'>
          <div className='flex gap-5 items-center'>
            <Image
              alt='Whatsapp'
              onClick={() => window.open(`https://wa.me/${phoneWhatsApp}`)}
              width={40}
              height={40}
              className='cursor-pointer'
              src={'/images/whatsapp.png'}
            />
            <Image
              alt='Instagram'
              width={40}
              height={40}
              className='cursor-pointer'
              src={'/images/instagram.png'}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
