import React from "react";
import Wrapper from "./components/wrapper";
import Navbar from "./components/navbar"
import Searchbar from "./components/searchbar"
import Title from "./components/title"
import Table from "./components/table"
import employees from "./piedpiper.json"






function App() {
  
  return (
    <>
      <Wrapper>
        <Navbar />
        
        <Title />
        <Table />
      </Wrapper>
    </>
  );
}

export default App;
