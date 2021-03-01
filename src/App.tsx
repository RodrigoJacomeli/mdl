import React from 'react';
import style from 'styled-components'

import Modal from './components/Modal/Modal'
import { GlobalStyle } from './GlobalStyle'

const Container = style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Button = style.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #FFF;
  font-size: 24px;
  cursor: pointer;
`

function App() {

  const [showModal, setShowModal] = React.useState(false)

  const openModal = () => { setShowModal(prev => !prev) }

  return (
    <div className="App">
      <Container>
        <Button onClick={openModal}>Open Modal</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Container>
    </div>
  );
}

export default App;
