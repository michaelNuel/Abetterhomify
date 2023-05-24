import React, { useState, useEffect } from 'react';
import { Box  } from '@chakra-ui/react';

const TestimonislCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [items.length]);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? items.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//   };

  return (
    <Box>
      {/* <Button onClick={handlePrev}>Prev</Button> */}
      <Box display="flex" overflow="hidden">
        {items.map((item, index) => (
          <Box
            key={index}
            width="100%"
            transform={`translateX(${(index - currentIndex) * 100}%)`}
            transition="linear 0.5s"
          >
            {item}
          </Box>
        ))}
      </Box>
      {/* <Button onClick={handleNext}>Next</Button> */}
    </Box>
  );
};

export default TestimonislCarousel;
