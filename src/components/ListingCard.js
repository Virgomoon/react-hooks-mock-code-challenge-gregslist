import { useState } from "react";
import React from "react";

function ListingCard({list, onDelete}) {

  const [liked, setLiked] = useState(false)

  return (
    <li className="card" id={list.id} >
      <div className="image">
        <span className="price">$0</span>
        <img src={list.image} alt={list.description} />
      </div>
      <div className="details">
        {liked ? (
          <button className="emoji-button favorite active" onClick={()=> setLiked(!liked) }>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={()=> setLiked(!liked) } >☆</button>
        )}
        <strong>{list.description}</strong>
        <span> · {list.location}</span>
        <button className="emoji-button delete" onClick={onDelete} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
