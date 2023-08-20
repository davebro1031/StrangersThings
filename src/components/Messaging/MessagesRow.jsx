import React from "react";

export const MessagesRow = ({ postTitle, userName, content }) => {
  return (
    <tr>
      <td>{userName}</td>
      <td>{postTitle}</td>
      <td>{content}</td>
    </tr>
  );
};
export default MessagesRow;
