'use client';

import { useCallback } from "react";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterInputProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

const CounterInput: React.FC<CounterInputProps> = ({
  title,
  subtitle,
  value,
  onChange
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }

    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <p className="font-medium">{title}</p>
        <p className="font-light text-gray-600">{subtitle}</p>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="
            w-8
            h-8
            flex
            items-center
            justify-center
            border-[1px]
            rounded-full
            border-neutral-400
            text-neutral-600
            hover:opacity-80
            transition
          "
          onClick={onReduce}
          aria-label="Minus"
        >
          <AiOutlineMinus />
        </button>
        <p className="text-xl font-light text-neutral-600">{value}</p>
        <button
          className="
            w-8
            h-8
            flex
            items-center
            justify-center
            border-[1px]
            rounded-full
            border-neutral-400
            text-neutral-600
            hover:opacity-80
            transition
          "
          onClick={onAdd}
          aria-label="Plus"
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  )
}

export default CounterInput;
