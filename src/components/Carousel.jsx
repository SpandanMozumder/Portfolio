import { useState } from 'react';
import { skills } from "../constants";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? skills.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === skills.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='mb-[5rem]'>
      <h1 className="mx-40 my-10 text-3xl leading-[4rem] font-semibold">
            Why Choose Me?
          </h1>

      <div className="relative font-sourcecode mx-56 h-[20rem] bg-gray-900 pt-[3rem] rounded-2xl">
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2"
          onClick={handlePrev}
        >
          <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/long-arrow-left.png" alt="long-arrow-left" className='ml-[1rem]' />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2"
          onClick={handleNext}
        >
          <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/long-arrow-right.png" alt="long-arrow-right" className='mr-[1rem]' />
        </button>
        <div className="flex justify-center font-sourcecode font-light">
          {skills.map((item, index) => (
            <div
              key={item.id}
              className={`w-full ${index === currentIndex ? 'block' : 'hidden'
                } transition-all duration-300`}
            >
              <div className="text-center items-center justify-center mx-20 flex flex-col">
                <img width="50" height="50" src={item.icon} alt={item.alt} className='py-3' />
                <h2 className="text-xl font-bold mb-1 py-3">{item.name}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
