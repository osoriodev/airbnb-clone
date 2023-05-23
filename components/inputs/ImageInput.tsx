'use client';

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

interface ImageInputProps {
  value: string;
  onChange: (value: string) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({ value, onChange }) => {
  const handleUpload = useCallback((result: any) => {
    onChange(result.info.secure_url);
  }, [onChange]);

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="g9ef7gtm"
      options={{
        maxFiles: 1
      }}
    >
      {({ open }) => {
        return (
          <button
            className="
              flex
              flex-col
              items-center
              justify-center
              gap-4
              p-20
              relative
              border-2
              border-dashed
              border-neutral-300
              text-neutral-600
              transition
              hover:opacity-70
            "
            onClick={() => open?.()}
          >
            <TbPhotoPlus size={48} />
            <span className="text-lg font-semibold">Click to upload</span>
            {value && (
              <div className="w-full h-full absolute inset-0">
                <Image
                  src={value}
                  alt="Upload"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
          </button>
        )
      }}
    </CldUploadWidget>
  )
}

export default ImageInput;
