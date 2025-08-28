'use client';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import Button from '../atoms/Button';
import { navbarOptions, pageName } from '@/data';
import { twJoin } from 'tailwind-merge';

const Navbar = ({ isBlack = false, withCart = false }) => {
  return (
    <nav className='w-full py-4 text-sm bg-black'>
      <div
        className={twJoin(
          `container px-4 mx-auto flex justify-between items-center h-full`,
          'text-white '
        )}
      >
        <Link href='/' className='text-2xl 2xl:text-2xl font-bold uppercase'>
          {pageName}
        </Link>

        <div className='flex items-center gap-10'>
          <div className='py-3 text-xs px-10 flex gap-10 font-bold'>
            {navbarOptions.map((item) => (
              <Link
                href={item.href}
                className='uppercase hover:text-primary'
                key={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {withCart ? (
            <Link href='/my-cart'>
              <Button
                label={
                  <div className='flex gap-2 items-center'>
                    Cart <AiOutlineShoppingCart size={16} />
                  </div>
                }
                variant='primary'
                withShadow={false}
              />
            </Link>
          ) : (
            <GetAQuoteButton />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const GetAQuoteButton = () => {
  return (
    <Link href='/get-a-quote'>
      <Button label='Get a Quote' variant='primary' withShadow={false} />
    </Link>
  );
};
