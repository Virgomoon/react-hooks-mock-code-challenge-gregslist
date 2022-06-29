import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingsState, onDelete}) {

  console.log(listingsState)
  const showListings = listingsState.map((list)=> {
    return(
      <ListingCard key={list.id} list={list} onDelete={onDelete} />
      )
  })

  return (
    <main>
      <ul className="cards">
        {showListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
