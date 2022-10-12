import React from 'react';
import { useContext } from 'react';
import { CourseContext } from './Layout';
import PriceItem from './PriceItem';
import Rechart from './Rechart';
import Title from './Title';


const Price = () => {
    let {pricepackage} = useContext(CourseContext)
    let text="distinctio eveniet explicabo voluptas veniam in enim omnis asperiores maxime at assumenda!"
    return (
        <div className='py-10 md:py-20 bg-gray-50 px-5 md:px-10 lg:px-36'>
            <Title first="Premium price packages" doc={text} btn='false'></Title>
            {/* <h3 className='capitalize text-4xl font-bold py-10 text-center'>Premium price packages</h3> */}
            <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-7 pt-0 md:pt-8 '>
           {
            pricepackage.map(pack=><PriceItem pack={pack} key={pack.id}></PriceItem>)
           }
        </div>
        </div>
    );
};

export default Price;