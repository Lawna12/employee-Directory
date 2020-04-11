import React from "react";
import Header from "./components/Header/header"
import Table from "./components/Table/table";
import SearchInput from "./components/SearchInput/searchInput";

export default function App() {
  return (
    <div> 
        <Header />
        <SearchInput />
        <Table />
    </div>
  );
}

