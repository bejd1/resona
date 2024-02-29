"use client";

import { UploadButton } from "../utils/uploadthing";

interface UploadthingButtonProps {
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  setNewKey: React.Dispatch<React.SetStateAction<string>>;
  setNewUrl: React.Dispatch<React.SetStateAction<string>>;
}
const UploadthingButton: React.FC<UploadthingButtonProps> = ({
  setUrl,
  setNewKey,
  setNewUrl,
}) => {
  return (
    <main className="flex flex-col items-center justify-between mb-2">
      <UploadButton
        appearance={{
          button() {
            return "bg-blue-700 px-4 hover:bg-blue-600";
          },
          container: "custom-container",
          allowedContent: "custom-allowed-content",
        }}
        className="mt-2 ut-button:bg-red-500 ut-button:ut-readying:bg-red-500/50"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);
          res.map((f: any) => {
            setUrl(f.url);
            setNewKey(f.key);
            setNewUrl(f.url);
            return;
          });
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
};

export default UploadthingButton;
