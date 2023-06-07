'use client';

import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <PuffLoader
        size={100}
        color="red"
      />
    </div>
  )
}

export default Loader;
