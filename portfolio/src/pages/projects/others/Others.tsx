
import { useNavigate } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  coverImage: string;
}

export const Others = () => {
  const navigate = useNavigate(); 

  const projects: Project[] = [
    {
      id: 1,
      title: "Women science campaign",
      description: "With Adobe Inc.",
      coverImage: "/images/transversal/carteld.png",
    },
    {
      id: 2,
      title: "Logo jiujitsu club",
      description: "With Illustrator",
      coverImage: "/images/LOGO_FINAL_ROJO.png",
    },
    {
      id: 3,
      title: "3D Modeling",
      description: "With Blender",
      coverImage: "/images/chessImage.png"
    }
  ];

  const showDetails = (project: Project): void => {
    navigate(`/projectDetails/otherDetails/OtherDetails/${project.id}`);
  };

return (
    <div className="py-12 bg-[var(--color-lux)]">
      <div className="w-screen min-h-screen mx-auto px-6 flex flex-col lg:justify-center">
        <button
          onClick={() => navigate('/projects')}
          className="mt-20"
        >
          <img src="/images/hl.png" className="w-10 h-9 cursor-pointer hover:scale-110 transition-transform" />
        </button>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-9 fonti font-bold">
          Other Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-10 lg:flex-nowrap">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-lg md:w-[38rem] lg:w-1/3 p-6 bg-[var(--color-red)] rounded-lg shadow-md mb-5"
            >
              <h3 className="text-xl font-semibold text-[var(--color-lux)] mb-2">{project.title}</h3>
              <p className="text-[var(--color-lux)] mb-4">{project.description}</p>
              <img
                src={project.coverImage}
                className="w-full h-80 md:h-100 object-cover rounded-lg mb-4"
              />
              <button
                onClick={() => showDetails(project)}
                className="w-full py-2 px-4 rounded btn text-center md:text-lg"
              >
                See More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

