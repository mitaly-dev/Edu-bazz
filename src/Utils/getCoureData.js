
 const getCourse =()=>{
    let course = JSON.parse(localStorage.getItem('course'))
    if(!course){
        course=[]
    }
    return course
}

export default getCourse