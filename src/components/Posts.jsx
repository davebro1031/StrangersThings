import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import MessageForm from "./Messaging/MessageForm";
import SelectedUserPostPopup from "./UserPosts/SelectedUserPostPopup";

const Base_URL = "2305-FTB-MT-WEB-PT";
const full_url = `https://strangers-things.herokuapp.com/api/${Base_URL}/posts`;

const getFilteredItems = (query, items) => {
  if (query === "") {
    return items;
  }

  return items.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.author.username.toLowerCase().includes(query.toLowerCase())
  );
};

export default function Posts({ query }) {
  const [posts, setPosts] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(full_url);
        const result = await response.json();
        console.log(result.data.post);
        setPosts(result.data.posts.reverse());
        return result;
      } catch (err) {
        console.error(err);
      }
    }
    getPosts();
  }, []);

  const filteredItems = getFilteredItems(query, posts);
  const [trigger, setTrigger] = useState(false);
  const [postObject, setPostObject] = useState({});

  //#region Send a Message
  const [selectedPost, setSelectedPost] = useState(null);
  const [messageValue, setMessageValue] = useState("");
  const postMessage = async (id, message) => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_STRANGERS_THINGS_BASE_API
        }/posts/${id}/messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            message: {
              content: message,
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
  const messageSubmit = (e) => {
    console.log(messageValue);
    postMessage(selectedPost._id, messageValue);
    setDialogOpen(false);
    setMessageValue("");
  };
  //#endregion

  function showDetails(post) {
    setTrigger(true);
    setPostObject(post);
  }

  return (
    <>
      <table>
        {/* Added table headers to save space and reduce redundancy! */}
        <thead>
          <tr>
            <th>User</th>
            <th>Listing</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            // Changed the list so that it only shows filtered items -- the page now responds to search inputs
            filteredItems.map((post) => {
              return (
                // Added a "listing" styling so that each listing appears as a link when hovering over it
                post.active && (
                  <tr className="listing" key={post._id}>
                    <td onClick={() => showDetails(post)}>
                      {post.author.username}
                    </td>
                    <td onClick={() => showDetails(post)}>{post.title}</td>
                    <td onClick={() => showDetails(post)}>
                      {post.active ? "Available" : "Not Availible"}
                    </td>
                    <td>
                      {localStorage.getItem("user") !== null &&
                        localStorage.getItem("user") !==
                          post.author.username && (
                          <button
                            className="button-1"
                            onClick={() => {
                              setSelectedPost(post);
                              setDialogOpen(true);
                            }}
                          >
                            Send Message
                          </button>
                        )}{" "}
                    </td>
                  </tr>
                )
              );
            })
          }
        </tbody>
      </table>
      {/* This is a popup component that is triggered when you click on a listing */}
      <PostDetails trigger={trigger} setTrigger={setTrigger} {...postObject} />
      <Dialog
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
        }}
      >
        <p>
          {selectedPost &&
            `Send a message to ${selectedPost.author.username} about ${selectedPost.title}`}{" "}
        </p>
        <MessageForm
          value={messageValue}
          setMessageValue={setMessageValue}
          onSubmit={messageSubmit}
        />
      </Dialog>
    </>
  );
}

function PostDetails(props) {
  return (
    props.trigger && (
      <SelectedUserPostPopup
        trigger={props.trigger}
        setTrigger={props.setTrigger}
        id={props._id}
        title={props.title}
        description={props.description}
        price={props.price}
        deliver={props.willDeliver}
        created={props.createdAt}
        updated={props.updatedAt}
        location={props.location}
      />
    )
  );
}
