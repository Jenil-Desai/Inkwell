import { ChangeEvent } from "react";

interface LablledInputType {
  label: string;
  placholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export default function LablledInput({ label, placholder, onChange, type }: LablledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
      <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placholder} required />
    </div>
  );
}
