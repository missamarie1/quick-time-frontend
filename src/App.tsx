import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getAllUsers } from "./services/quickTimeApiService";
import Header from "./components/Header";

function App() {
  getAllUsers().then((res) => console.log(res));
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
