import React from 'react';
interface Car {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}
interface CardProps {
  car: Car;
}
function Card({ car }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg cursor-pointer">
      <img src={car.imageUrl} alt={car.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">{car.name}</h2>
      <p className="text-gray-600 mb-4">{car.description}</p>
      <a href={`/car/${car.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
    </div>
  );
}
export default Card;