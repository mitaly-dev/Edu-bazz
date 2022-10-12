import React from 'react';

const Signup = () => {
    return (
        <div className='xl:min-h-[90vh] min-h-[60vh] flex items-center'>
        <div className="grid max-w-screen-lg grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-[#1F1D0E] text-gray-100">
        <div className="flex flex-col justify-between">
            <div className="space-y-2">
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Sign up!</h2>
                <div className="text-gray-400">Vivamus in nisl metus? Phasellus.</div>
            </div>
            <img src="https://www.freepnglogos.com/uploads/student-png/student-png-international-pioneers-school-11.png" alt="" className="w-6/12 h-6/12" />
        </div>
        <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div>
                <label for="name" className="text-sm">Full name</label>
                <input id="name" type="text" placeholder="" className="w-full p-3 rounded-full border" />
            </div>
            <div>
                <label for="email" className="text-sm">Email</label>
                <input id="email" type="email" className="w-full p-3 rounded-full border" />
            </div>
            <div>
                <label for="password" className="text-sm">Password</label>
                <input id="password" type="password" className="w-full p-3 rounded-full border" />
            </div>
            <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded-full bg-[#F8FF63] text-gray-900">Send</button>
        </form>
    </div>
    </div>
    );
};

export default Signup;