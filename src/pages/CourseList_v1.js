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
  }  
];

// Component for the individual card
const CourseCard = ({ course }) => {
  const {
    title,
    image,
    link
  } = course;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col cursor-pointer group no-underline text-inherit">
      <div className="relative border border-gray-200 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-40 object-cover group-hover:opacity-90 transition-opacity"
        />
      </div>
      <div className="mt-2 flex flex-col gap-1">
        <h3 className="font-bold text-sm leading-tight line-clamp-2 h-10">
          {title}
        </h3>
        {/* {badge && (
          <div className="mt-1">
            <span className={`text-[10px] font-bold px-2 py-1 ${
              badge === 'Bestseller' ? 'bg-yellow-100 text-yellow-900' : 'bg-purple-100 text-purple-900'
            }`}>
              {badge}
            </span>
          </div>
        )} */}
      </div>
    </a>
  );
};

// Main component to export
const CourseList = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto font-sans">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Recommended for you</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map(item => (
            <CourseCard key={item.id} course={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CourseList;