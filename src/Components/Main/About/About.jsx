import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  return (
    <div className="h-full  bg-white rounded-md p-5 md:p-10 lg:p-12">
      <h6 className="text-lg font-bold">
        Hello, I’m
        <span className="text-[#4FC5C5]">
          <Typewriter
            words={[
              ' Nur Mahammad Mondol Robiul',
              ' a Bangladeshi',
              ' 22 Years Old',
            ]}
            loop={0} // 0 মানে ইনফিনিট লুপ
            cursor
            // cursorStyle=" "
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h6>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-5">
        Software Developer and
        <span className="text-[#4FC5C5]"> Entrepreneur </span>
        Based in Rangpur, Bangladesh.
      </h2>

      <p>
        With a strong passion for building scalable, efficient, and
        user-friendly web applications, my journey in software development is
        driven by my deep love for solving complex problems and creating digital
        solutions that make a real-world impact.
        <br />
        My Expertise, As a
        <span className="text-[#4FC5C5]"> Full-Stack Developer,</span> I
        specialize in both
        <span className="text-[#4FC5C5]">
          {' '}
          frontend and backend development,
        </span>{' '}
        crafting seamless user experiences and highly functional systems. My
        tech stack includes: Frontend: React, JavaScript, Tailwind CSS Backend:
        Node.js, Express.js, MongoDB Authentication: Firebase. These
        technologies allow me to create dynamic, user-centered applications that
        are robust and scalable.
        <br />
        <br />
        My Vision & Passion, I am constantly evolving by learning new
        technologies and exploring innovative projects. Collaboration with
        like-minded individuals excites me, and my goal is to develop meaningful
        digital solutions that enhance user experiences and address real-world
        challenges. If you're seeking a dedicated and passionate developer to
        bring your ideas to life, let’s connect and create something incredible!
        🚀
        <br />
        Who I Am & My Journey, Ever since childhood, I’ve been fascinated by
        technology, which led me to dive into both frontend and backend
        development. Over time, I’ve honed my skills in{' '}
        <span className="text-[#47b1b1]">
          React, JavaScript, Tailwind CSS, Node.js, Express.js, and MongoDB ,
        </span>
        shaping me into a versatile full-stack developer capable of creating
        impactful and efficient solutions.
        <br />
        My Work Philosophy, I believe that great software is more than just
        clean code. It’s about delivering a remarkable user experience. I take
        pride in writing efficient code, ensuring that performance is optimized,
        and that the user experience is always top-notch. My approach revolves
        around quality, efficiency, and impact.
        <br />
        <br />
        Future Goals & Inspiration, My ultimate goal is to keep growing, develop
        innovative tools and applications, and make a tangible impact with my
        work. As an entrepreneur, I am passionate about turning ideas into
        reality, solving real-world problems, and contributing to a better
        future through technology. If you’re looking for a skilled, innovative
        developer who can bring your vision to life, let's collaborate and
        create something amazing!
      </p>
    </div>
  );
};

export default About;
