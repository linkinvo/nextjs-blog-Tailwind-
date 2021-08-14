import React from 'react';
import Image from 'next/image'

const Log = () => {
    return (
        <div>
            <header className='
                            flex 
                            justify-between 
                            text-2xl
                            border-b-2
                            border-blue-100
                            mb-6
            '>
                  <Image
              priority
              src="/images/google-brands.svg"
            //   className='animate-bounce w-6 h-6'
              height={60}
              width={28}
              alt="logo"
            />
            <ul className="flex justify-between ">
            <li><a href="" className="text-red-500">About</a></li>
                <li className="ml-8"><a href="">Blog</a></li>
                <li className="ml-8"><a href="">Contact</a></li>
            </ul>
            </header>
        </div>
    );
};

export default Log;