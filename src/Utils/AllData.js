const getAllData=async()=>{
    let res=await fetch('course.json')
    let courses=await res.json()

    let pack=await fetch('Pricepackage.json')
    let pricepackage = await pack.json()

    let blogs=await fetch('blog.json')
    let blogData=await blogs.json()

    let review=await fetch('Reviewdata.json')
    let reviewData=await review.json()

    return {
        courses,
        pricepackage,
        blogData,
        reviewData
    }
}
export {getAllData}