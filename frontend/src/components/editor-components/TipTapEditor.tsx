import { faBold, faCode, faHeading, faHighlighter, faItalic, faLevelDownAlt, faList, faQuoteLeft, faRuler, faStrikethrough, faSubscript, faSuperscript, faTable, faTrash, faUnderline } from "@fortawesome/free-solid-svg-icons";
import { Editor, EditorContent } from "@tiptap/react";
import Button from "./Button";

type TipTapEditorProps = {
  editor: Editor | null;
  content?: string;
};

export default function TipTapEditor({ content, editor }: TipTapEditorProps) {
  if (!editor) {
    return null;
  }

  return (
    <div className="mt-10">
      <div className="flex space-x-2 mb-4 mt-4">
        <Button icon={faBold} onClick={() => editor.chain().focus().toggleBold().run()} />
        <Button icon={faItalic} onClick={() => editor.chain().focus().toggleItalic().run()} />
        <Button icon={faUnderline} onClick={() => editor.chain().focus().toggleUnderline().run()} />
        <Button icon={faStrikethrough} onClick={() => editor.chain().focus().toggleStrike().run()} />
        <Button icon={faSubscript} onClick={() => editor.chain().focus().toggleSubscript().run()} />
        <Button icon={faSuperscript} onClick={() => editor.chain().focus().toggleSuperscript().run()} />
        <Button icon={faHighlighter} onClick={() => editor.chain().focus().toggleHighlight().run()} />
        <Button icon={faCode} onClick={() => editor.chain().focus().toggleCode().run()} />
        <Button icon={faQuoteLeft} onClick={() => editor.chain().focus().toggleBlockquote().run()} />
        <Button icon={faList} onClick={() => editor.chain().focus().toggleBulletList().run()} />
        <Button icon={faLevelDownAlt} onClick={() => editor.chain().focus().setHardBreak().run()} />
        <Button icon={faRuler} onClick={() => editor.chain().focus().setHorizontalRule().run()} />
      </div>

      <div className="flex space-x-2 mb-4">
        <Button icon={faHeading} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} />
        <Button icon={faHeading} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} />
        <Button icon={faHeading} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} />
        <Button icon={faHeading} onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()} />
        <Button icon={faHeading} onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()} />
        <Button icon={faHeading} onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()} />
      </div>

      <div className="flex space-x-2 mb-4">
        <Button icon={faTable} onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()} />
        <Button icon={faTrash} onClick={() => editor.chain().focus().deleteTable().run()} />
      </div>

      <EditorContent content={content} editor={editor} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-0 h-96" autoFocus />
    </div>
  );
}
