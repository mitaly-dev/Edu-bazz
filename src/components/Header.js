import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BeakerIcon, PlusIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { AddcourseContext } from './Layout';

const Header = () => {
  let [cartCourse,setCartCourse] = useContext(AddcourseContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="bg-white sticky top-0 z-20">
        <div className="px-4 py-5  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-24">
          <div className="relative flex items-center justify-between">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center"
            >
              <svg
                className="w-8 text-teal-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide text-black uppercase">
              Edu Buzz
              </span>
            </a>
          {/*  */}
          <ul className="flex items-center hidden space-x-0 lg:flex text-black font-semibold">
              <li>
                 <NavLink 
                  to="/home"
                  aria-label="Our product"
                  title="Our product"
                  className={({isActive})=>isActive ? "flex font-medium tracking-wide text-gray-700 bg-gray-100 py-1 px-3 rounded-lg transition-colors duration-200 hover:text-deep-purple-accent-400" : "flex font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 py-1 px-3 rounded-lg"}
                >
                 <span>Home</span>
                  <PlusIcon className='w-3 text-yellow-600'></PlusIcon>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  aria-label="Our product"
                  title="Our product"
                  className={({isActive})=>isActive ? "flex font-medium tracking-wide text-gray-700 bg-gray-100 py-1 px-3 rounded-lg transition-colors duration-200 hover:text-deep-purple-accent-400" : "flex font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 py-1 px-3 rounded-lg"}
                >
                <span>About</span>
                  <PlusIcon className='w-3 text-yellow-600'></PlusIcon>
                 
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  aria-label="Our product"
                  title="Our product"
                  className={({isActive})=>isActive ? "flex font-medium tracking-wide text-gray-700 bg-gray-100 py-1 px-3 rounded-lg transition-colors duration-200 hover:text-deep-purple-accent-400" : "flex font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 py-1 px-3 rounded-lg"}
                >
                <span>Courses</span>
                  <PlusIcon className='w-3 text-yellow-600'></PlusIcon>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/price"
                  aria-label="Our product"
                  title="Our product"
                  className={({isActive})=>isActive ? "flex font-medium tracking-wide text-gray-700 bg-gray-100 py-1 px-3 rounded-lg transition-colors duration-200 hover:text-deep-purple-accent-400" : "flex font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 py-1 px-3 rounded-lg"}
                >
                  
                  <span>Price</span>
                  <PlusIcon className='w-3 text-yellow-600'></PlusIcon>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  aria-label="Our product"
                  title="Our product"
                  className={({isActive})=>isActive ? "flex font-medium tracking-wide text-gray-700 bg-gray-100 py-1 px-3 rounded-lg transition-colors duration-200 hover:text-deep-purple-accent-400" : "flex font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 py-1 px-3 rounded-lg"}
                >
                 
                  <span>Blog</span>
                  <PlusIcon className='w-3 text-yellow-600'></PlusIcon>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/review"
                  aria-label="Review"
                  title="Review"
                  className={({isActive})=>isActive ? "flex font-medium tracking-wide text-gray-700 bg-gray-100 py-1 px-3 rounded-lg transition-colors duration-200 hover:text-deep-purple-accent-400" : "flex font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 py-1 px-3 rounded-lg"}
                >
                  <span>Review</span>
                  <PlusIcon className='w-3 text-yellow-600'></PlusIcon>
                </NavLink>
              </li>                  
              <li>
                <NavLink
                  to="/contact"
                  aria-label="Our product"
                  title="Our product"
                  className={({isActive})=>isActive ? "flex font-medium tracking-wide text-gray-700 bg-gray-100 py-1 px-3 rounded-lg transition-colors duration-200 hover:text-deep-purple-accent-400" : "flex font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 py-1 px-3 rounded-lg"}
                >
                  <span>Contacts</span>
                  <PlusIcon className='w-3 text-yellow-600'></PlusIcon>
                </NavLink>
              </li>
            </ul>
          {/*  */}
            <ul className="flex items-center hidden space-x-5 lg:flex">
            <li>
                <Link
                  to="/added-course"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black bg-[#f5e741] rounded-lg transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                > 
                  <div className='relative'>
                    <span>Courses</span>
                    <span className='absolute top-[-15px] right-[-15px] px-2 text-white bg-slate-500 rounded-full'>{cartCourse.length}</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="bg-black inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Sign up
                </Link>
              </li>
            </ul>
            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="p-5 bg-white border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="Company"
                          title="Company"
                          className="inline-flex items-center"
                        >
                          <svg
                            className="w-8 text-deep-purple-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                          >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                          </svg>
                          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            Company
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                      <li>
                        <NavLink 
                          to="/home"
                          aria-label="Our product"
                          title="Our product"
                          className={({isActive})=>isActive ? "flex font-medium tracking-wide text-gray-700 bg-gray-100 py-1 px-3 rounded-lg transition-colors duration-200 hover:text-deep-purple-accent-400" : "flex font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 py-1 px-3 rounded-lg"}
                        >
                        <span>Home</span>
                          <PlusIcon className='w-3 text-yellow-600'></PlusIcon>
                        </NavLink>
                      </li>
                      <li>
                      <NavLink
                        to="/about"
                        aria-label="Our product"
                        title="Our product"
                        className={({isActive})=>isActive ? "flex font-medium tracking-wide text-gray-700 bg-gray-100 py-1 px-3 rounded-lg transition-colors duration-200 hover:text-deep-purple-accent-400" : "flex font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 py-1 px-3 rounded-lg"}
                      >
                      <span>About</span>
                        <PlusIcon className='w-3 text-yellow-600'></PlusIcon>
                      
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses"
                        aria-label="Our product"
                        title="Our product"
                        className={({isActive})=>isActive ? "flex font-medium tracking-wide text-gray-700 bg-gray-100 py-1 px-3 rounded-lg transition-colors duration-200 hover:text-deep-purple-accent-400" : "flex font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 py-1 px-3 rounded-lg"}
                      >
                      <span>Courses</span>
                        <PlusIcon className='w-3 text-yellow-600'></PlusIcon>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/price"
                        aria-label="Our product"
                        title="Our product"
                        className={({isActive})=>isActive ? "flex font-medium tracking-wide text-gray-700 bg-gray-100 py-1 px-3 rounded-lg transition-colors duration-200 hover:text-deep-purple-accent-400" : "flex font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 py-1 px-3 rounded-lg"}
                      >
                        
                        <span>Price</span>
                        <PlusIcon className='w-3 text-yellow-600'></PlusIcon>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        aria-label="Our product"
                        title="Our product"
                        className={({isActive})=>isActive ? "flex font-medium tracking-wide text-gray-700 bg-gray-100 py-1 px-3 rounded-lg transition-colors duration-200 hover:text-deep-purple-accent-400" : "flex font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 py-1 px-3 rounded-lg"}
                      >
                      
                        <span>Blog</span>
                        <PlusIcon className='w-3 text-yellow-600'></PlusIcon>
                      </NavLink>
                    </li>
                    <li>
                    <NavLink
                      to="/review"
                      aria-label="Review"
                      title="Review"
                      className={({isActive})=>isActive ? "flex font-medium tracking-wide text-gray-700 bg-gray-100 py-1 px-3 rounded-lg transition-colors duration-200 hover:text-deep-purple-accent-400" : "flex font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 py-1 px-3 rounded-lg"}
                    >
                      <span>Review</span>
                      <PlusIcon className='w-3 text-yellow-600'></PlusIcon>
                    </NavLink>
                  </li>                  
                  <li>
                    <NavLink
                      to="/contact"
                      aria-label="Our product"
                      title="Our product"
                      className={({isActive})=>isActive ? "flex font-medium tracking-wide text-gray-700 bg-gray-100 py-1 px-3 rounded-lg transition-colors duration-200 hover:text-deep-purple-accent-400" : "flex font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 py-1 px-3 rounded-lg"}
                    >
                      <span>Contacts</span>
                      <PlusIcon className='w-3 text-yellow-600'></PlusIcon>
                    </NavLink>
                  </li>
                  <li>
                <Link
                  to="/added-course"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black bg-yellow-200 rounded-lg transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                > 
                  <div className='relative'>
                    <span>Courses</span>
                    <span className='absolute top-[-15px] right-[-15px] px-2 text-white bg-slate-500 rounded-full'>{cartCourse.length}</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="bg-black inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Sign up
                </Link>
              </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;

