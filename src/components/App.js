import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listingsState, setListingsState] = useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(listings => setListingsState(listings))
  },[])
  
  // console.log(listingsState)

  function handleDelete(e){

    let filteredListings = listingsState.filter((item)=> item.id !== parseInt(e.target.parentNode.parentNode.id))

    setListingsState(filteredListings)
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer listingsState={listingsState} onDelete={handleDelete} />
    </div>
  );
}

export default App;
