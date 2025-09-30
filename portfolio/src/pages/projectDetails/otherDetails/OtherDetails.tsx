import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  imageDescriptions: string[];
}

export const OtherDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const projects: Project[] = [
    {
      id: 1,
      title: "Women science campaign",
      description: "University work for a campaign from the city of Valencia to encourage future women to study science. The project includes the creation of a poster, social posts and its dissemination. Made With Adobe Inc.",
      images: ["/images/transversal/carteld.png", "/images/transversal/dazul.png", "/images/transversal/post1.png", "/images/transversal/post2.png", "/images/transversal/dm1.png", "/images/transversal/dm2.png", "/images/transversal/dm3.png"],
      imageDescriptions: [
        "Poster",
        "Post",
        "Post",
        "Post",
        "Mockups",
        "Mockups",
        "Mockups",
      ],
    },
    {
      id: 2,
      title: "Logo jiujitsu club",
      description: "With Illustrator",
      images: ["/images/LOGO_FINAL_ROJO.png", "/images/bjj_rojo.png", "/images/bluem.png", "/images/redm.png"],
      imageDescriptions: [
        "Creation of logo for a jiu jitsu club in Valencia.",
        "Creation of logo for a jiu jitsu club in Valencia.",
        "Creation of logo for a jiu jitsu club in Valencia.",
        "Creation of logo for a jiu jitsu club in Valencia.",
      ],
    },
    {
      id: 3,
      title: "3D Modeling projects",
      description: "With Blender",
      images: ["/images/chessImage.png", "/images/chess0.png", "/images/chess1.png", "/images/examen.png"],
      imageDescriptions: [
        "Creation of a chessboard with its pieces.",
        "Creation of a chessboard with its pieces.",
        "Creation of a chessboard with its pieces.",
        "Creation of a simple table.",
      ],
    }
  ];

  useEffect(() => {
    const foundProject = projects.find((project) => project.id === Number(id));
    setProject(foundProject || null);
  }, [id]);

  if (!project) {
    return;
  }

  const goPaDerecha = () => {
    if (currentImageIndex < project.images.length - 1) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goPaIzquierda = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="flex flex-col p-8 pt-10 w-full min-h-screen bg-[var(--color-lux)] lg:px-15 lg:justify-center">
      <button
        onClick={() => navigate('/projects/others')}
        className="mt-20 cursor-pointer mb-4"
      >
        <img src="/images/hl.png" className="w-10 h-9 hover:scale-110 transition-all" />
      </button>

      <h2 className="text-[var(--color-red)] font-bold md:text-4xl text-3xl lg:text-[2.5rem] mb-6 text-center md:text-left">
        {project.title}
      </h2>

      <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-[var(--color-red)] text-center md:text-left lg:text-left mb-8">
        {project.description}
      </p>

      <div className="flex justify-center mb-8">
        <img
          src={project.images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="w-[500px] h-[300px] md:w-[600px] md:h-[400px] lg:w-[700px] lg:h-[500px] object-contain bg-cover"
        />
      </div>

      <p className="text-lg md:text-xl lg:text-2xl text-[var(--color-red)] text-center mb-10">
        {project.imageDescriptions[currentImageIndex]}
      </p>

      <div className="relative text-center flex flex-col items-center">
        <div className="flex gap-x-4">
          <button
            onClick={goPaIzquierda}
            className={`transition-transform transform hover:scale-110 cursor-pointer ${currentImageIndex === 0 ? 'opacity-50 pointer-events-none' : ''}`}
            disabled={currentImageIndex === 0}
          >
            <img className="w-10 h-10" src="/images/hl.png" alt="Previous" />
          </button>
          <button
            onClick={goPaDerecha}
            className={`transition-transform transform hover:scale-110 cursor-pointer ${currentImageIndex === project.images.length - 1 ? 'opacity-50 pointer-events-none' : ''}`}
            disabled={currentImageIndex === project.images.length - 1}
          >
            <img className="w-10 h-10" src="/images/hr.png" alt="Next" />
          </button>
        </div>

        <div className="mt-6 flex gap-x-4">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              className={`w-16 h-16 object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-110 ${currentImageIndex === index ? 'border-4 border-[var(--color-red)]' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
