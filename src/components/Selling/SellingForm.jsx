/** Use from updating post and creating new.  To create new, do not pass in props.  To update pass in props
 *
 */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./SellingTable.css";

function SellingForm(props) {
  const handleFormChange = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    props.setPostObject({ ...props, [key]: value });
  };

  return (
    <form id={props.id} onSubmit={props.handleSubmit}>
      <div className="input-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={props.title}
          onChange={(e) => {
            handleFormChange(e);
          }}
        />
      </div>
      <div className="input-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={props.description}
          onChange={(e) => {
            handleFormChange(e);
          }}
        />
      </div>
      <div className="input-group">
        <label>Price</label>
        <input
          type="text"
          name="price"
          value={props.price}
          onChange={(e) => {
            handleFormChange(e);
          }}
        />
      </div>
      <div className="input-group">
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={props.location}
          onChange={(e) => {
            handleFormChange(e);
          }}
        />
      </div>
      <div className="input-group">
        <label>Delivery</label>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <label>
            <input
              type="radio"
              name="willDeliver"
              value={true}
              onChange={(e) => {
                handleFormChange(e);
              }}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="willDeliver"
              value={false}
              onChange={(e) => {
                handleFormChange(e);
              }}
            />
            No
          </label>
        </div>
      </div>
    </form>
  );
}

SellingForm.propTypes = {
  description: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string,
  willDeliver: PropTypes.bool,
};

export default SellingForm;
