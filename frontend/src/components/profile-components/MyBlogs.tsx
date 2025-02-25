import { useUserBlogs } from "../../hooks";
import { Card, Chip, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import { TABLE_HEAD } from "./TableHeads";
import MyBlogsSkeleton from "./MyBlogsSkeleton";

export default function MyBlogs() {
  const { loading, blogs } = useUserBlogs();

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
                    <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                      Edit
                    </Typography>
                  </MenuHandler>
                  <MenuList placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                      View
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
