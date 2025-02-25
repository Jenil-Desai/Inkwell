import { Card, Typography } from "@material-tailwind/react";
import { TABLE_HEAD } from "./TableHeads";

export default function MyBlogsSkeleton() {
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
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <div className="animate-pulse h-4 bg-gray-200 rounded"></div>
              </td>
              <td className="p-4">
                <div className="animate-pulse h-4 bg-gray-200 rounded"></div>
              </td>
              <td className="p-4">
                <div className="animate-pulse h-4 bg-gray-200 rounded"></div>
              </td>
              <td className="p-4">
                <div className="animate-pulse h-4 bg-gray-200 rounded"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
