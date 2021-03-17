import React from "react";
import Modal from "react-modal";
import "./ReactModal.css";
import * as GRIcons from "react-icons/gr";
import { MdEmail } from "react-icons/md";

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

const ReactModal = () => {
  var subtitle;
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

  return (
    <div>
      <button onClick={openModal} className="trigger-pop-up">
        Open Modal
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
        <form>
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Your email..."
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
    </div>
  );
};

export default ReactModal;
