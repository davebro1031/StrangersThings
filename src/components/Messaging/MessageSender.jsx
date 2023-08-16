/**Component to send a message to seller
 * postId must be passes to component to be used with post to API
 * todto: refactor post request to decouple it from component, add a toast
 * confirming message submit status.
 */
import React from "react";
import MessageForm from "./MessageForm";
import "./Messages.css";

const MessageSender = ({ postId }) => {
  const postMessage = async (postMessage) => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_STRANGERS_THINGS_BASE_API
        }/posts/${postId}/messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`,
          },
          body: JSON.stringify({
            message: {
              content: postMessage,
            },
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  const SubmitHandler = (e) => {
    const r = postMessage(e);
    if (r.success) console.log(r, "SubmitHandler");
    else console.log(r, "SubmitHandler");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifySelf: "center",
          marginTop: "4em",
        }}
      >
        <h2
          style={{
            margin: "0",
            padding: "0",
            borderBottom: "0.1rem solid #000",
          }}
        >
          {"Message user about item"}
        </h2>
        <p>{"Max. 255 characters"}</p>
        <MessageForm name="MessageForm" onSubmit={SubmitHandler} />
      </div>
    </>
  );
};

export default MessageSender;
