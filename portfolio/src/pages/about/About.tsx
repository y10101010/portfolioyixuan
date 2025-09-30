import { useState } from "react";

export const About = () => {
  const [imageAbout, setImageAbout] = useState('yob.png');

  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row lg:justify-around items-center w-full md:mx-auto gap-8 px-8 md:px-20 bg-[var(--color-lux)]">
      <div className="flex flex-col gap-4 text-center">
        
        <h1 className="text-4xl font-bold mb-2 lg:mb-4 mt-35 lg:mt-15 fonti text-[var(--color-red)] md:text-6xl lg:text-7xl lg:text-left">
          About Me
        </h1>

      <div className="text-center text-xl uppercase md:text-2xl lg:text-[1.7rem] lg:text-left">
        <b>L</b>et's g<b>e</b>t to kn<b>o</b>w <span className="block lg:inline"></span>
        ea<b>c</b>h ot<b>h</b>er!
      </div>
      

        <div className="mt-3 flex justify-center w-full lg:ml-[-20px]">
        <div className="w-40 h-44 md:w-45 md:h-49 lg:w-52 lg:h-56 rounded-full overflow-hidden shadow-xl bg-white border-3 border-[var(--color-red)]">
        <figure className="flex justify-center min-w-min">
        <img 
        className="object-cover w-full h-full pt-4" 
        src={`./../icons/${imageAbout}`}
        onMouseOver={() => setImageAbout('yobh.png')}
        onMouseOut={() => setImageAbout('yob.png')}
        />
        </figure>
      

        </div>
      </div>

        <div className="lg:max-w-3xl lg:flex">
        <p className="text-base md:text-xl lg:text-2xl leading-relaxed mb-10 mt-8 px-4 md:px-12 lg:text-left lg:ml-[-50px]">
          Hi, my name is Yixuan Xu, but you can call me Yiyi. I'm a passionate designer and developer who loves to learn and grow with each project. I focus on building clean, responsive, and user-friendly experiences. 
          <span className="block mt-5"></span>
          I'm improving both front-end and back-end development. I strive for high-quality results, ensuring attention to detail in everything I do. I am constantly learning new technologies and practices to provide cutting-edge solutions.
        </p>
        
        </div>
      </div>

    <section className="lg:mt-63">
    <div className="flex justify-center w-full text-center">
        <div className="bg-white p-8 rounded-lg shadow-xl text-black w-full max-w-3xl border-2 border-[var(--color-red)]">
          <h2 className="text-3xl font-semibold mb-6 text-[var(--color-red)]">My Skills</h2>
          <ul className="list-none space-y-4">
            <li className="text-lg"> Front-End Development: React, HTML, CSS, TypeScript, JavaScript</li>
            <li className="text-lg"> Back-End Development: Visual Studio Code, Processing </li>
            <li className="text-lg"> UI/UX Design and Art: Photoshop, Illustrator, Indesign, Premier, Lightroom, Procreate</li>
            <li className="text-lg"> Video & Multimedia</li>
            <li className="text-lg"> Responsive Design & Accessibility</li>
          </ul>
        </div>
      </div>


      <div className="mt-16 flex justify-center w-full text-center">
        <div className="bg-white p-8 rounded-lg shadow-xl text-[var(--color-red)] w-full max-w-3xl border-2 border-[var(--color-red)]">
          <h2 className="text-3xl font-semibold mb-6">My studies</h2>
          <p className="text-lg mb-6">
          I am currently pursuing my education in Design of creative technologies dregree at Universidad Politécnica de Valencia (UPV), where I am developing a strong foundation in both technical and creative disciplines.
          </p>
        </div>
      </div>

      <div className="mt-12 flex justify-between w-full lg:mt-15">
        <a
          href="./projects"
          className="py-3 px-8 button border-2 border-black mb-10"
        >
          View My Projects
        </a>
        <a
          href="./contact"
          className="py-3 px-8 border-2 border-black button mb-10"
        >
          Contact Me
        </a>
      </div>
      
    </section>
      
    </section>

  );
};


