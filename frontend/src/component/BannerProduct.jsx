import React, { useEffect, useState, useCallback } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';

// import image1Mobile from '../assest/banner/img1_mobile.jpg';
// import image2Mobile from '../assest/banner/img2_mobile.jpg';
// import image3Mobile from '../assest/banner/img3_mobile.jpg';
// import image4Mobile from '../assest/banner/img4_mobile.png';
// import image5Mobile from '../assest/banner/img5_mobile.jpg';

import { FaAngleRight } from 'react-icons/fa6';
import { FaAngleLeft } from 'react-icons/fa6';

const BannerProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const desktopImages = [image1, image2, image3, image4, image5];
  // const mobileImages = [image1Mobile, image2Mobile, image3Mobile, image4Mobile, image5Mobile];

  // Use useCallback to avoid recreating the nextImage function on every render
  const nextImage = useCallback(() => {
    if (desktopImages.length - 1 > currentImage) {
      setCurrentImage((prev) => prev + 1);
    }
  }, [currentImage, desktopImages.length]);

  const preveImage = () => {
    if (currentImage !== 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (desktopImages.length - 1 > currentImage) {
        nextImage();
      } else {
        setCurrentImage(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage, desktopImages.length, nextImage]);

  return (
    <div className="container mx-auto px-4 rounded">
      <div className="h-56 md:h-72 w-full bg-slate-200 relative">
        <div className="absolute z-10 h-full w-full md:flex items-center hidden">
          <div className="flex justify-between w-full text-2xl">
            <button onClick={preveImage} className="bg-white shadow-md rounded-full p-1">
              <FaAngleLeft />
            </button>
            <button onClick={nextImage} className="bg-white shadow-md rounded-full p-1">
              <FaAngleRight />
            </button>
          </div>
        </div>

        {/* Desktop and tablet version */}
        <div className="hidden md:flex h-full w-full overflow-hidden">
          {desktopImages.map((imageURL, index) => (
            <div
              className="w-full h-full min-w-full min-h-full transition-all"
              key={imageURL}
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <img src={imageURL} className="w-full h-full" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Mobile version */}
        {/* <div className="flex h-full w-full overflow-hidden md:hidden">
          {mobileImages.map((imageURL, index) => (
            <div
              className="w-full h-full min-w-full min-h-full transition-all"
              key={imageURL}
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <img src={imageURL} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default BannerProduct;
