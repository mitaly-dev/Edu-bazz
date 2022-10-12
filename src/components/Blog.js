import React from 'react';
import { useContext } from 'react';
import BlogItem from './BlogItem';
import { CourseContext } from './Layout';
import Title from './Title';

const Blog = () => {
    let {blogData} = useContext(CourseContext)
    let text="distinctio eveniet explicabo voluptas veniam in enim omnis asperiores maxime!"
    return (
        <div className='pt-10 pb-20 bg-gray-50 px-5 md:px-20 lg:px-36'>
           <Title first="Published blog" doc={text} btn='false'></Title>
           <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10 py-5'>
            {
               blogData.map(blog=><BlogItem key={blog.id} blog={blog}></BlogItem>)
            }
           </div>
        </div>
    );
};

export default Blog;