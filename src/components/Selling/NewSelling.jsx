import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SellingForm from "./SellingForm";

function NewSelling() {
  const [postObject, setPostObject] = useState({});
  const navigate = useNavigate();
  const createItem = async (updateObject) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_STRANGERS_THINGS_BASE_API}/posts`,
        {
          method: "POST",
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
  const createUpdateObject = (createObject) => {
    return {
      title: createObject.title,
      description: createObject.description,
      price: createObject.price,
      location: createObject.location,
      willDeliver: createObject.willDeliver,
    };
  };
  const createHandler = async (createObject) => {
    //show for editing dialog
    const editStatus = await createItem(createUpdateObject(createObject));
    //if true show updated toast and update post list
    setPostObject({});
    editStatus.success ? navigate("/userposts") : editStatus.error;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    createHandler(postObject);
  };
  return (
    <div style={{ width: "30em", marginLeft: "1em" }}>
      <h2>Create New Posting</h2>
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
      </div>
    </div>
  );
}

export default NewSelling;
