import classes from "./NewPost.module.css";

/**
 * <NewPost> component renders a form with a textarea and an input text.
 *
 * The component also registers an event listener that prints out to the console
 * whenever the user types into the textarea.
 *
 * @returns {JSX.Element} a <form>
 */
function NewPost() {
  // The event listener receives the event
  // that was triggered by the html element
  function changeBodyHandler(event) {
    console.log(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
