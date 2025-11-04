import React from "react";
import CardCollection from "./components/CardCollection.tsx";
import About from "./components/About.tsx";

const collections = [
  {
    id: 1,
    title: "Luz y Sombras",
    author: "Camila Rojas",
    image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
  },
  {
    id: 2,
    title: "Retratos Urbanos",
    author: "Juan Pérez",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    id: 3,
    title: "Naturaleza Viva",
    author: "Lucía Gómez",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
];

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center py-6 px-3">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        
      </h1>

      <div className="flex flex-col gap-6 w-full items-center">
        {collections.map((col) => (
          <CardCollection
            key={col.id}
            title={col.title}
            author={col.author}
            image={col.image}
            onClick={() => alert(`Abrir colección: ${col.title}`)}
          />
        ))}
        <button className="bg-indigo-400 rounded-2xl p-2 font-bold text-gray mb-3">Ver todas las colecciones</button>
      </div>
      <About />
    </main>
  );
};

export default Home;
