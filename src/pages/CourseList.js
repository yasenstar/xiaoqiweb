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
  },
  {
    id: 5,
    title: "Master Enterprise Architecture Meta-Model: 2. Application Layer",
    image: "img/EA_Modeling_2_Application.png",
    link: "https://www.udemy.com/course/master-ea-meta-model-2-application-layer/?referralCode=9C0F56C1C935E94057B6"
  },
  {
    id: 6,
    title: "Mastering Archi (ArchiMate) User Guide Tutorial by Practice",
    image: "img/Archi_UserGuide_Tutorial.png",
    link: "https://www.udemy.com/course/archi-tool-user-guide-tutorial/?referralCode=B7FD975B5B8F58109B76"
  },
  {
    id: 7,
    title: "Modeling SABSA Security Architecture in ArchiMate with Archi",
    image: "img/Modeling_SABSA.png",
    link: "https://www.udemy.com/course/modeling-sabsa-in-archimate-using-archi/?referralCode=A7C514E23B59103E9FC3"
  },
  {
    id: 8,
    title: "ArchiMate - ArchiSurance 3.2 - Modeling Practice (2025 Edition)",
    image: "img/Archi_Modeling_ArchiSurance_2025.png",
    link: "https://www.udemy.com/course/archimate-archisurance-modeling-practice-2025/?referralCode=4522D8745A059468F033"
  }
];

const CourseCard = ({ course }) => {
  return (
    <a 
      href={course.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block group no-underline text-inherit"
    >                 
      <div className="border border-gray-200 overflow-hidden rounded-sm shadow-sm transition-shadow hover:shadow-md">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-auto aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      {/* <p className="mt-2 text-sm font-bold leading-tight line-clamp-2 text-gray-800 group-hover:text-blue-600">
        {course.title}
      </p> */}
    </a>
  );
};

const CourseList = () => {
  return (
    <div className="py-8 w-full">
      <h2 className="text-2xl font-bold mb-6 text-left">My Featured Udemy Courses</h2>      
      {/* 
          Standard CSS Grid: 
          1 col on mobile, 3 on tablet, 5 on desktop 
      */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1.5rem'
      }}>
        {courses.map(item => (
          <CourseCard key={item.id} course={item} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;