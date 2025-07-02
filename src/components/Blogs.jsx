import React from 'react'
import Header from '../Layout/Header'
import Image3 from '/Images/Hphone2.png';


const BlogData = [
    {
        title: "How to choose perfect smart watch",
        subtitle: "We use persuasive language to convince others to agree with our facts, share our values, accept our argument and conclusions, and adopt our way of thinking. There are many different ways to persuade people.",
        published: "Jan 20, 2024 by Gachwe",
        image: Image3
    },
    {
        title: "How to choose perfect smart watch",
        subtitle: "We use persuasive language to convince others to agree with our facts, share our values, accept our argument and conclusions, and adopt our way of thinking. There are many different ways to persuade people.",
        published: "Jan 20, 2024 by Gachwe",
        image: Image3
    },
    {
        title: "How to choose perfect smart watch",
        subtitle: "We use persuasive language to convince others to agree with our facts, share our values, accept our argument and conclusions, and adopt our way of thinking. There are many different ways to persuade people.",
        published: "Jan 20, 2024 by Gachwe",
        image: Image3
    },

]
const Blogs = () => {
  return (
    <div className='my-12'>
      <div className='container'>
        {/* Header Section */}
        <Header title="Recent Article" subtitle={"Explore our Articles"} />

        {/* Blog Section */}
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6gap-y-8 sm:gap-4 md:gap-7'>
            {/* Blog Card */}
            {
                BlogData.map((data) => (
                    <div key={data.title} className='bg-white dark:bg-gray-900'>
                        {/* image section */}
                        <div className='overflow-hidden rounded-2xl mb-2'>
                        <img src={data.image} alt=''
                        className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500' />
                        </div>
                        {/* content section */}
                        <div className='space-y-2'>
                            <p className='tet-x5 text-gray-500'>{data.published}</p>
                            <p className='font-bold line-clamp-1'>{data.title}</p>
                            <p className='line-clamp-3 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                        </div>
                    </div>
                ))
            }
                    </div>
      </div>
    </div>
  )
}

export default Blogs
