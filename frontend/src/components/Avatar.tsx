interface AvatarProps {
  name: string;
  size?: number;
}

export default function Avatar({ name, size = 6 }: AvatarProps) {
  return (
    <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
      <span className="text-xs font-extralight text-gray-600 dark:text-gray-300">{name.split(" ")[0][0] + name.split(" ")[1][0]}</span>
    </div>
  );
}
