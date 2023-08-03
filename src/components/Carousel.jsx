import { useState } from "react";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Carousel = ({ sliderData }) => {
  const index = 0;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageAlert, showImageAlert] = useState();

  const moveToNextImage = () => {
    setCurrentIndex((prev) => {
      if (prev === sliderData.length - 1) {
        return currentIndex;
      }

      console.log(prev + 1);
      return prev + 1;
    });
  };

  const goBackToPrevious = () => {
    console.log(currentIndex);
    setCurrentIndex((prev) => {
      if (prev < 0) {
        return currentIndex;
      }
      return prev - 1;
    });
  };

  const handleAlert = (message) => {
    showImageAlert(() => {
      return alert("you have seen all the image");
    });
  };

  const zeroAlert = () => {
    showImageAlert(() => {
      return alert("no images to show");
    });
  };

  return (
    <div className=" max-w-[1400px]  w-full justify-around flex items-center  h-[780px] m-auto relative ">
      <div className="w-[350px]    bg-black group relative     p-4 pt-10 rounded-lg flex  items-center justify-center md:w-[400px]">
        {/* <div className="p-2 bg-white rounded-full absolute opacity-60 top-0 mt-2"></div>
        <div className=" w-[10px] h-[10px] bg-white opacity-60 rounded-full absolute top-[2px] left-[170px] mt-2"></div> */}
        <img
          className="object-contain rounded-xl "
          src={sliderData[currentIndex].imageUrl}
        />
        <div class="absolute px-[12px] rounded-xl w-full  h-0 top-0 left-0 bg-green-900 group-hover:h-full opacity-0 group-hover:opacity-80 transition-all ease-in-out duration-500 flex flex-col flex-1 justify- items-center ">
          <h1 className="text-[40px] pb-10  font-bold text-black opacity-100"></h1>
          <p className=" w-full"></p>
        </div>
        <div
          className="border-4 p-2 rounded-full absolute hidden mx-2 left-0 group-hover:block "
          onClick={currentIndex > 0 ? goBackToPrevious : zeroAlert}
        >
          <BsChevronLeft
            color="white"
            // size={30}
            // width={50}
            overlineThickness={100}
            underlineThickness={100}
            strikethroughThickness={200}
          />
        </div>
        <div
          className="border-4 p-2 rounded-full absolute right-0 mx-2 group-hover:block hidden transition-all ease-in-out duration-500"
          onClick={
            currentIndex !== sliderData.length - 1
              ? moveToNextImage
              : handleAlert
          }
        >
          <BsChevronRight
            overlineThickness={400}
            underlineThickness={400}
            strikethroughThickness={800}
          />
        </div>
      </div>
    </div>
  );
};

Carousel.defaultProps = {
  sliderData: [],
};

export default Carousel;
