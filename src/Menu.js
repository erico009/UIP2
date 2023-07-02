import { useState } from "react";
import Facet from './Facet';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Menu = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [drinks, setDrinks] = useState(
        [
            {dname:'Milk Tea', dairy:true, cost:10, calories:700, id:1},
            {dname:'Strawberry Tea', dairy:false, cost:9, calories:400, id:2},
            {dname:'Pineapple Juice', dairy:false, cost:8.5, calories:300, id:3}
        ]);
    return(
        <><h1>Menu Component</h1>
        <Facet /><div>
            {drinks.map((drinks) => (
                <div key={drinks.id}>
                    <h2 onClick={handleShow}>{drinks.dname}</h2>
                </div>
            ))}
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is supposed to be a modal</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal></>
    );
}

export default Menu;