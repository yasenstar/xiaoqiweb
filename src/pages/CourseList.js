import React from 'react';

const courses = [
  {
    id: 1,
    title: "Mastering ArchiMate 3.2 Specification - Ontology & Meta-Model",
    image: "img/Mastering_ArchiMate_3.2_Ontology.png", 
    link: "https://www.udemy.com/course/build-ontology-view-with-learning-archimate/?referralCode=6A3B23ADD67551B38D2B"
  },
  {
    id: 2,
    title: "Archi (ArchiMate) Modeling Practices with ArchiSurance",
    image: "img/Archi_Modeling_ArchiSurance_2023.png",
    link: "https://www.udemy.com/course/archi-archimate-modeling-practices-with-archisurance/?referralCode=5391DBF946B5C02FFF7D"
  },
  {
    id: 3,
    title: "Archi (ArchiMate) Modeling Practices with ArchiMetal",
    image: "img/Archi_Modeling_ArchiMetal_2023.png",
    link: "https://www.udemy.com/course/archi-archimate-modeling-practices-with-archimetal/?referralCode=8D924B20ABC6D50F6EA2"
  },
  {
    id: 4,
    title: "Master Enterprise Architecture Meta-Model: 1. Business Layer",
    image: "img/EA_Modeling_1_Business.png",
    link: "https://www.udemy.com/course/master-ea-meta-model-1-business-layer/?referralCode=4E8A5F0A2D4232813C7B"
  }
];

const CourseCard = ({ course }) => {
    const {
        title,
        image,
        link
    } = course;

    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-shrink-0 w-[280px] cursor-pointer group no-underline text-inherit">                
            {/* <div className="mt-2 flex flex-col gap-1 pr-4">
                <h3 className="font-bold text-sm leading-tight line-clamp-2 h-10">
                    {title}
                </h3>
            </div> */}
            <div className="relative border border-gray-200 overflow-hidden rounded-sm">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-[160px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
        </a>
    );
};

const CourseList = () => {
    return (
        <div className="py-12 px-4 max-w-7xl mx-auto font-sans">
            <section>
                <h2 className="text-2xl font-bold mb-6">Recommended for you</h2>
                
                {/* Scroll Container */}
                <div className="relative">
                    <div className="flex flex-nowrap overflow-x-auto gap-4 pb-6 scrollbar-hide snap-x cursor-grab active:cursor-grabbing">
                        {courses.map(item => (
                            <div key={item.id} className="snap-start">
                                <CourseCard course={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CourseList;