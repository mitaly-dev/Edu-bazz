import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CourseContext } from './Layout';
import SingleCourse from './SingleCourse';
import Title from './Title'


const Courses = () => {
    let {courses}= useContext(CourseContext)
    let text="distinctio eveniet explicabo voluptas veniam in enim omnis asperiores maxime at assumenda!"
    return (
       <div className='pt-10 pb-20 px-5  md:px-10 lg:px-44 bg-gray-50'>
        <Title first="Highest Rated online" second="courses" doc={text} btn='false'></Title>
         <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10 '>
           {
            courses.map(course=><SingleCourse course={course} key={course.id}></SingleCourse>)
          
           }
        </div>
       </div>
    );
};

export default Courses;