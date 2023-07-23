import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
function Customize() {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
    
    <Form>
        <Button variant="primary" onClick={handleShow}>
                Customize
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Customize</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Size</h1>
          {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Large"
            name="group0"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Regular"
            name="group0"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
          <h1>Sugar</h1>
          {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="0%"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="30%"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="50%"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
          />
          <Form.Check
            inline
            label="80%"
            name="group1"
            type={type}
            id={`inline-${type}-4`}
          />
          <Form.Check
            inline
            label="100%"
            name="group1"
            type={type}
            id={`inline-${type}-5`}
          />
        </div>
      ))}
        <h1>Ice</h1>
        {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="No Ice"
            name="group2"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Less Ice"
            name="group2"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Normal Ice"
            name="group2"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
      ))}
        <h1>Toppings</h1>
        <label>
        <input type="checkbox" name="test" value="small"></input>
        <img src={require('./assets/pearls.png')} alt='pearls' height={70}/>
        </label>
        <label>
        <input type="checkbox" name="test" value="small"></input>
        <img src={require('./assets/cocnut jelly.png')} alt='cocnut jelly' height={70}/>
        </label>
        <label>
        <input type="checkbox" name="test" value="small"></input>
        <img src={require('./assets/aloe.png')} alt='aloe' height={70}/>
        </label>
        <label>
        <input type="checkbox" name="test" value="small"></input>
        <img src={require('./assets/popping boba.png')} alt='popping boba' height={70}/>
        </label>
        <label>
        <input type="checkbox" name="test" value="small"></input>
        <img src={require('./assets/coffee jelly.png')} alt='coffee jelly' height={70}/>
        </label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
}

export default Customize;