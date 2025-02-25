import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Publish from "./pages/Publish";
import Home from "./pages/Home";
import Appbar from "./components/Appbar";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
