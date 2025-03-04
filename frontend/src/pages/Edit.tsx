import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { BACKEND_URL } from "../constants/Config";
import useToken from "../hooks/useToken";
import TipTapEditor from "../components/editor-components/TipTapEditor";
import { useEditor } from "@tiptap/react";
import { extensions } from "../components/editor-components/editorExtensions";
import { useBlog } from "../hooks";
import Spinner from "../components/Spinner";

export default function EditPost() {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [content, setContent] = useState("");

  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });
  const navigate = useNavigate();
  const { token } = useToken();

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }

    if (blog) {
      setTitle(blog.title);
      setShortDescription(blog.shortDesc || "");
      setContent(JSON.parse(blog.content));
    }
  }, [token, blog, navigate]);

  const editor = useEditor({
    extensions,
    content,
    onUpdate: ({ editor }) => setContent(editor.getHTML()),
  });

  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  if (!editor || !blog) {
    return null;
  }

  async function handlePublishBlogBtn() {
    try {
      axios
        .put(
          `${BACKEND_URL}/blog`,
          {
            id,
            title,
            shortDesc: shortDescription,
            content: JSON.stringify(editor?.getJSON()),
            published: true,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((response) => {
          console.log(response);
          // navigate(`/blog/${response.data.id}`);
        });
    } catch (error) {
      console.log(error);
    }
  }

  if (loading || !blog) {
    return (
      <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center">
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full pt-8">
      <div className="max-w-screen-lg w-full">
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Title" />

        <input value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} type="text" className="w-full mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Short Description" />

        <TipTapEditor content={content} editor={editor} />

        <button onClick={handlePublishBlogBtn} type="submit" className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
          Publish post
        </button>
      </div>
    </div>
  );
}
