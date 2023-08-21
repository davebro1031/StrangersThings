import React from "react";
import PropTypes from "prop-types";
import useRandomPicture from "../../hooks/useRandomPicture";

const SellingTableItem = (props) => {
  const data = useRandomPicture();
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="item-title">{props.title}</h2>
        <div
          className={`item-status ${
            props.active ? "item-active" : "item-inactive"
          }`}
        >
          {props.active ? "Listing is active" : "Inactive Listing"}
        </div>
      </div>
      <div className="card-main">
        <div className="card-image">
          <img src={`${data.data}`}></img>
        </div>
        <div className="card-content">
          <div className="card-description">
            <div className="description-group">
              <label>Description</label>
              <p>{props.description}</p>
            </div>
            <div className="description-group">
              <label>Price</label>
              <p>{props.price}</p>
            </div>
            <div className="description-group">
              <label>Location</label>
              <p>
                {props.location === "[On Request]"
                  ? "Given on Request"
                  : props.location}
              </p>
            </div>
            <div className="description-group">
              <label>Delivery</label>
              <p>
                {props.willDeliver ? "Will Deliver" : "No Deliver available"}
              </p>
            </div>
            <div className="description-group">
              <label>Date of Posting</label>
              <p>
                {props.createdAt
                  ? new Date(props.createdAt).toLocaleDateString()
                  : "Date not valid"}
              </p>
            </div>
          </div>

          {props.active ? (
            <div className="card-actions">
              <button
                onClick={() => {
                  props.onDelete(props);
                }}
                aria-label="Delete"
              >
                Inactivate
              </button>
              <button
                onClick={() => {
                  props.onEdit(props);
                }}
                aria-label="Edit"
              >
                Edit
              </button>
            </div>
          ) : (
            <p style={{ color: "red" }}>
              This post is inactive therefore it can not be edited
            </p>
          )}
        </div>
      </div>
      <div className="card-footer"></div>
    </div>
  );
};

SellingTableItem.propTypes = {
  _id: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  willDeliver: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default SellingTableItem;
