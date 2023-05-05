'use client';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6">{children}</div>
  )
}

export default Container;
