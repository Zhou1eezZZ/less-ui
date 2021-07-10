import React, { useState } from 'react';
import { Button, Modal, Card, Message } from './components';

function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="App">
      Hello, less ui.
      <br />
      <br />
      <Button primary onClick={() => setModalShow(true)}>
        open modal
      </Button>
      <Button onClick={() => Message.show({ onClose: () => console.log('close') })}>No</Button>
      <Button disabled>disable</Button>
      <br />
      <br />
      <Card>This is a card.</Card>
      <Modal
        show={modalShow}
        title="THIS is title"
        onClose={() => setModalShow(false)}
        onCancel={() => setModalShow(false)}
        onOk={() => setModalShow(false)}
      >
        Modal content
      </Modal>
    </div>
  );
}

export default App;
