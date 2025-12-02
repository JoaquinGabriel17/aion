import React from "react";

const About: React.FC = () => {
  return (
    <section className="px-4 py-10 text-center bg-neutral-950 text-white">
      <h2 className="text-3xl font-semibold mb-4 tracking-tight">
        Sobre <span className="text-[#FF6D6D]">Aion</span>
      </h2>

      <p className="text-neutral-300 leading-relaxed text-sm max-w-md mx-auto mb-6">
        Aion es una galería digital donde fotógrafos pueden compartir su arte y
        conectar con el público. Cada colección está pensada para transmitir una
        historia única a través de la lente de su autor.
      </p>

      <p className="text-neutral-400 text-xs max-w-md mx-auto">
        Nuestro objetivo es brindar un espacio accesible y visualmente atractivo
        para descubrir, apreciar y apoyar el talento fotográfico emergente.
      </p>
    </section>
  );
};

export default About;
