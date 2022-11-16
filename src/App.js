import "./App.css";
// import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/Authentication/User";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Course from "./components/pages/Courses/Course";
import Blog from "./components/pages/Blog/Blog";
import BlogForm from "./components/pages/Blog/BlogForm";
import Contact from "./components/pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<User />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/createBlog" element={<BlogForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
