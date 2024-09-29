import classes from "./Modal.module.css";

function Modal(props) {
  return (
    <>
      <div className={classes.backdrop}>
        <dialog className={classes.modal} open>
          {props.children}
        </dialog>
      </div>
    </>
  );
}

export default Modal;
