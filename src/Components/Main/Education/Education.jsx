import React from 'react';

const Education = () => {
  const educationData = [
    {
      year: '2022 - Present',
      title: 'Computer Science and Technology',
      institution:
        'Rangpur Ideal Institute of Technology - Rangpur, Bangladesh',
      description:
        'Currently, I am in my 5th semester at Rangpur Ideal Institute of Technology, pursuing a degree in Computer Science and Technology. My goal is to become a skilled software engineer with expertise in various programming languages and technologies.',
    },
    {
      year: '2020 - 2022',
      title: 'HSC',
      institution:
        'Sheikh Shafiuddin Commerce College - Lalmonirhat, Bangladesh',
      description:
        'I pursued my Higher Secondary Certificate (HSC) from Sheikh Shafiuddin Commerce College, specializing in commerce. This period was instrumental in enhancing my analytical skills and understanding of business and technology-related subjects.',
    },
    {
      year: '2018 - 2019',
      title: 'SSC',
      institution:
        'Kashipur B/L High School - Kashipur, Lalmonirhat, Bangladesh',
      description:
        'I studied there from class 6 to class 10, and it was a formative period of my life. The school not only shaped my academic journey but also gave me many unforgettable childhood memories. From friendships that lasted beyond the classroom to lessons that shaped my values, this place holds a special place in my heart.',
    },
  ];

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-[#4FC5C5] mb-6 border-b pb-1">
        Education
      </h2>
      <div className="relative border-l-2 border-[#4FC5C5] pl-4">
        {educationData.map((edu, index) => (
          <div key={index} className="mb-6">
            <div className="absolute -left-3 w-5 h-5 bg-[#4FC5C5] rounded-full"></div>
            <h3 className="text-xs font-semibold text-gray-400 ">{edu.year}</h3>
            <h4 className="text-lg font-bold text-[#4FC5C5]">{edu.title}</h4>
            <p className="italic text-black font-medium">{edu.institution}</p>
            <p className="text-gray-500 mt-2">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
