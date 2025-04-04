import baseUrl from "../Api/baseUrl";
// genere Hooks
const useGetData = async (url, params) => {

  const resp = await baseUrl.get(url, params);
  return resp.data;
};

// get data securise avec token
const useGetDataToken = async (url) => {
    // pour ajouter Token
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    //
   //console.log(localStorage.getItem("token"))
    const resp = await baseUrl.get(url, config);
    return resp.data;
  };
export  {useGetData,useGetDataToken};
