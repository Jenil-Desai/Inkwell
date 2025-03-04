import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../constants/Config";

export interface Blog {
  title: string;
  shortDesc: string;
  content: string;
  id: number;
  author: {
    name: string;
    phrase: string;
  };
  createdAt: string;
}

export interface UserBlog {
  id: string;
  title: string;
  published: string;
  createdAt: string;
  author: {
    name: string;
  };
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setloading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlog(res.data);
        setloading(false);
      });
  }, [id]);
  return { loading, blog };
};

export const useBlogs = () => {
  const [loading, setloading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const jwt = localStorage.getItem("token");

  useEffect(() => {
    axios.get(`${BACKEND_URL}/blog/bulk`, { headers: { Authorization: jwt } }).then((res) => {
      setBlogs(res.data.posts);
      setloading(false);
    });
  }, []);

  return { loading, blogs };
};

export const useUserBlogs = () => {
  const [loading, setloading] = useState(true);
  const [blogs, setBlogs] = useState<UserBlog[]>([]);
  const jwt = localStorage.getItem("token");

  useEffect(() => {
    axios.get(`${BACKEND_URL}/blog/user-blogs`, { headers: { Authorization: jwt } }).then((res) => {
      setBlogs(res.data.posts);
      setloading(false);
    });
  }, []);

  console.log(blogs);

  return { loading, blogs };
};
