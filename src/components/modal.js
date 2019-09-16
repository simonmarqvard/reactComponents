import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.clearSelectedOptions}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Options</h3>
    {props.selectedOption && <p className="body">{props.selectedOption}</p>}
    <button className="button" onClick={props.clearSelectedOptions}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
