import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCurrentEditor } from "@tiptap/react";

type ButtonProps = {
  icon: IconProp;
  color?: string;
  size?: SizeProp;
  onClick: () => void;
};

export default function Button({ icon, color = "black", size = "sm", onClick }: ButtonProps) {
  const { editor } = useCurrentEditor();

  return (
    <button
      onClick={onClick}
      className={`p-2 px-4 rounded-md transition-all duration-200 hover:bg-gray-100
        ${editor?.isActive("underline") ? "bg-gray-200" : "bg-white"}
        border border-gray-200 hover:border-gray-300
        focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50`}
    >
      <FontAwesomeIcon icon={icon} color={color} size={size} />
    </button>
  );
}
