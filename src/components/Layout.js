import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import addCourseDB, { getLSData } from '../Utils/fakeDB';
import getCourse from '../Utils/getCoureData';
import Footer from './Footer';
import Header from './Header';

export const CourseContext = createContext([])

export const AddcourseContext = createContext([])

const Layout = () => {
    let course = getCourse()
    let [cartCourse,setCartCourse] = useState(course)
    let {courses , pricepackage ,blogData ,reviewData} = useLoaderData()

    return (
        <AddcourseContext.Provider value={[cartCourse,setCartCourse]}>
            <CourseContext.Provider value={{courses , pricepackage ,blogData ,reviewData}}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </CourseContext.Provider>
        </AddcourseContext.Provider>
       
    );
};

export default Layout;