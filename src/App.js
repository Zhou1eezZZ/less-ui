import React, { useState } from 'react';
import { Button, Modal } from './components';

function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="App">
      Hello, less ui.
      <br />
      <Button primary onClick={() => setModalShow(true)}>
        open modal
      </Button>
      <Button>No</Button>
      <Button disabled>disable</Button>
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
