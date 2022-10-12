import { AcademicCapIcon, ChatBubbleBottomCenterIcon, ClipboardDocumentIcon, SunIcon } from '@heroicons/react/24/solid';
import React from 'react';
import CollabItem from './CollabItem';

const Collabcourse = () => {
    let collabItems = [
        {
            id:"34lksaddfhas",
            title:'knowladge',
            icon:<AcademicCapIcon className='w-10'></AcademicCapIcon>
        },
        {
            id:"34l3345gse",
            title:'Unlimited Access',
            icon:<SunIcon className='w-10'></SunIcon>
        },
        {
            id:"34lks1212s",
            title:'Practical Skill',
            icon:<ChatBubbleBottomCenterIcon className='w-10'></ChatBubbleBottomCenterIcon>
        },
        {
            id:"34l09890s",
            title:'A Certificate',
            icon:<ClipboardDocumentIcon className='w-10'></ClipboardDocumentIcon>
        },
    ]
    return (
        <div className='md:grid grid-cols-2 gap-10'>
           <div>
            <p className='pb-5 font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quae quibusdam neque, praesentium enim nostrum deleniti nam eos.</p>
                <img src="https://plus.unsplash.com/premium_photo-1661653814396-6a6911cfd3ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGVkdWNhdGlvbiUyMGdpcmxzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="study" className='h-[85%] w-full object-cover'/>
           </div> 
            <div className='sm:grid grid-cols-2 gap-5'>
                    {
                        collabItems.map(collab=><CollabItem collab={collab} key={collab.id}></CollabItem>)
                    }
            </div>
        </div>
    );
};

export default Collabcourse;