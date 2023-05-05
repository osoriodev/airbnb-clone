'use client';

interface ItemProps {
  onClick: () => void;
  label: string;
}

const Item: React.FC<ItemProps> = ({ onClick, label }) => {
  return (
    <button
      className="px-4 py-2 text-left font-semibold hover:bg-neutral-100 transition"
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Item;
