import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/highlights.css";
import NavigationBar from "./components/navBar";
import MainPage from "./components/MainPage/mainPage";
import NoPage from "./components/NoPage/NoPage";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/Auth/signIn";
import 'bootstrap/dist/css/bootstrap.css';
import SignUp from "./components/Auth/signup";
import Terms from "./components/Auth/terms";
import Cabinet from "./components/Cabinet/cabinet"
import BlogMain from "./components/Blogpost/blogMain";
import BlogpostCreate from "./components/Blogpost/blogpostCreate";
import BlogPage from "./components/Blogpost/blogPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<MainPage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="terms" element={<Terms />} />
        <Route path="cabinet" element={<Cabinet />} />
        <Route path="blog" element={<BlogMain />} />
        <Route path="blog/post" element={<BlogPage />} />
        <Route path="blog/create" element={<BlogpostCreate />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
