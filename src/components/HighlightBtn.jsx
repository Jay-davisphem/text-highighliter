import {useState} from 'react'
import useVisible from './hooks/useVisible';
import useModal from './hooks/useModal'
import Modal from './Modal'
import Button from './Button'
import img from './cancel.png'

function HighlightBtn({cls, type, active, handleActive, oth}){
  const [img_cls, setIt] = useState('')
  const {isvisible, toggleModal} = useModal();
  const {ref, isVisible, setIsVisible} = useVisible(false)

  const handleCancel = () => {
    toggleModal()
  }
  const handleSelect = (e) => {
    setIsVisible(!isVisible)
  }
  return (<>
    <img src={img} className={isVisible && 'img'} onClick={handleCancel}/>
    <Modal isVisible={isvisible} hideModal={toggleModal} />
    <Button cls={cls + ' btn'} type={type} re_f={ref} oth={oth} active={active} handleActive={handleSelect} /></>
	)
}
export default HighlightBtn
