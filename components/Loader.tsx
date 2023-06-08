'use client';

import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <PuffLoader
        size={100}
        color="red"
      />
    </div>
  )
}

export default Loader;
