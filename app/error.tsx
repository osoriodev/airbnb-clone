'use client';

import { useEffect } from "react";

import Empty from "@/components/Empty";

interface ErrorStateProps {
  error: Error
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <Empty
        title="Oh no"
        subtitle="Something went wrong!"
      />
    </main>
  )
}

export default ErrorState;
