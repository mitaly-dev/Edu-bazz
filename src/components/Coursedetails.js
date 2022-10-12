import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import addCourseDB from '../Utils/fakeDB';
import { AddcourseContext, CourseContext } from './Layout';

const Coursedetails = () => {
    let [cartCourse,setCartCourse]= useContext(AddcourseContext)
    let {courses} = useContext(CourseContext)
    const courseId = useLoaderData()
    let item=courses.find(course=>course.id===courseId)
    let {picture,title,price,rating,category,hours,instructor} = item


    const addedCourse=(e,item)=>{
        e.target.classList.add('bg-green-500')
        e.target.setAttribute('disabled',true)
        toast.success('Added Successfully' , {autoClose: 500})
        let exit = cartCourse.find(cart2=>cart2.id===item.id)
       
        if(!exit){
            setCartCourse(prev=>[...prev,item])
            addCourseDB(item)
        }
        
    }

    return (
        <div className="min-h-[90vh] flex items-center bg-gray-50">
        <div className="container grid grid-cols-12 mx-auto bg-[#1F1D0E] w-10/12 m-auto">
            <div className=" bg-gray-700 col-span-full lg:col-span-5 h-[430px] w-full">
                <img src={picture} alt="" className='w-full h-full object-cover'/>
            </div>
            <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-7 lg:p-10 text-white capitalize">
                <div className="flex justify-start">
                    <span className="px-2 py-1 text-xs rounded-full bg-violet-400 text-gray-100">Label</span>
                </div>
                <h1 className="text-3xl font-semibold">{title}</h1>
                <p className="flex-1 py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reprehenderit adipisci tempore voluptas laborum quod.</p>
                <div className='flex text-[17px]'>
                    <StarIcon className='w-4 text-yellow-500 mr-1'></StarIcon>
                    <p>{rating} ({rating}k reviews)</p>
                </div>
                <h3 className='text-[17px] mt-2'>Hours : {hours} hours</h3>
                <h3 className='text-2xl mt-2'>Price : ${price} <del className='text-red-500 text-lg'>${price+1}</del></h3>
                <div className="sm:flex items-center justify-between pt-8">
                    <div className="flex space-x-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                        </svg>
                        <div>
                        <span className="self-center text-lg">Instructor : {instructor}</span>
                        </div>
                    </div>
                    <div>
                    <div className="text-[16px] mb-5">{category}</div>
                    <button onClick={(e)=>addedCourse(e,item)} className='bg-[#F8FF63] text-black font-semibold py-2 px-10 rounded-md'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Coursedetails;