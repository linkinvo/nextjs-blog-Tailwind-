import Link from 'next/link'
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import {SiteHeader} from './../components/SiteHeader';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className="min-h-screen bg-gray-200 antialiased">
      <header className="bg-gray-900 ">
        <div className='flex justify-between  px-4 py-3'>
          <div>
            <svg className="h-8 w-auto" viewBox="0 0 185 32" fill='none' xmlns="http://www.w3.org/2000/svg">
              <path d="M121.09 28.336C123.442 28.336 125.482 27.088 126.514 25.216L123.826 23.68C123.346 24.664 122.314 25.264 121.066 25.264C119.218 25.264 117.85 23.896 117.85 22C117.85 20.08 119.218 18.712 121.066 18.712C122.29 18.712 123.322 19.336 123.802 20.32L126.466 18.76C125.482 16.912 123.442 15.664 121.09 15.664C117.442 15.664 114.754 18.424 114.754 22C114.754 25.576 117.442 28.336 121.09 28.336Z" fill="#A3BFFA" />
              <path d="M137.084 16V17.416C136.22 16.336 134.924 15.664 133.172 15.664C129.98 15.664 127.34 18.424 127.34 22C127.34 25.576 129.98 28.336 133.172 28.336C134.924 28.336 136.22 27.664 137.084 26.584V28H140.18V16H137.084ZM133.748 25.384C131.852 25.384 130.436 24.016 130.436 22C130.436 19.984 131.852 18.616 133.748 18.616C135.668 18.616 137.084 19.984 137.084 22C137.084 24.016 135.668 25.384 133.748 25.384Z" fill="#A3BFFA" />
              <path d="M149.851 18.976V16H147.139V12.64L144.043 13.576V16H141.955V18.976H144.043V23.968C144.043 27.208 145.507 28.48 149.851 28V25.192C148.075 25.288 147.139 25.264 147.139 23.968V18.976H149.851Z" fill="#A3BFFA" />
              <path d="M153.57 14.56C154.626 14.56 155.49 13.696 155.49 12.664C155.49 11.632 154.626 10.744 153.57 10.744C152.538 10.744 151.674 11.632 151.674 12.664C151.674 13.696 152.538 14.56 153.57 14.56ZM152.034 28H155.13V16H152.034V28Z" fill="#A3BFFA" />
              <path d="M163.676 28.336C167.204 28.336 170.036 25.576 170.036 22C170.036 18.424 167.204 15.664 163.676 15.664C160.148 15.664 157.34 18.424 157.34 22C157.34 25.576 160.148 28.336 163.676 28.336ZM163.676 25.312C161.852 25.312 160.436 23.944 160.436 22C160.436 20.056 161.852 18.688 163.676 18.688C165.524 18.688 166.94 20.056 166.94 22C166.94 23.944 165.524 25.312 163.676 25.312Z" fill="#A3BFFA" />
              <path d="M178.886 15.664C177.278 15.664 176.03 16.264 175.31 17.344V16H172.214V28H175.31V21.52C175.31 19.432 176.438 18.544 177.95 18.544C179.342 18.544 180.326 19.384 180.326 21.016V28H183.422V20.632C183.422 17.44 181.43 15.664 178.886 15.664Z" fill="#A3BFFA" />
              <path d="M61.0634 28.0001H64.8314L67.9754 16.9121L71.1434 28.0001H74.9114L79.6154 11.2001H76.1354L72.9194 23.6561L69.3914 11.2001H66.5594L63.0554 23.6561L59.8394 11.2001H56.3594L61.0634 28.0001Z" fill="white" />
              <path d="M85.6742 28.3361C89.2023 28.3361 92.0342 25.5761 92.0342 22.0001C92.0342 18.4241 89.2023 15.6641 85.6742 15.6641C82.1462 15.6641 79.3382 18.4241 79.3382 22.0001C79.3382 25.5761 82.1462 28.3361 85.6742 28.3361ZM85.6742 25.3121C83.8503 25.3121 82.4342 23.9441 82.4342 22.0001C82.4342 20.0561 83.8503 18.6881 85.6742 18.6881C87.5222 18.6881 88.9383 20.0561 88.9383 22.0001C88.9383 23.9441 87.5222 25.3121 85.6742 25.3121Z" fill="white" />
              <path d="M97.3083 18.0641V16.0001H94.2122V28.0001H97.3083V22.2641C97.3083 19.7441 99.3482 19.0241 100.956 19.2161V15.7601C99.4442 15.7601 97.9323 16.4321 97.3083 18.0641Z" fill="white" />
              <path d="M113.831 28.0001L108.863 21.9281L113.687 16.0001H109.991L105.863 21.2801V11.2001H102.767V28.0001H105.863V22.5521L110.231 28.0001H113.831Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M43.9111 12.6044L36.2129 8.15965V28.8051H45.2129V30.8051H1.21289V28.8051H5.21289V16.0858L1.48507 17.0177L1 15.0774L22.0896 9.80505H25.2119C24.8673 10.6225 24.6383 11.4844 24.5316 12.3637L24.0495 16.3386L29.2129 13.3574V28.8051H34.2129V8.16087L26.5166 12.6045C26.7383 10.7768 27.6279 9.04857 29.082 7.80504H24.9629C26.3311 5.98338 28.5098 4.80504 30.9639 4.80504C31.1807 4.80504 31.3965 4.81431 31.6084 4.8325L26.0166 1.60386C28.1123 0.710432 30.5879 0.779158 32.7129 2.00609C33.752 2.60582 34.5938 3.41673 35.2139 4.35325C35.834 3.41673 36.6748 2.60582 37.7139 2.00609C39.8389 0.779158 42.3154 0.710432 44.4111 1.60386L38.8184 4.8325C39.0312 4.81431 39.2471 4.80504 39.4648 4.80504C41.918 4.80504 44.0967 5.98338 45.4648 7.80504H41.3447C42.7998 9.04857 43.6895 10.7768 43.9111 12.6044ZM25.2129 28.8051V18.8051H19.2129V28.8051H25.2129ZM14.2129 20.8051C14.2129 21.9096 13.3175 22.8051 12.2129 22.8051C11.1083 22.8051 10.2129 21.9096 10.2129 20.8051C10.2129 19.7005 11.1083 18.8051 12.2129 18.8051C13.3175 18.8051 14.2129 19.7005 14.2129 20.8051Z" fill="#A3BFFA" />
            </svg>
          </div>
          <div className="flex">
            <SiteHeader/>
            {/* <button className='px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white'>
              <svg className='h-6 w-6 fill-current' viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447716 2 0 1.55228 0 1ZM0 7C0 6.44772 0.447715 6 1 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H1C0.447716 8 0 7.55228 0 7ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447716 14 1 14H17C17.5523 14 18 13.5523 18 13C18 12.4477 17.5523 12 17 12H1Z" fill="#A0AEC0" />
              </svg>
            </button> */}
          </div>
        </div>
        <nav>
          {/* <div className='px-2 pt-2 pb-5 border-b border-gray-800'>
            <a href="#" className='block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800'>List your property</a>
            <a href="#" className='mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800'>Trips</a>
            <a href="#" className='mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800'>Messages</a>
          </div> */}
          <div className='px-5 py-5'>
            <div className='flex items-center'>
              <img className='h-10 w-10 object-cover rounded-full border-2 border-gray-600' src="images/avatar.png" alt="avatar" />
              <span className='ml-4 font-semibold text-gray-200'>Isla Schoger</span>
            </div>
            <div className='mt-5'>
              <a href="#" className='block text-gray-400 hover:text-white'>Account Settings</a>
              <a href="#" className='mt-3 block text-gray-400 hover:text-white'>Support</a>
              <a href="#" className='mt-3 block text-gray-400 hover:text-white'>Sign out</a>
            </div>
          </div>
        </nav>
      </header>
      <section className="flex justify-between bg-gray-800 px-4 py-3">
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
            <svg className='h-6 w-6 fill-current text-gray-600' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3199 12.9056L15.4165 14.0023C15.8277 13.9795 16.2465 14.1252 16.5607 14.4393L19.5607 17.4393C20.1464 18.0251 20.1464 18.9749 19.5607 19.5607C18.9749 20.1464 18.0251 20.1464 17.4393 19.5607L14.4393 16.5607C14.1252 16.2465 13.9795 15.8277 14.0023 15.4165L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" fill="#A0AEC0" />
            </svg>
          </div>
          <input className="bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10 pr-4 py-2" placeholder="Search by keywords" />
        </div>
        <button className='inline-flex bg-gray-700 hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pl-3 pr-4 py-1.5'>
          <svg className='h-6 w-6 fill-current text-gray-500' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM10 17C9.44772 17 9 17.4477 9 18C9 18.5523 9.44772 19 10 19H14C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17H10Z" />
          </svg>
          <span className='ml-1 text-white font-medium'>Filters</span>
        </button>
      </section>
      <main className='px-4 py-6'>
        <h3 className='text-gray-900 text-xl'>Los Angeles</h3>
        <p className='text-gray-600'>Live like the stars in these luxurious Southern California estates.</p>
        <div className='mt-6'>
          <div>
            <div>
              <img className='rounded-lg shadow-md h-64' src="images/modern-home.jpg" alt="modern-home" />
            </div>
            <div className='relative px-4 -mt-16'>
              <div className='bg-white rounded-lg px-4 py-4 shadow-lg'>
                <div className='flex'>
                  {/* style doesn't work(teal) teal-200 text-teal-800 */}
                  <span className="inline-block px-2 py-1 leading-none bg-green-200 text-green-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                    Plus
                  </span>
                  <div className='ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide'>
                    3 beds &bull; 2 baths
                  </div>
                </div>
                <h4 className='mt-1 text-gray-900 font-semibold text-lg'>Modern home in city center</h4>
                <div className='mt-1'>
                  <span className='text-gray-900'>$1,400</span>
                  <span className='ml-1 text-sm text-gray-600'>/wk</span>
                </div>
                <div className='mt-2 flex items-center text-sm text-gray-600'>
                  <svg className='h-4 w-4 fill-current text-green-500' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.28279 10.9302C2.54916 11.3159 1.69173 10.6929 1.83184 9.87604L2.30425 7.12166L0.303081 5.171C-0.290436 4.59247 0.0370741 3.58449 0.857294 3.46531L3.62285 3.06345L4.85964 0.557434C5.22645 -0.185811 6.2863 -0.185811 6.65311 0.557434L7.8899 3.06345L10.6555 3.46531C11.4757 3.58449 11.8032 4.59247 11.2097 5.171L9.2085 7.12166L9.68091 9.87604C9.82102 10.6929 8.96359 11.3159 8.22996 10.9302L5.75638 9.62978L3.28279 10.9302Z" /></svg>
                  <svg className='h-4 w-4 fill-current text-green-500' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.28279 10.9302C2.54916 11.3159 1.69173 10.6929 1.83184 9.87604L2.30425 7.12166L0.303081 5.171C-0.290436 4.59247 0.0370741 3.58449 0.857294 3.46531L3.62285 3.06345L4.85964 0.557434C5.22645 -0.185811 6.2863 -0.185811 6.65311 0.557434L7.8899 3.06345L10.6555 3.46531C11.4757 3.58449 11.8032 4.59247 11.2097 5.171L9.2085 7.12166L9.68091 9.87604C9.82102 10.6929 8.96359 11.3159 8.22996 10.9302L5.75638 9.62978L3.28279 10.9302Z" /></svg>
                  <svg className='h-4 w-4 fill-current text-green-500' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.28279 10.9302C2.54916 11.3159 1.69173 10.6929 1.83184 9.87604L2.30425 7.12166L0.303081 5.171C-0.290436 4.59247 0.0370741 3.58449 0.857294 3.46531L3.62285 3.06345L4.85964 0.557434C5.22645 -0.185811 6.2863 -0.185811 6.65311 0.557434L7.8899 3.06345L10.6555 3.46531C11.4757 3.58449 11.8032 4.59247 11.2097 5.171L9.2085 7.12166L9.68091 9.87604C9.82102 10.6929 8.96359 11.3159 8.22996 10.9302L5.75638 9.62978L3.28279 10.9302Z" /></svg>
                  <svg className='h-4 w-4 fill-current text-green-500' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.28279 10.9302C2.54916 11.3159 1.69173 10.6929 1.83184 9.87604L2.30425 7.12166L0.303081 5.171C-0.290436 4.59247 0.0370741 3.58449 0.857294 3.46531L3.62285 3.06345L4.85964 0.557434C5.22645 -0.185811 6.2863 -0.185811 6.65311 0.557434L7.8899 3.06345L10.6555 3.46531C11.4757 3.58449 11.8032 4.59247 11.2097 5.171L9.2085 7.12166L9.68091 9.87604C9.82102 10.6929 8.96359 11.3159 8.22996 10.9302L5.75638 9.62978L3.28279 10.9302Z" /></svg>
                  <svg className='h-4 w-4 fill-current text-green-500' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.28279 10.9302C2.54916 11.3159 1.69173 10.6929 1.83184 9.87604L2.30425 7.12166L0.303081 5.171C-0.290436 4.59247 0.0370741 3.58449 0.857294 3.46531L3.62285 3.06345L4.85964 0.557434C5.22645 -0.185811 6.2863 -0.185811 6.65311 0.557434L7.8899 3.06345L10.6555 3.46531C11.4757 3.58449 11.8032 4.59247 11.2097 5.171L9.2085 7.12166L9.68091 9.87604C9.82102 10.6929 8.96359 11.3159 8.22996 10.9302L5.75638 9.62978L3.28279 10.9302Z" /></svg>
                  <span className='ml-2'>34 reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}