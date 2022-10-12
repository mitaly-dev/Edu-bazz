import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AddcourseContext } from './Layout';
import ReviewCourse from './ReviewCourse';

const AddCourse = () => {
   let [cartCourse,setCartCourse]= useContext(AddcourseContext)
   
   let total = 0;
   for(let cart of cartCourse){
        total = Math.round(total+cart.price)
   }

   const checkout=()=>{
    if(cartCourse.length===0){
        toast.info('Please add a course' ,{autoClose:500})
    }
    else{
        toast.success('Thank you' , {autoClose:500})
        setCartCourse([])
    }
   }

    return (
        <div className='bg-gray-100'>
        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 m-auto">
	<h2 className="text-xl font-semibold">Your courses</h2>
	<ul className="flex flex-col divide-y divide-gray-700">
	{
        cartCourse.map(cart=><ReviewCourse key={cart.id} cart={cart}></ReviewCourse>)
    }
	</ul>
	<div className="space-y-1 text-right">
		<p>Total amount:
			<span className="font-semibold">{total} €</span>
		</p>
		<p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
	</div>
	<div className="flex justify-end space-x-4 font-semibold">
		<Link to='/courses' type="button" className="px-6 py-2 border  border-yellow-700 rounded-full">Back
			<span className="sr-only sm:not-sr-only">to course</span>
		</Link>
		<button onClick={checkout} type="button" className="px-6 py-3 border rounded-full bg-yellow-300">
			<span className="sr-only sm:not-sr-only">Continue to</span>Checkout
		</button>
	</div>
</div>
</div>
    );
};

export default AddCourse;