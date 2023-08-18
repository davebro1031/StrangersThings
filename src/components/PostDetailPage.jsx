import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PostDetailPage = (props) => {
  const location = useLocation();
  const navagate = useNavigate();

  /** passed in state from the link button.  Need the useLocation hook to be able to to this */
  const dataFromLinkState = location.state?.post;
  return (
    <>
      <button
        onClick={(e) => {
          /** navigate back to home using the useNavaigate hook.  Could also use <Link>.
           * need the .. to go back up a level to /.  if you just put a / the route will be postdetailpage/
           */
          navagate("../");
        }}
      >
        Back To Posts
      </button>
      <h1>Post Detail</h1>
      <ul>
        <li>_id: {dataFromLinkState._id}</li>
        <li>username: {dataFromLinkState.author.username}</li>
        <li>description: {dataFromLinkState.description}</li>
        <li>location: {dataFromLinkState.location}</li>
        <li>price: {dataFromLinkState.price}</li>
        <li>title: {dataFromLinkState.title}</li>
        <li>
          createdAt:
          {new Date(dataFromLinkState.createdAt).toLocaleDateString(undefined)}
        </li>
      </ul>
    </>
  );
};

export default PostDetailPage;
