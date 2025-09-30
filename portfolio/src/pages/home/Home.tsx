
export const Home = () => {

  const images = [
    { src: "/images/background.png"},
    { src: "/images/portada.png"},
    { src: '/images/alegria.png'},
    { src: "/images/cartel.png"},
    { src: "/images/nena.png"},
    { src: "/images/conejo.png"},
    { src: "/images/chessImage.png"},
    { src: "/images/o.png"},
    { src: "/images/f8.png"},
  ];

  return (
    <div className="bg-white" style={{ 
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      minHeight: '150vh'
  }}>

    <section id="home" className="min-h-screen w-screen flex justify-start items-center md:justify-center lg:justify-center bg-black text-white ">
  
      <div 
        className="absolute min-h-screen w-screen inset-0 bg-cover bg-center opacity-50"
        style={{backgroundImage: 'url(/images/bgblack.png)'}} 
      ></div>

      <div className="relative z-10 px-8 text-start md:px-12 md:text-center lg:px-16 lg:text-center">
      <div className="flex flex-col justify-start">
      <h1 className="text-white fonti text-[9rem] 
        md:text-[13rem] lg:text-[14rem]
        font-bold leading-tight scale-100 transition-all hover:scale-110 animated fadeInDown">
        Yiyi
      </h1>
      </div>

        <p className="text-2xl py-3.5 md:text-3xl lg:text-4xl font-light opacity-90 animated fadeInRight text-[var(--color-lux)]">
          Welcome to my portfolio
        </p>
        <p className="text-lg py-3.5 mt-[-15px] md:text-xl lg:text-2xl font-light opacity-90 mb-8 animated fadeInLeft">
          I´m Yiyi, nice to meet you
        </p>

      <a
      href="#about"
      className="text-[1rem] py-4 px-6 md:px-10 md:py-5 md:text-xl lg:px-10 lg:py-5 lg:text-[1.3rem] btn2 animated fadeIn"
      >
      <img src='./images/hbw.png' className='w-9 h-9 inline-block'/>
      </a>
    

      </div>
    </section>

<section id="about" className="min-h-screen flex flex-col justify-center items-center w-full px-8 md:px-20 bg-[var(--color-lux)]" style={{ minHeight: '90vh' }}>
  <div className="flex flex-col text-center gap-6">
    <h1 className="text-lg mb-4 text-[var(--color-red)] md:text-xl lg:text-2xl font-semibold leading-relaxed max-w-sm md:max-w-xl lg:max-w-2xl">
    This is my website. I'm a university student specializing in <span className="font-bold">Design and Creative Technologies</span>. My focus is on merging <span className="font-bold">design</span> with cutting-edge <span className="font-bold">technologies</span> to create unique solutions.
    </h1>
    <p className="text-base md:text-lg max-w-sm md:max-w-xl lg:max-w-2xl text-gray-800">
      I'm passionate about creative problem-solving and always looking for new ways to expand my knowledge and skills. Here you'll find more about me.
    </p>
    <div className="flex justify-center items-center mt-8">
      <a href="/about" className="text-sm py-3 px-5 md:px-6 md:py-3 md:text-lg lg:px-6 lg:py-3 lg:text-xl btn2">
        Learn More
      </a>
    </div>
  </div>
</section>

<section id="projects" className="min-h-screen flex flex-col justify-center items-center w-screen md:px-20 bg-black" 
style={{ minHeight: '90vh' }}>
  <h1 className="text-xl font-bold mt-20 uppercase text-[var(--color-lux)] md:text-2xl lg:text-4xl">
      Some of my projects
  </h1>
<div className="container p-4 mb-20 mt-10">
            <div className="columns-1 md:columns-2 lg:columns-3">
            {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image.src}
              className="p-4 first:mt-0 rounded-2xl"
            />
          </div>
        ))}
        <div className="flex justify-center items-center mt-8">
      <a href="/projects" className="text-sm py-3 px-5 md:px-6 md:py-3 md:text-lg lg:px-6 lg:py-3 lg:text-xl button border-1">
        Explore More
      </a>
    </div>
    </div>
    </div>
</section>

<section id="contact" className="min-h-screen flex flex-col justify-center items-center w-full px-8 md:px-20 bg-white" style={{ minHeight: '90vh' }}>
  <div className="flex flex-col text-center gap-6">
    <h1 className="text-lg mb-4 text-[var(--color-red)] md:text-xl lg:text-2xl font-semibold leading-relaxed max-w-sm md:max-w-xl lg:max-w-2xl">
      Get in Touch!
    </h1>
    <p className="text-base md:text-lg max-w-sm md:max-w-xl lg:max-w-2xl text-[var(--color-red)]">
      I’d love to hear from you! Whether you have a question, suggestion, or just want to connect, feel free to reach out. I'm always open to new opportunities and collaborations. 
    </p>
    <p className="text-base md:text-lg max-w-sm md:max-w-xl lg:max-w-2xl text-gray-800">
      You can reach me through different platforms just right down below, or if you don't want to wait, you can send me an email at <a href="mailto:youremail@example.com" className="font-bold">itsyix21@gmail.com</a>. I look forward to hearing from you!
    </p>
    <div className="flex justify-center items-center mt-8">
      <a href="/contact" className="text-sm py-3 px-5 md:px-6 md:py-3 md:text-lg lg:px-6 lg:py-3 lg:text-xl btn2">
        Contact Form
      </a>
    </div>
  </div>
</section>



    </div>
    
  );
};
