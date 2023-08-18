import React, { useEffect, useState } from "react";
import { MyData } from "../../data/TestData";
import MessagesRow from "./MessagesRow";
import "./Messages.css";

const Messages = ({}) => {
  const [messages, setMessages] = useState([]);
  const myData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_STRANGERS_THINGS_BASE_API}/users/me`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const result = await response.json();
      setMessages(result.data);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    myData();
    return () => {};
  }, []);
  return (
    <>
      <table className="messages-table content-block">
        <thead>
          <tr>
            <th>User</th>
            <th>Message</th>
            <th>Item</th>
          </tr>
        </thead>
        <tbody>
          {messages.messages &&
            messages.messages.map((message) => {
              return (
                <MessagesRow
                  key={message._id}
                  postTitle={message.post.title}
                  userName={message.fromUser.username}
                  content={message.content}
                />
              );
            })}
        </tbody>
      </table>
      {messages.messages && <p>No messages</p>}
    </>
  );
};

export default Messages;
