import React from 'react';

const CollabItem = ({collab}) => { 
            let {id,title,icon,des}=collab
    return (
        <div className="mt-3 flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
        <div className="p-5">
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
         {icon}
          </div>
          <p className="mb-2 font-bold text-xl">{title}</p>
          <p className="text-sm leading-5 text-gray-900">
            A slice of heaven. O for awesome, this chocka full cuzzie is as
            rip-off as a cracker.iure ducimus obcaecati animi necessitatibus.
          </p>
        </div>
        <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
      </div>
    );
};

export default CollabItem;