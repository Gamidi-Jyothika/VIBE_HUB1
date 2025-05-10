/*export const uploadMediaToCloudinary = async (media) => {
    if (media) {
      const data = new FormData();
      data.append("file", media);
      data.append("resource_type", "video");
      data.append("upload_preset", "instagram");
      data.append("cloud_name", "dnbw04gbs");
  
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dnbw04gbs/video/upload",
        {
          method: "post",
          body: data,
        }
      );
      const fileData = await res.json();
      console.log("url : ", fileData);
      return fileData.url.toString();
    } else {
      console.log("error");
    }
  };
  */
 // Config/UploadVideoToCloudnary.js

export const uploadMediaToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "frstreel");  // Replace with your Cloudinary upload preset
  formData.append("cloud_name", "gamidi-jyothika");        // Replace with your Cloudinary cloud name

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/gamidi-jyothika/video/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      return data.secure_url;
    } else {
      throw new Error(data.error.message || "Upload failed");
    }
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw new Error("Failed to upload video");
  }
};
