import { Card } from '@material-tailwind/react';
import { classNames } from '../utils';
import { useState, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { CustomCarousel } from '../components/carousel/CustomCarousel';

const Partner = () => {
  const cards = [
    {
      id: new Date().getTime().toString(32) + new Date().getUTCMilliseconds(),
      header: <div className='h-32 w-32 rounded-full bg-gray-300'></div>,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt omnis accusamus quidem quae quasi cupiditate doloribus libero nisi at, earum beatae natus, autem, dolor facilis.',
    },
    {
      id: new Date().getTime().toString(2) + new Date().getUTCMilliseconds(),
      header: <div className='h-32 w-32 rounded-full bg-gray-300'></div>,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt omnis accusamus quidem quae quasi cupiditate doloribus libero nisi at, earum beatae natus, autem, dolor facilis.',
    },
    {
      id: new Date().getTime().toString(32),
      header: <div className='h-32 w-32 rounded-full bg-gray-300'></div>,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt omnis accusamus quidem quae quasi cupiditate doloribus libero nisi at, earum beatae natus, autem, dolor facilis.',
    },
  ];

  const activeSlides = useRef<HTMLDivElement[]>(Array(cards.length).fill(null));
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [sliderWidth, setSliderWidth] = useState<string>('');

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + cards.length) % cards.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % cards.length);
  };

  console.log(activeSlides);
  console.log(sliderWidth);
  console.log(currentSlide);

  return (
    <Card
      className='carousel-slider bg-transparent'
      placeholder='carousel slide parent'
      shadow={false}>
      <Card placeholder='carousel slide parent' shadow={false} className='bg-transparent'>
        <Card
          placeholder='carousel slide parent'
          shadow={false}
          className={classNames('carousel-slide bg-transparent')}>
          <button
            onClick={handlePreviousSlide}
            className='z-10 absolute top-1/2 left-4 -translate-y-1/2 h-14 w-14 rounded-full border shadow-sm flex items-center justify-center bg-white'>
            <ChevronLeftIcon className='h-6 w-6 stroke-[3] text-gray-800' />
          </button>

          <div
            className='carousel-slider-track'
            style={{
              //   transform: `translate3d(calc(${-626 * cards.length}px), 0px, 0px)`,
              width: sliderWidth,
            }}>
            {cards.map((card, index) => (
              <CustomCarousel
                key={card.id}
                card={card}
                active={currentSlide === index}
                activeRefs={activeSlides}
                setSliderWidth={setSliderWidth}
                index={index}
              />
            ))}
          </div>
          <button
            onClick={handleNextSlide}
            className='z-10 absolute top-1/2 right-4 -translate-y-1/2 h-14 w-14 rounded-full border shadow-sm flex items-center justify-center bg-white'>
            <ChevronRightIcon className='h-6 w-6 stroke-[3] text-gray-800' />
          </button>
        </Card>
      </Card>
    </Card>
  );
};
export default Partner