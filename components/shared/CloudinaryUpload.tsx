"use client";

import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/components/ui/button";

export default function CloudinaryUpload({
  onUpload,
}: {
  onUpload: (url: string) => void;
}) {
  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!}
      options={{
        maxFiles: 1,
        resourceType: "image",
      }}
      onSuccess={(result: any) => {
        onUpload(result.info.secure_url);
      }}
    >
      {({ open }) => (
        <Button type="button" variant="outline" onClick={() => open()}>
          Upload Image
        </Button>
      )}
    </CldUploadWidget>
  );
}
