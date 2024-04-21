import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/highlights.css";
import NavigationBar from "./components/navBar";
import MainPage from "./components/MainPage/mainPage";
import NoPage from "./components/NoPage/NoPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
  );
}

export default App;
