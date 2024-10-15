import classes from "./NewPost.module.css";
import { useState } from "react";

/**
 * <NewPost> component renders a form with a textarea and an input texxt
 *
 * The component makes use of the useState() hook
 * to keep the state of a variable on every component's re-render:
 *
 * 1. Registers an event listner that reacts to input changes in the text area.
 * 2. Updates the state of  enteredBody variable and triggers a re-render action.
 * 3. Prints out the current state of enteredBody in a <p>.
 * @returns {JSX.Element} a <form>
 */
function NewPost() {
  const [enteredBody, setEnteredBody] = useState("");

  function changeBodyHandler(event) {
    // the re-render action on the entire component
    // is triggered by calling the update function.
    setEnteredBody(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        {/* the event listener is registered here*/}
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
