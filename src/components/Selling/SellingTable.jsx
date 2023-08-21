/** The delete */
import React, { useState } from "react";
import "./SellingTable.css";
// import { MyData } from "../../data/TestData";
import SellingTableItem from "./SellingTableItem";
import Dialog from "../Dialog/Dialog";
import SellingForm from "./SellingForm";

const SellingTable = (props) => {
  const [itemsSelling, setItemsSelling] = useState(props);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editorOpen, setEditorOpen] = useState(false);
  const [postObject, setPostObject] = useState({});
  console.log(props, "props");

  const deleteSelectedItem = async (postId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_STRANGERS_THINGS_BASE_API}/posts/${postId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  const editSelectedItem = async (id, updateObject) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_STRANGERS_THINGS_BASE_API}/posts/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            post: updateObject,
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
  const deleteHandler = async (postId) => {
    console.log(postId, "deletePostIf");
    const deleteResponse = await deleteSelectedItem(postId);
    //if true show deleted toast and update post list
    console.log(deleteResponse, "deleteResponse");
  };

  const createUpdateObject = (editObject) => {
    return {
      title: editObject.title,
      description: editObject.description,
      price: editObject.price,
      location: editObject.location,
      willDeliver: editObject.willDeliver,
    };
  };
  const editHandler = async (editObject) => {
    //show for editing dialog
    const editStatus = await editSelectedItem(
      editObject._id,
      createUpdateObject(editObject)
    );
    //if true show updated toast and update post list
    console.log(editStatus, "editStatus");
  };
  const handleDialogClose = (e) => {
    setDeleteOpen(false);
    setEditorOpen(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    editHandler(postObject);
    setEditorOpen(false);
  };
  return (
    <>
      <div className="cards">
        {props.posts &&
          props.posts.map((sellingItem) => {
            return (
              <SellingTableItem
                key={sellingItem._id}
                {...sellingItem}
                onDelete={(selectedPostObject) => {
                  setPostObject(selectedPostObject);
                  setDeleteOpen(true);
                }}
                onEdit={(selectedPostObject) => {
                  setPostObject(selectedPostObject);
                  setEditorOpen(true);
                }}
              />
            );
          })}
      </div>
      <Dialog
        open={deleteOpen}
        width={35}
        height={10}
        onClose={handleDialogClose}
      >
        <div className="dialog-container">
          <p>
            Are you sure you want to make post <b>{postObject.title}</b>{" "}
            inactive?
          </p>
          <div className="dialog-actions">
            <button
              onClick={() => {
                deleteHandler(postObject._id);
                setDeleteOpen(false);
              }}
            >
              Confirm
            </button>{" "}
            <button
              onClick={() => {
                setDeleteOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </Dialog>
      {editorOpen && (
        <Dialog
          open={editorOpen}
          width={25}
          height={25}
          onClose={handleDialogClose}
        >
          <div className="dialog-container">
            <SellingForm
              id="postEditorForm"
              {...postObject}
              setPostObject={setPostObject}
              handleSubmit={submitHandler}
            />
            <div className="dialog-actions">
              <button type="submit" form="postEditorForm" onClick={() => {}}>
                Save
              </button>
              <button
                onClick={() => {
                  setEditorOpen(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default SellingTable;
