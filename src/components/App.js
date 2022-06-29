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

  return (
    <div className="app">
      <Header />
      <ListingsContainer listingsState={listingsState} />
    </div>
  );
}

export default App;
