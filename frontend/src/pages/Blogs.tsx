import BlogSkeleton from "../components/BlogSkeleton";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";

export default function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="flex justify-center">
        <div>
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div>
        <div>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} id={blog.id} authorName={blog.author.name || "Anonymous User"} title={blog.title} content={blog.shortDesc} publishedDate={"2nd Feb 2024"} />
          ))}
        </div>
      </div>
    </div>
  );
}
