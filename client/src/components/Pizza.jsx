import React, { useState } from "react";
// import PizzaView from "./PizzaView";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Pizza = ({ data }) => {
  const [Quanttity, setQuantity] = useState(1);
  const [Varient, setVarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <div className=" d-flex flex-column text-light bg-dark align-items-center pb-3 mb-4 pizzaBox overflow-hidden shadow-lg">
      <div onClick={handleShow}>
        <h3 className="pt-3 w-100 text-center">{data.name}</h3>
        <img
          src={data.image}
          alt={data.name}
          // className="img-fluid"
          height="200"
          width="300"
        />
      </div>
      <div className="Info">
        <div>
          <p>Varients</p>
          <select
            className="w-75 text-sm-center selecttion "
            value={Varient}
            onChange={(e) => {
              setVarient(e.target.value);
            }}
          >
            {data.varients.map((variant, index) => {
              return (
                <option value={variant} key={index*45}>
                  {variant}
                </option>
              );
            })}
          </select>
        </div>
        <div>{/* <PizzaView className="translate-middle-y-5" /> */}</div>
        <div>
          <p>Quanttity</p>
          <select
            className="w-75 text-sm-center selecttion"
            value={Quanttity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((qty,index) => {
              return (
                <option value={qty} key={index*1415}>
                  {qty}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="d-flex flex-row  bg-primary  lower">
        <div className="">
          <p>
            Price:{" "}
            <span className="price">
              Rs. {data.prices[Varient] * Quanttity} /-
            </span>
          </p>
        </div>
        <div className="">
          <p>
            <button className="btn btn-danger border-0 mb-1 mt-1 text-light rounded s text-light Order">
              Order Now
            </button>
          </p>
        </div>
      </div>

      {/*Model section */}
      <div>
        {/* <Button variant="primary" onClick={handleShow}>
        Details
      </Button> */}

        <Modal show={show} onHide={handleClose} centered>
          <div className="bg-dark text-light">
            <Modal.Header>
              <Modal.Title className="text-center">{data.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <img
                  src={data.image}
                  alt={data.name}
                  // className="img-fluid"
                  className="w-100 h-75 "
                />
                <p className="mt-2">{data.description}</p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Order Now
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Pizza;
