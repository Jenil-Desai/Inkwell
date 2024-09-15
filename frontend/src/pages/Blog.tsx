import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import FullBlog from "../components/FullBlog";

export default function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div>
      {/* @ts-ignore */}
      <FullBlog blog={blog} />
    </div>
  );
}
