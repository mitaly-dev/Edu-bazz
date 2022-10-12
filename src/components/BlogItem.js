import React from 'react';

const BlogItem = ({blog}) => {
    let {title,picture} = blog
    return (
        <div className='m-auto w-full mb-10 sm:mb-7 text-center'>
          <div className='h-[250px]'>
            <img
              className="object-cover w-[300px] m-auto h-full mb-6 rounded shadow-lg"
              src={picture}
              alt="images"
            />
            </div>
          <div>
            <p className="mb-2 mt-4 text-xl font-bold leading-none sm:text-2xl">
                {title}
             </p>
            <p className="text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </p>
          </div>
      </div>
    );
};

export default BlogItem;