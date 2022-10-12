import React from 'react';
import { Link } from 'react-router-dom';

const PriceItem = ({pack}) => {
 
    let {des,title,price,month} = pack
    return (
			<div className="mt-7 md:mt-0 flex text-center w-full flex-col hover:scale-[1.1] transition-all p-6 space-y-6 text-white rounded-lg bg-[#1F1D0E] shadow sm:p-8">
					<div className="space-y-2">
						<h4 className="text-xl mb-3 uppercase">{title}</h4>
						<span className="text-6xl font-bold"><sup className='text-[19px]'>$</sup>{price}</span>
					</div>
					<p className=" text-gray-300 border-b-2 pb-4">per {month} month</p>
					<ul className="flex-1 mb-6 dark:text-gray-400">
						{
							des.map((desLi , index)=>{
								return <li key={index} className="flex mb-2 space-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-4 h-4 dark:text-violet-400">
									<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
								</svg>
								<span>{desLi}</span>
							</li>
							})
						}
						
					</ul>
					<Link to='/courses' type="button" className="border-2 bg-[#F8FF63] text-black border-black py-3 w-full font-semibold ">Explore Courses</Link>
			</div>
    );
};

export default PriceItem;