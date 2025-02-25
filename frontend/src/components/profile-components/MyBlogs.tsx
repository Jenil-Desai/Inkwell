import { useUserBlogs } from "../../hooks";
import { Card, Chip, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import { TABLE_HEAD } from "./TableHeads";
import MyBlogsSkeleton from "./MyBlogsSkeleton";
import { useNavigate } from "react-router-dom";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { BACKEND_URL } from "../../constants/Config";
import useToken from "../../hooks/useToken";
import axios from "axios";
import { useToast } from "../../context/ToastContext";

export default function MyBlogs() {
  const { loading, blogs } = useUserBlogs();
  const { token } = useToken();
  const navigate = useNavigate();
  const { addToast } = useToast();

  if (loading) {
    return <MyBlogsSkeleton />;
  }

  if (blogs.length === 0) {
    return (
      <Card className="h-full w-full flex items-center justify-center p-52" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Typography variant="h5" color="blue-gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          You have no blogs yet.
        </Typography>
      </Card>
    );
  }

  async function deleteBlog(id: string) {
    try {
      const response = await axios.delete(`${BACKEND_URL}/blog/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      if (response.data.success) {
        addToast("Blog deleted successfully", "success");
      } else {
        addToast("Failed to delete blog", "error");
      }
    } catch (error) {
      console.error(error);
    }
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
            <tr key={index} className="even:bg-blue-gray-50/50 cursor-pointer">
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
                <Chip color={published ? "green" : "red"} value={published ? "Published" : "Draft"} size="md" className="w-fit" />
              </td>
              <td className="p-4">
                <Menu>
                  <MenuHandler>
                    <EllipsisHorizontalIcon className="h-8 w-8" />
                  </MenuHandler>
                  <MenuList placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} onClick={() => navigate(`/blog/${id}`)}>
                      View
                    </MenuItem>
                    <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                      Edit
                    </MenuItem>
                    <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} className="text-red-500" onClick={() => deleteBlog(id)}>
                      Delete
                    </MenuItem>
                  </MenuList>
                </Menu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
