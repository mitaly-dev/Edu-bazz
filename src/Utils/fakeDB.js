import { json } from "react-router-dom"

const getLSData =()=>{
    let course = JSON.parse(localStorage.getItem('course'))
    if(!course){
        course=[]
    }
return course
}

const addCourseDB =(id)=>{
    let  course = getLSData()
    course.push(id)
    localStorage.setItem('course',JSON.stringify(course))
}

export default (addCourseDB)