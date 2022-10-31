import { Fragment } from "react";

import ReactDOM from "react-dom";

import "./Modal.css";

const Backdrop = (props) => {
  return <div className="backdrop"></div>;
};

const Overlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
