import { useNavigate } from "react-router-dom";
import { useUserBlogs } from "../../hooks";
import { Card, Chip, Typography } from "@material-tailwind/react";
import { TABLE_HEAD } from "./TableHeads";
import MyBlogsSkeleton from "./MyBlogsSkeleton";

export default function MyBlogs() {
  const { loading, blogs } = useUserBlogs();
  const navigate = useNavigate();

  if (loading) {
    return <MyBlogsSkeleton />;
  }

  return (
    <Card className="h-full w-full overflow-scroll" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {blogs.map(({ id, title, createdAt, published }, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50 cursor-pointer" onClick={() => navigate(`/blog/${id}`)}>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  {title}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  {new Date(createdAt).toLocaleDateString("en-IN")}
                </Typography>
              </td>
              <td className="p-4">
                <Chip value={published ? "Published" : "Draft"} size="md" className={`w-fit ${published ? "bg-green-500" : "bg-red-500"}`} />
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  Edit
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
