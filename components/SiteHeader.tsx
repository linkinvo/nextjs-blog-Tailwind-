import Link from 'next/link';
import { useState } from 'react';

export const SiteHeader = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap'>
        <button
          className='inline-flex p-3 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
                 <a href="#" className='block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800'>List your property</a>

            </Link>
            <Link href='/'>
                 <a href="#" className='mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800'>Trips</a>

            </Link>
            <Link href='/'>
              <a href="#" className='mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800'>Messages</a>

            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};