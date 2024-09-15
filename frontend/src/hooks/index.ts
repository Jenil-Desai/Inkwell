import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../Config";

export interface Blog {
  title: string;
  content: string;
  id: number;
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
