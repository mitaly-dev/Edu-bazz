import React from 'react';
import { Link } from 'react-router-dom';

const Title = (props) => {
    let {first,second,doc,btn}=props
    // 
    return (
        <div className='sm:grid grid-cols-3 items-center mb-8'>
            <div className='col-span-2 font-bold text-2xl sm:text-3xl md:text-4xl capitalize leading-10'>
                <h3>{first}</h3>
                <h3>{second}</h3>
            </div>
            <div className='col-span-1 text-right mt-4 sm:mt-0'>
                {
                    btn==='true' ? <Link to='/courses' className='py-2 px-5 border-2 capitalize border-black font-medium'>{doc}</Link> : doc
                }
            </div>
        </div>
    );
};

export default Title;