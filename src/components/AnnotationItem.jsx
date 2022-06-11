import Modal from "./Modal";
import useModal from "./hooks/useModal";
import x from "./x.svg";

function AnnotationItem({ name, type }) {
  const { isvisible, toggleModal } = useModal();
  return (
    <>
      <li>
        <span></span>
        {name}
        <span>{type}</span>
        <span onClick={toggleModal}>×</span>
      </li>
      <Modal isVisible={isvisible} hideModal={toggleModal} />
    </>
  );
}
export default AnnotationItem;
