import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Circle from "./Circle";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

export default function BlogCard({ authorName, title, content, publishedDate, id }: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-slate-200 pb-4 p-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <div className="flex justify-center flex-col">
            <Avatar name={authorName} size={8} />
          </div>
          <div className="font-extralight text-sm pl-2 pr-2 flex justify-center flex-col">{authorName}</div>
          <div className="flex justify-center flex-col">
            <Circle />
          </div>
          <div className="font-thin text-sm pl-2 text-slate-500 flex justify-center flex-col">{publishedDate}</div>
        </div>
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
        <div className="text-slate-500 text-sm font-thin pt-4">{Math.ceil(content.length / 100) + " mintues"}</div>
      </div>
    </Link>
  );
}
