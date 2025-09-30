import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  imageDescriptions: string[];
}

export const IllustrationDetails= () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const projects: Project[] = [
    {
      id: 1,
      title: "Some of my Artworks",
      description: "With Illustrator, Procreate",
      images: ["/images/nena.png", "/images/nena1.png", "/images/background.png", "/images/conejo.png"],
      imageDescriptions: [
        "University work on vector illustration. Using only Illustrator. Day Version",
        "University work on vector illustration. Using only Illustrator. Night Version",
        "Red hair.",
        "University work, programming animated scene with Processing"
      ],
    },
    {
      id: 2,
      title: "Book Illustration",
      description: "Creation and adaptation of the front and back cover of the book ‘Alice in Wonderland’. The book was adapted from the classic novel by Lewis Carroll.",
      images: ["/images/portada.png", "/images/guarda1.png", "/images/guarda2.png", "/images/ca.png", "/images/pagina.png", "/images/ma.png", "/images/ma1.png"],
      imageDescriptions: [
        "Front and back of the book.",
        "First Flyleaf of the book.",
        "Second Flyleaf of the book.",
        "Character design of the white rabbit, Asian theme.",
        "Double-page illustration, with a fragment of the book.",
        "Mockups of the book.",
        "Mockups of the book.",
      ],
    },
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
        onClick={() => navigate('/projects/illustration')}
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


