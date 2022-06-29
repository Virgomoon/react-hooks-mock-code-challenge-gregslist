import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingsState}) {

  console.log(listingsState)
  const showListings = listingsState.map((list)=> {
    return(
      <ListingCard key={list.id} list={list} />
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
