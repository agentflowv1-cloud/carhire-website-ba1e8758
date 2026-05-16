import React from 'react';
import Card from '../components/Card';
import cars from '../data/cars';
function Home() {
  return (
    <div className="container mx-auto p-4 pt-6 mt-10">
      <h1 className="text-3xl font-bold mb-4">Available Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car, index) => (
          <Card key={index} car={car} />
        ))}
      </div>
    </div>
  );
}
export default Home;