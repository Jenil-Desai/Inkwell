import MyBlogs from "../components/profile-components/MyBlogs";

export type profileTabs = {
  label: string;
  value: string;
  desc: () => JSX.Element;
};

export const profileTabs: profileTabs[] = [
  {
    label: "My Blogs",
    value: "my-blogs",
    desc: MyBlogs,
  },
  {
    label: "My Profile",
    value: "my-profile",
    desc: MyBlogs,
  },
];
