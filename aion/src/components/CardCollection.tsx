import React from "react";

interface CardCollectionProps {
  title: string;
  image: string;
  author: string;
  onClick?: () => void;
}

const CardCollection: React.FC<CardCollectionProps> = ({ title, image, author, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-[#F7F9FC] border-[#7FA1FF] rounded-2xl shadow-md overflow-hidden active:scale-95 transition-transform cursor-pointer w-full max-w-[320px] border-4 "
    >
      <div className="h-48 w-full overflow-hidden">
        
                <img
          src={image}
          alt={title}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
        />
         
        
      </div>
      <div className="p-3">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-[#FF6D6D]">por {author}</p>
      </div>
    </div>
  );
};

export default CardCollection;
