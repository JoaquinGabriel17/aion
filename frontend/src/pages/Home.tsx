import React from "react";
import CardCollection from "../components/CardCollection.tsx";
import About from "../components/About.tsx";

const exampleCollections = [
  {
    id: 1,
    title: "Luz y Sombras",
    author: "Camila Rojas",
    images: ["/anuel.jpg", "/caballos.jpg", "/caballos1.jpg"],
  },
  {
    id: 2,
    title: "Retratos Urbanos",
    author: "Juan Pérez",
    images: ["/caballos2.jpg", "/jesula.jpg", "/terminator.jpg" ],
  },
  {
    id: 3,
    title: "Naturaleza Viva",
    author: "Lucía Gómez",
    images: ["/trancas.jpeg", "trancas1.jpeg"]
  },
];

const Home: React.FC = () => {
  return (
    <main className="mt-6 min-h-screen bg-[#F7F9FC] flex flex-col items-center py-6 px-3  "  >
      
      {/*<h1 className="text-4xl font-bold text-[#1A1A1A] mb-6 text-center">
        Aion
      </h1>*/}

      <div className="mt-10 flex flex-col gap-6 w-full items-center">
        {exampleCollections.map((col) => (
          <CardCollection
            key={col.id}
            title={col.title}
            author={col.author}
            images={col.images}
            onClick={() => alert(`Abrir colección: ${col.title}`)}
          />
        ))}
        <button className="bg-blue-600 rounded-2xl p-3 font-bold text-[#FFFFFF] mb-4">Ver todas las colecciones</button>
      </div>
      <About />
    </main>
  );
};

export default Home;
