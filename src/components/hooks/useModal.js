import { useState } from "react";
const useModal = () => {
  const [isvisible, setIsVisible] = useState(false);

  function toggleModal() {
    setIsVisible(!isvisible);
  }
  return {
    isvisible,
    toggleModal,
  };
};
export default useModal;
