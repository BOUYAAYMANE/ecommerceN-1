import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllCategory from "../../redux/actions/categorieAction";
import notify from "../../component/utilitys/ToastNotify";
import { creatSubCategory } from "../../redux/actions/subCategoryAction";

export const Addsubcategoryhook = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [IsPress, setIsPress] = useState(false);
  useEffect(() => {
    // verification la offlign of connection
    if (!navigator.onLine) {
      notify("هناك مشكله فى الاتصال بالانترنت", "warning");
      return;
    }
    dispatch(getAllCategory());
  }, []);
  // get last categorys state from redux
  const category = useSelector((state) => state.allCategory.category);
  const resSubCat = useSelector((state) => state.subCategory.subcategory);

  // losque on select onchange value
  const onhandelChange = (e) => {
   //console.log(e.target.value);
    setId(e.target.value);
  };
  // ajout name
  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };
  // save data
  const hundelSubmite = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
        notify("هناك مشكله فى الاتصال بالانترنت", "warning")
        return;
    }
    if (id === "0") {
      notify(" من فضلك اختر التصنيف الرئيسي", "warning");
      return;
    }
    if (name === "") {
      notify(" من فضلك اضف التصنيف الفرعي", "warning");
      return;
    }
    setLoading(true);
    setIsPress(true);

    await dispatch(
      creatSubCategory({
        name: name,
        category: id,
      })
    );
    setLoading(false);
  };
  useEffect(() => {
    // loading === false => la requet est executer bient et revenu aletat initiale
    if (loading === false) {
      setLoading(true);
      setName("");
      setId("0");
      setTimeout(() => {
        setIsPress(false);
      }, 600);
      if (resSubCat.status === 201) {
        notify("تمت الاضافة بنجاح", "success");
      } else if (
        resSubCat === "Error Error: Request failed with status code 400"
      ) {
        notify("هذا الاسم مكرر من فضلك اختر اسم اخر", "warning");
      } else {
        notify("هناك مشكله فى عملية الاضافة", "warning");
      }
    }
  }, [loading]);
  return [
    name,
    loading,
    category,
    IsPress,
    onChangeName,
    onhandelChange,
    hundelSubmite,
  ];
};
