import React from "react";
import Modal from "react-modal";
import "./ReactModal.css";

const ReactModal = (props) => {
  return (
    <>
      <Modal>
        <button className="trigger-pop-up">
          <a
            href="https://www.nationaltheatrewales.org/#signup"
            target="_blank"
            rel="noreferrer"
          >
            Subscribe
          </a>
        </button>

        <p className="terms-conditions-text">
          By subscribing you agree to the
          <a href={"/terms"} className="Link-control">
            Terms{`&`}Conditions .
          </a>
        </p>
      </Modal>
    </>
  );
};

export default ReactModal;
