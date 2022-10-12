import { ArrowRightCircleIcon, ChartBarIcon ,ClockIcon,imeRanges, StarIcon} from '@heroicons/react/24/solid';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleCourse = ({course}) => {
    let {id,picture,title,price,rating,category,hours} = course
    let navigate=useNavigate()

    const courseDetails=()=>{
        navigate(`/course/${id}`)
    }
   
    return (
        <div className="mb-3 overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg shadow-slate-300">
          <img
            src={picture}
            className="object-cover w-full h-64 p-5"
            alt=""
          />
          <div className="p-5 border border-t-0 text-[#1F1D0E]">
            <div className='flex justify-between items-center'>
            <p className="text-xs font-semibold uppercase">
              <span className="text-gray-600">{category}</span>
            </p>
            <h3 className='font-semibold text-2xl'>${price}</h3>
            </div>
            <div className='flex justify-between mt-4'>
                <div className='flex'>
                    <ChartBarIcon className='w-4 text-yellow-500 mr-1'></ChartBarIcon>
                    <small>Beginner</small>
                </div>
                <div className='flex'>
                    <ClockIcon className='w-4 text-yellow-500 mr-1'></ ClockIcon>
                   
                    <small>{hours}hours</small>
                </div>
                <div className='flex'>
                    <StarIcon className='w-4 text-yellow-500 mr-1'></StarIcon>
                    <small>{rating} ({rating}k reviews)</small>
                </div>
            </div>
            <h3
              href="/"
              aria-label="Category"
              title="Simple is better"
              className="my-3 text-xl font-bold leading-6 text-[#1F1D0E]"
            >
             {title.length>45?title.slice(0,41)+'...':title}
            </h3>
            <button onClick={courseDetails} 
              to="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Course Details<ArrowRightCircleIcon className='w-5 ml-2'></ArrowRightCircleIcon>
            </button>
          </div>
        </div>
    );
};

export default SingleCourse;