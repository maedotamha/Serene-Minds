import React from 'react';
import Image from 'next/image';

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col items-center rounded">
      <div className="relative w-full h-[200px] rounded-lg overflow-hidden ">
        <Image
          src="/Image-1.jpg"
          alt=""
          fill
          className="object-fill"
          style={{
            filter: 'brightness(0.8) contrast(1.2) saturate(1.2)',
          }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Serene Minds</h2>
          <p className="text-2xl italic">
            Unlock the power of your mind through meditation.
          </p>
          <p className="text-lg font-bold mt-4">
            Embrace the present, find inner peace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;