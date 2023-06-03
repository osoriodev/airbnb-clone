'use client';

import { useRouter } from "next/navigation";

import Button from "./Button";

interface EmptyProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const Empty: React.FC<EmptyProps> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters",
  showReset
}) => {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col gap-2 items-center justify-center text-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-neutral-500">{subtitle}</p>
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            label="Remove all filters"
            onClick={() => router.push('/')}
            outline
          />
        )}
      </div>
    </div>
  )
}

export default Empty;
