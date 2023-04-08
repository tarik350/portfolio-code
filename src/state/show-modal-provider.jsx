import { createContext, useState } from "react";
const appNames = ["eneblaUser", "eneblaResturant", "samaritan"];
const ShowModalContext = createContext({
  showModal: false,
  carouselData: [],
  openModal: (id) => {},
  closeModal: () => {},
});

export function ShowModalProvider(props) {
  const [showModal, setShowModal] = useState(false);
  const [carouselData, setCarouselData] = useState([]);

  const toggleShowModal = () => {
    setShowModal((prev) => {
      return !prev;
    });
  };

  const openModal = async (id) => {
    switch (id) {
      case "eneblaUser":
        {
          const { eneblaUser } = await import("../constants");
          if (eneblaUser) {
            setCarouselData(eneblaUser);
            setShowModal(true);
          }
        }
        break;

      case "eneblaResturant":
        {
          const { eneblaResturant } = await import("../constants");
          if (eneblaResturant) {
            setCarouselData(eneblaResturant);
            setShowModal(true);
          }
        }
        break;
      case "samaritan":
        {
          const { samaritan } = await import("../constants");
          if (samaritan) {
            setCarouselData(samaritan);
            setShowModal(true);
          }
        }
        break;
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const context = {
    showModal: showModal,
    openModal: openModal,
    closeModal: closeModal,
    carouselData: carouselData,
  };

  return (
    <ShowModalContext.Provider value={context}>
      {props.children}
    </ShowModalContext.Provider>
  );
}

export default ShowModalContext;
