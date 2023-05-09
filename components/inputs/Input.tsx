'use client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  required,
  register,
  errors
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="absolute top-4 left-2 text-neutral-700"
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`
          w-full
          px-4
          py-3
          border-2
          rounded-md
          peer
          outline-none
          bg-white
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? 'pl-9' : 'pl-4'}
          ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
          ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
      />
      <label
        className={`
          px-2
          absolute
          top-3
          text-md
          transform
          -translate-y-6
          scale-75
          origin-[0]
          duration-150
          bg-white
          ${formatPrice ? 'left-7' : 'left-2'}
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-6
          ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
          pointer-events-none
        `}
      >
        {label}
      </label>
    </div>
  )
}

export default Input;
