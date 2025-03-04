import { EditorContent, useEditor } from "@tiptap/react";
import { Blog } from "../hooks";
import Avatar from "./Avatar";
import { extensions } from "./editor-components/editorExtensions";

export default function FullBlog({ blog }: { blog: Blog }) {
  const editor = useEditor({
    extensions: extensions,
    content: JSON.parse(blog.content),
  });

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-12 space-y-4 px-10 w-full pt-12 max-w-screen-2xl">
        <div className="grid-cols-1 md:col-span-8">
          <div className="text-5xl font-extrabold">{blog.title}</div>
          <div className="text-slate-500 pt-2">{new Date(blog.createdAt).toLocaleString()}</div>
          <hr className="border-slate-200 my-4" />
          <div className="pt-4">
            <EditorContent editor={editor} readOnly disabled className="prose prose-sm max-w-none [&_*]:cursor-default [&_.ProseMirror]:!outline-none" />
          </div>
        </div>
        <div className="grid-cols-1 md:col-span-4">
          <div className="text-slate-600 text-lg">Author</div>
          <div className="flex">
            <div className="pr-4 flex justify-center flex-col">
              <Avatar name={blog.author.name || "Anonymous User"} size={8} />
            </div>
            <div>
              <div className="text-xl font-bold">{blog.author.name || "Anonymous User"}</div>
              <div className="pt-2 text-slate-500">{blog.author.phrase}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
