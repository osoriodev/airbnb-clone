'use client';

import { IconType } from "react-icons";

interface CategoryInputProps {
  label: string;
  icon: IconType;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({ label, icon: Icon, selected, onClick }) => {
  return (
    <button
      className={`
        w-full
        h-full
        flex
        flex-col
        gap-3
        p-4
        border-2
        rounded-xl
        transition
        ${selected ? 'hover:border-neutral-800' : 'hover:border-neutral-500'}
        ${selected ? 'border-neutral-800': 'border-neutral-200'}
      `}
      onClick={() => onClick(label)}
    >
      <Icon size={28} />
      <span className="font-semibold">{label}</span>
    </button>
  )
}

export default CategoryInput;
