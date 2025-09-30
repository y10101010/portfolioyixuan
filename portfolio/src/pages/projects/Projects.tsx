import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  img: string;
  icon:string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Designs',
    description: 'With Photoshop, Indesign',
    img: '/images/fp.jpg',
    icon: '/icons/xui.png',
    link: './projects/design',
  },
  {
    id: 2,
    title: 'Ilustrations',
    description: 'With Illustrator, Procreate',
    img: '/images/fp.jpg',
    icon: '/icons/xui.png',
    link: './projects/illustration',
  },
  {
    id: 3,
    title: 'Audiovisuals',
    description: 'With digital camera, Premier',
    img: '/images/fp.jpg',
    icon: '/icons/xui.png',
    link: './projects/visual',
  },
  {
    id: 4,
    title: 'Others',
    description: 'Some campaigns',
    img: '/images/fp.jpg',
    icon: '/icons/xui.png',
    link: './projects/others',
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-lux)] py-16 px-6">

      <h1 className="text-5xl md:text-6xl lg:text-7xl text-[var(--color-red)] mb-12 mt-3.5 fonti font-bold pt-20">My Projects</h1>
      <p className="text-[1.4rem] md:text-[1.6rem] text-black mb-12 text-center max-w-3xl">Here are some of the projects I’ve worked on. <br/> Take a look!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-30 m-6 lg:grid-cols-2 gap-20">
        {projects.map((project) => (
          <a href={project.link}>
          <div key={project.id} 
          className="bg-[var(--color-red)] shadow-lg shadow-gray-600 overflow-hidden transform transition duration-300 hover:scale-101 hover:shadow-2xl border-2 border-transparent">
            <div className="relative w-full h-48 md:h-50 lg:w-200 flex flex-col justify-center items-center">
              <img src={project.img} 
              className="fixed w-full h-50 object-cover rounded-b-full object-top"/>
              <img src={project.icon} 
              className='fixed w-[85px] pt-50 pl-1 lg:w-[115px] '/>
            </div>
            <div className="flex flex-col justify-center items-center p-6">
              <h2 className="text-2xl font-semibold text-[var(--color-lux)] mb-3 pt-6">{project.title}</h2>
              <p className="text-[var(--color-lux)] mb-4 text-sm md:text-base">{project.description}</p>
            </div>
          </div>
          </a>
        ))}
      </div>

    </section>
  );
};
