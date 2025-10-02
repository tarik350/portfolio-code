import { motion, AnimatePresence } from "framer-motion";
import { BsChevronLeft, BsChevronRight, BsX } from "react-icons/bs";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const ProjectModal = ({ isOpen, onClose, carouselData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveToNextImage = () => {
    if (currentIndex < carouselData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const goBackToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setCurrentIndex(0); // Reset to first image when opening
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goBackToPrevious();
          break;
        case "ArrowRight":
          moveToNextImage();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, carouselData]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!carouselData || carouselData.length === 0) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-tertiary rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-all duration-200 shadow-lg hover:scale-110"
              aria-label="Close modal"
            >
              <BsX size={24} />
            </button>

            {/* Content */}
            <div className="p-8">
              {/* Image counter */}
              <div className="text-center mb-4">
                <span className="text-white text-sm font-medium bg-black bg-opacity-50 px-4 py-2 rounded-full">
                  {currentIndex + 1} / {carouselData.length}
                </span>
              </div>

              {/* Image display */}
              <div className="relative flex items-center justify-center min-h-[500px]">
                {/* Previous button */}
                <button
                  onClick={goBackToPrevious}
                  disabled={currentIndex === 0}
                  className={`absolute left-0 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-3 transition-all duration-200 ${
                    currentIndex === 0
                      ? "opacity-30 cursor-not-allowed"
                      : "hover:scale-110"
                  }`}
                  aria-label="Previous image"
                >
                  <BsChevronLeft size={24} />
                </button>

                {/* Image */}
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex justify-center"
                >
                  <img
                    src={carouselData[currentIndex].imageUrl}
                    alt={carouselData[currentIndex].title || `Screenshot ${currentIndex + 1}`}
                    className="max-w-full max-h-[60vh] object-contain rounded-xl shadow-lg"
                  />
                </motion.div>

                {/* Next button */}
                <button
                  onClick={moveToNextImage}
                  disabled={currentIndex === carouselData.length - 1}
                  className={`absolute right-0 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-3 transition-all duration-200 ${
                    currentIndex === carouselData.length - 1
                      ? "opacity-30 cursor-not-allowed"
                      : "hover:scale-110"
                  }`}
                  aria-label="Next image"
                >
                  <BsChevronRight size={24} />
                </button>
              </div>

              {/* Image title (optional) */}
              {carouselData[currentIndex].title && (
                <div className="mt-6 text-center">
                  <h3 className="text-white text-lg font-semibold">
                    {carouselData[currentIndex].title}
                  </h3>
                </div>
              )}

              {/* Thumbnail navigation */}
              <div className="mt-6 flex gap-2 justify-center overflow-x-auto pb-2">
                {carouselData.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      index === currentIndex
                        ? "border-white scale-110"
                        : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={item.imageUrl}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default ProjectModal;

