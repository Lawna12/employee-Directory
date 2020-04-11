import React from "react";
import Header from "./components/Header/header"
import Table from "./components/Table/table";
import SearchInput from "./components/SearchInput/searchInput";
import { AppContext } from "./components/AppContext";

export default function App() {
  return (
    <AppContext.Provider value={}>
      <div> 
          <Header />
          <SearchInput />
          <Table />
      </div>
    </AppContext.Provider>
  );
}

