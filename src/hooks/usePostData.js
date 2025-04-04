import baseUrl from "../Api/baseUrl";

// Insert data avec image ou bien autre de type file (song,video...)
const usePostDataWithImage = async (url, params) => {
  // hadi kanzidoha f post bach ka t insere image,video...
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const resp = await baseUrl.post(url, params, config);
  return resp;
};
// insert data sans file(image....)
const usePostData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const resp = await baseUrl.post(url, params, config);
  return resp;
};
export { usePostData, usePostDataWithImage };
