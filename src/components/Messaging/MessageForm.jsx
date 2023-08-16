import React from "react";

function MessageForm({ value, name, id, onSubmit }) {
  const SubmitHandler = (submitEvent) => {
    submitEvent.preventDefault();
    onSubmit(submitEvent);
  };
  return (
    <>
      <form className="messages-form" onSubmit={SubmitHandler}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <textarea
            className="text-area"
            maxLength={255}
            type="text"
            value={value}
            name={name}
            id={id}
          />
        </div>
        <div className="button-group">
          <button className="button button-blue w-100" type="submit">
            Send
          </button>
        </div>
      </form>
    </>
  );
}

export default MessageForm;
