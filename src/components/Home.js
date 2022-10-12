import React from 'react';
import Lottie from 'lottie-react'
import reader from './assets.json'
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import Title from './Title';
import Price from './Price';
import Stats from './Stats';
import Collabcourse from './Collabcourse';

const Home = () => {
    return (
        <main>
        <div className="relative flex flex-col min-h-[55vh] py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-[#1F1D0E] mx-5 md:mx-10 lg:mx-36">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-28 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-teal-accent-400">
                 Learning Excellence
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl md:text-5xl lg:text-5xl capitalize font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                The Best free online 
                <br className="hidden md:block" />
                <span className="inline-block text-deep-purple-accent-400 mt-3">
                courses of all time
                </span>
              </h2>
              <p className="text-base text-white md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <Link
                href="/home"
                className="inline-flex items-center justify-center w-full h-12 px-8 mb-3 font-medium tracking-wide transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-[#F8FF63] focus:shadow-outline focus:outline-none"
              >
               Explore Courses
              </Link>
              <Link
                href="/home"
                aria-label=""
                className="inline-flex items-center font-semibold text-white transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <ArrowRightCircleIcon className='w-7 mr-2'></ArrowRightCircleIcon>
                White Video
              </Link >
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0 flex items-end">
         {<Lottie animationData={reader} loop={true} className="w-10/12 mx-auto"/>}
        </div>
      </div>

    {/* section collab course start */}
    <section className='mt-14 md:mt-24 mx-5 md:mx-10 lg:mx-36'>
        <Title first="what to export from" second="a collab course" btn="true" doc='explore courses'></Title>
        <Collabcourse></Collabcourse>
    </section>
    {/* stats start */}
    <section className='my-7'>
    <Stats></Stats>
    </section>
    {/* stats end */}
    <section className=''>
      <Price></Price>
    </section>
    </main>
    );
};

export default Home;