import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import TextEditor from "../components/TextEditor";
import { BACKEND_URL } from "../constants/Config";
import useToken from "../hooks/useToken";

export default function Publish() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { token } = useToken();

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, []);

  async function handlePublishBlogBtn() {
    const response = await axios.post(
      `${BACKEND_URL}/blog`,
      {
        title,
        content: description,
        published: true,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    navigate(`/blog/${response.data.id}`);
  }

  async function handleDraftBlogBnt() {
    const response = await axios.post(
      `${BACKEND_URL}/blog`,
      {
        title,
        content: description,
        published: false,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    navigate(`/blog/${response.data.id}`);
  }

  return (
    <div className="flex justify-center w-full pt-8">
      <div className="max-w-screen-lg w-full">
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          placeholder="Title"
        />

        <TextEditor
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button onClick={handlePublishBlogBtn} type="submit" className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
          Publish post
        </button>
        <button onClick={handleDraftBlogBnt} type="submit" className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900 hover:bg-gray-800 ml-2">
          Save as draft
        </button>
      </div>
    </div>
  );
}
