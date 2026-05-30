import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import { getBasicAuthHeader } from "~/utils/auth";

type CSVFileImportProps = {
  url: string;
  title: string;
};

export default function CSVFileImport({ url, title }: CSVFileImportProps) {
  const [file, setFile] = React.useState<File>();
  const [isUploading, setIsUploading] = React.useState(false);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);
    }
  };

  const removeFile = () => {
    setFile(undefined);
  };

  const uploadFile = async () => {
    if (!file) {
      return;
    }

    const authHeader = getBasicAuthHeader();
    if (!authHeader.Authorization) {
      window.alert("Missing authorization token. Add it to localStorage first.");
      return;
    }

    setIsUploading(true);

    try {
      const response = await axios.get<string>(url, {
        params: {
          name: file.name,
        },
        headers: authHeader,
      });

      const signedUrl = response.data;

      const uploadResponse = await fetch(signedUrl, {
        method: "PUT",
        headers: {
          "Content-Type": file.type || "text/csv",
        },
        body: file,
      });

      if (!uploadResponse.ok) {
        throw new Error(`Upload failed with status ${uploadResponse.status}`);
      }

      setFile(undefined);
      window.alert("File uploaded successfully");
    } catch (error) {
      console.error("CSV upload failed", error);
      window.alert("CSV upload failed. Check the authorization token and try again.");
    } finally {
      setIsUploading(false);
    }
  };
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {!file ? (
        <input type="file" onChange={onFileChange} />
      ) : (
        <div>
          <button onClick={removeFile}>Remove file</button>
          <button onClick={uploadFile} disabled={isUploading}>
            {isUploading ? "Uploading..." : "Upload file"}
          </button>
        </div>
      )}
    </Box>
  );
}
