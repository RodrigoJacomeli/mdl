import React from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { Close } from 'styled-icons/evaicons-solid'

import Warmup from '../../asset/img/warmup.jpg'

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalWrapper = styled.div`
  width: 65%;
  height: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.4);
  background-color: #FFF;
  color: #000;
  display: flex;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

const ModalImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button{
    padding: 10px 24px;
    background-color: #141414;
    color: #FFF;
    border: none;
  }
`

const CloseModalButton = styled(Close)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  height: 32px;
  padding: 0;
  z-index: 10;
  color: #FFF;
  background-color: rgb(253, 200, 84);
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);

  &:hover {
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.8);
    background-color: rgb(250, 120, 50);
    color: #AAA;
    transition: 1s linear 0.1s;
  }
`
type Props = {
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<Props> = ({showModal, setShowModal}) => {

  const modalRef = React.useRef()

  const animation = useSpring({
    config:{
      duration: 300
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  })

  const CloseModal = (e: { target: undefined }) => {
    if(modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  const keyPress = React.useCallback(e => {
    if(e.key === 'Escape' && showModal) {
      setShowModal(false)
    }
  }, [setShowModal, showModal])

  React.useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  return (
    <>
      {showModal ? (
        <Background>
          <animated.div style={animation}>
            <ModalWrapper>
              <ModalImg src={Warmup} alt="Random Image" />
              <CloseModalButton aria-label='Close Modal' onClick={() => setShowModal(prev => !prev)} />
            </ModalWrapper>
          </animated.div>
        </Background>
      ): null}
    </>
  )
}

export default Modal