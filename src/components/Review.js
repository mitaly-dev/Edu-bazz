import React from 'react';
import { useContext } from 'react';
import { CourseContext } from './Layout';
import ReviewItem from './ReviewItem';
import Title from './Title';

const Review = () => {
    let {reviewData} = useContext(CourseContext)
    let text="distinctio eveniet explicabo voluptas veniam in enim omnis asperiores maxime at assumenda!"
    return (
       <div className='px-5 md:px-10 lg:px-36 pt-10 pb-20 bg-gray-50'>
         <Title first="Successfull student" doc={text} btn='false'></Title>
         <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
            reviewData.map(review=><ReviewItem key={review.id} reviews={review}></ReviewItem>)
           }
        </div>
       </div>
    );
};

export default Review;