export const uploadImageOnCloud = async (attachment: string) => {
  const filePath = {
    uri: attachment,
    type: "image/png",
    name: "image.png",
  };
  const formData = new FormData();
  formData.append("file", filePath);
  formData.append("upload_preset", "employeeApp");
  formData.append("cloud_name", "ZACodders");

  const data = await fetch(
    "https://api.cloudinary.com/v1_1/ZACodders/image/upload",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((res) => res.json())
    .catch((error) => {});
  return data;
};
