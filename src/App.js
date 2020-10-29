import React from "react";
import Wrapper from "./components/wrapper";
import Navbar from "./components/navbar"
import Title from "./components/title"
import Table from "./components/table"





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
