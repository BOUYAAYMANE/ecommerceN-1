import baseUrl from "../Api/baseUrl";

const useDeleteData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const resp = await baseUrl.delete(url,config ,  params);
  return resp.data;
};
export default useDeleteData;


