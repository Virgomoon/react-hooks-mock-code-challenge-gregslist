import React from "react";

function ListingCard({list}) {
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={list.image} alt={list.description} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{list.description}</strong>
        <span> · {list.location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
