import { useEffect } from "react";
import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";
import { useNavigate } from "react-router-dom";

export default function Blogs() {
  const { loading, blogs } = useBlogs();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/signin");
    }
  }, []);

  if (loading) {
    return loading;
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          <div>
            {blogs.map((blog) => (
              <BlogCard key={blog.id} id={blog.id} authorName={blog.author.name || "Anonymous User"} title={blog.title} content={blog.content} publishedDate={"2nd Feb 2024"} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
