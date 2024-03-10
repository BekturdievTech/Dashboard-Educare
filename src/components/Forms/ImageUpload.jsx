import { useState } from "react";
import Image from "next/image";
import { UploadDropzone } from "@uploadthing/react";
import { RiErrorWarningFill } from "react-icons/ri";

export default function ImageUpload({ error, defValue }) {
  const [imageUrl, setImageUrl] = useState(defValue ? defValue : "");

  return (
    <div>
      <div className="w-full flex justify-between items-center pb-5">
        <UploadDropzone
          endpoint="imageUploader"
          appearance={{
            container: {
              borderColor: error?.ImageUrl ? "#F45B69" : "#7152F3",
              width: "480px",
              height: "200px",
              padding: "20px",
            },
            label: {
              marginTop: "10px",
              color: error?.ImageUrl ? "#F45B69" : "#7152F3",
            },
            uploadIcon: {
              color: error?.ImageUrl ? "#F45B69" : "#7152F3",
            },
            button: {
              background: error?.ImageUrl ? "#F45B69" : "#7152F3",
              marginTop: "10px",
            },
          }}
          onClientUploadComplete={(res) => {
            // Do something with the response
            setImageUrl(res[0].url);
          }}
          onUploadError={(error) => {
            alert(`ERROR! ${error.message}`);
          }}
          content={{
            allowedContent: "Supported size: 4MB",
          }}
        />
        <input type="hidden" value={imageUrl} name="ImageUrl" />
        {imageUrl.length > 0 && (
          <Image src={imageUrl} alt="" width={326} height={200} />
        )}
      </div>

      <div className="flex justify-between items-center w-full">
          {error?.ImageUrl && (
            <>
              <span className=" text-[14px] text-[#F45B69]">
                {error.ImageUrl}
              </span>
              <RiErrorWarningFill size={26} color="#f45b69" className="" />
            </>
          )}
        </div>

    </div>
  );
}
