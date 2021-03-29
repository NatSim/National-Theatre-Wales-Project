import React, { useState } from "react";
import Modal from "react-modal";
import "./ReactModal.css";
import * as GRIcons from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import Axios from "axios";

const popupSizing = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ReactModal = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  /*Axios POST email input to db here | Subscriber input state */
  const [state, setState] = useState({
    email: "",
  });
  //POST REQUEST - This sends message to server
  const sendSubscribersEmail = () => {
    Axios.post("http://localhost:5000/about/2", {
      email: state.email,
    })
      .then(function (response) {
        if (response.status === 201) {
          setState((prevState) => ({
            ...prevState,
            successMessage: "User has submitted their email to subscribe",
          }));
          console.log("Success!");
        } else {
          console.log("Error");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  /*Select, Text Input & Submit Button  event handlers*/
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  /*Handles Input changes*/
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    sendSubscribersEmail();
  };

  return (
    <>
      <button onClick={openModal} className="trigger-pop-up">
        Subscribe
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={popupSizing}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <GRIcons.GrClose onClick={closeModal} className="exit-popup-icon" />
        <h2 className="subscribe-subtitle">Subscribe to our Newsletter</h2>
        <MdEmail className="email-icon" />
        <form
          action=""
          method="get"
          className="form-parent1"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your email..."
            onChange={handleChange}
          />
          <div className="subcribe-button-container">
            <button>Subscribe</button>
          </div>
          <p className="terms-conditions-text">
            By subscribing you agree to the
            <a href={"/terms"} className="Link-control">
              Terms{`&`}Conditions .
            </a>
          </p>
        </form>
      </Modal>
    </>
  );
};

export default ReactModal;
