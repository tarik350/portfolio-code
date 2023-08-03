import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { onBoarding } from "./assets";

import ShowModalContext from "./state/show-modal-provider";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Carousel,
} from "./components";

const App = () => {
  const showModalContext = useContext(ShowModalContext);

  const showModal = showModalContext.showModal;
  const closeModal = showModalContext.closeModal;
  const sliderData = showModalContext.carouselData;

  return (
    <BrowserRouter>
      <div className={`relative    z-0  bg-primary  backdrop-brightness-75`}>
        <Navbar />
        <div className="py-20 h-screen w-full">
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <div className="relative   ">
          <Works />
          {showModal ? (
            <div className="flex   items-end justify-center   rounded-xl  absolute top-[50%] z-50 left-[50%] center">
              <div className="h-[80vh] relative  ">
                <div
                  onClick={closeModal}
                  className="bg-[red] w-max px-4 py-[10px] absolute top-0  rounded-tr-lg  right-0"
                >
                  x
                </div>
                <div className="flex modal-background flex-wrap justify-center items-center ">
                  <div className="w-[70%]">
                    <Carousel sliderData={sliderData} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div> </div>
          )}
        </div>
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
