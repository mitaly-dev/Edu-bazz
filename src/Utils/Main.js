import AddCourse from "../components/AddCourse";
import Contact from "../components/Contact";
import Coursedetails from "../components/Coursedetails";
import Errorpage from "../components/Errorpage";
import Layout from "../components/Layout";
import Price from "../components/Price";
import Review from "../components/Review";
import Signup from "../components/Signup";
import { getAllData } from "./AllData";

const { createBrowserRouter } = require("react-router-dom");
const { default: About } = require("../components/About");
const { default: Blog } = require("../components/Blog");
const { default: Courses } = require("../components/Courses");
const { default: Home } = require("../components/Home");


const router = createBrowserRouter([
    {path:'/',
    loader:getAllData,
    errorElement:<Errorpage></Errorpage>,
    element:<Layout></Layout>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/home',element:<Home></Home>},
        {path:'/about',element:<About></About>},
        {path:'/courses',element:<Courses></Courses>},
        {path:'/price',element:<Price></Price>},
        {path:'/blog',element:<Blog></Blog>},
        {path:'/contact',element:<Contact></Contact>},
        {path:'/course/:courseId',
        loader:({params})=>params.courseId,
        element:<Coursedetails></Coursedetails>
        },
        {path:'/signup',element:<Signup></Signup>},
        {path:'/review',element:<Review></Review>},
        {path:'/added-course',element:<AddCourse></AddCourse>}
    ]
}
])

export default router