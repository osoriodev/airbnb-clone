'use client';

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon
}) => {
  return (
    <button
      className={`
        w-full
        relative
        rounded-lg
        disabled:opacity-70
        disabled:cursor-not-allowed
        transition
        hover:opacity-80
        ${outline? 'bg-white' : 'bg-rose-500'}
        ${outline? 'border-black' : 'border-rose-500'}
        ${outline? 'text-black' : 'text-white'}
        ${small? 'py-1' : 'py-2'}
        ${small? 'text-sm' : 'text-md'}
        ${small? 'font-light' : 'font-semibold'}
        ${small? 'border-[1px]' : 'border-2'}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && (<Icon className="absolute left-4 top-2" size={24} />)}
      {label}
    </button>
  )
}

export default Button;
