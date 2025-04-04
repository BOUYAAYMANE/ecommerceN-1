import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../component/utilitys/ToastNotify";
import getAllCategory from "../../redux/actions/categorieAction";
import { getAllBrand } from "../../redux/actions/brandAction";
import { createProduct } from "../../redux/actions/productsAction";
import { getOneCategory } from "../../redux/actions/subCategoryAction";
const Addproducthook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // verification la offlign of connection
    if (!navigator.onLine) {
      notify("هناك مشكله فى الاتصال بالانترنت", "warning");
      return;
    }
    dispatch(getAllCategory());
    dispatch(getAllBrand());
  }, []);
  // get last categorys state from redux
  const category = useSelector((state) => state.allCategory.category);
  // get last brand state from redux
  const brand = useSelector((state) => state.allBrand.brand);
  // get last subCategorie apartir de catego id state from redux
  const subCategoriesCond = useSelector(
    (state) => state.subCategory.subcategory
  );
  // select and remove of list subcategor
  const onSelectSubCategorie = (selectedList) => {
    setSelectedsubId(selectedList);
  };
  const onRemoveSubCategorie = (selectedList) => {
    setSelectedsubId(selectedList);
  };
  // pour multy image quon on va ajouter
  const [images, setImages] = useState([]);
  // pour les subCatego apartir d id Categ
  const [options, setOptions] = useState([]);
  const [loadingS, setLoading] = useState(true);
  // const [IsPress, setIsPress] = useState(false);

  // state pour ajout d autre value
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم");
  const [priceAftr, setPriceAftr] = useState("السعر بعد الخصم");
  const [qty, setQty] = useState("الكمية المتاحة");
  const [catId, setCatId] = useState("");
  const [brandId, setbrandId] = useState("");
  //   subCategories selected
  const [selectedsubId, setSelectedsubId] = useState([]);

  //   to  show hid color piker
  const [showColor, setShowColor] = useState(false);
  //   to store all pick color
  const [colors, setColors] = useState([]);
  // for show color
  const onShowColor = () => {
    setShowColor(!showColor);
  };
  const HundelChangeComplet = (color) => {
    setColors([...colors, color.hex]); //...colors => valeur l9dima d array + new
    setShowColor(!showColor);
  };
  const removeColor = (color) => {
    // return (filtre) data sans color choix
    const newColors = colors.filter((e) => e !== color);
    setColors(newColors);
  };
  // when select category
  const onSelectCategory = async (e) => {
    if (e.target.value != 0) {
      // lorsque on select categories => dispatsh sur l action qui donne les subCate d un categ
      await dispatch(getOneCategory(e.target.value));
    }
    setCatId(e.target.value);
  };
  //
  useEffect(() => {
    if (catId != 0) {
      if (subCategoriesCond.data) {
        setOptions(subCategoriesCond.data);
      }
    }
  }, [catId]);

  // when select brand
  const onSelectBrand = (e) => {
    setbrandId(e.target.value);
  };
  //to convert base 64 to file
  function dataURLtoFile(dataurl, filename) {
    // Split the data URL into the MIME type and the base64 data
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    // Convert the base64 data to a Uint8Array
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    // Create and return a File object
    return new File([u8arr], filename, { type: mime });
  }
  //  //console.log(catId)
  const onChangeProdName = (e) => {
    setProdName(e.target.value);
  };
  const onChangeProdDescription = (e) => {
    setProdDescription(e.target.value);
  };
  const onChangePriceBefore = (e) => {
    setPriceBefore(e.target.value);
  };
  const onChangepriceAfter = (e) => {
    setPriceAftr(e.target.value);
  };
  const onChangeQty = (e) => {
    setQty(e.target.value);
  };
  //get create meesage
  const product = useSelector((state) => state.allProduct.product);
  //to  save data and envoi vers base de donner
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      notify("هناك مشكله فى الاتصال بالانترنت", "warning");
      return;
    }
    if (
      catId === 0 ||
      prodName === "" ||
      prodDescription === "" ||
      images.length <= 0 ||
      priceBefore <= 0 ||
      priceAftr >= priceBefore
    ) {
      notify("من فضلك اكمل البيانات", "warning");
      return;
    }
    // convert base 64 image to file
    const imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    // convert array (bzaf d image) of 64 image to file (Array.from(Array .. => créer un tableau contenant une séquence d'entiers allant de 0 à la longueur de la liste des clés de l'objet "images" moins 1.)
    const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(//code js
      
      (index) => {
        return dataURLtoFile(images[index], Math.random() + ".png");
      }
    );
    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);
    formData.append("priceAfterDiscount", priceAftr);
    // la 1er image pour cover
    formData.append("imageCover", imgCover);
    formData.append("category", catId);
    formData.append("brand", brandId);
    // save array (color , subCat)
    colors.map((color) => formData.append("availableColors", color));
    selectedsubId.map((item) => formData.append("subcategory", item._id));
    itemImages.map((image) => formData.append("images", image));
    setLoading(true);
    // setIsPress(true)
    await dispatch(createProduct(formData));
    setLoading(false);
  };
  useEffect(() => {
    if (loadingS === false) {
      setCatId("0");
      setSelectedsubId([]);
      setProdName("");
      setProdDescription("");
      setPriceBefore("السعر قبل الخصم");
      setPriceAftr("السعر بعد الخصم");
      setQty("الكمية المتاحة");
      setbrandId(0);
      setColors([]);
      setImages([]);
      setOptions([]);
      // setTimeout(() => {
      //   setIsPress(false)
      // }, 1000);
      if (product) {
        if (product.status === 201) {
          notify("تم الاضافة بنجاح", "Success");
        } else {
          notify("هناك مشكله", "Error");
        }
      }
    }
  }, [loadingS]);
  return [
    category,
    brand,
    setImages,
    images,
    prodName,
    prodDescription,
    priceBefore,
    priceAftr,   
    qty,
    colors,
    showColor,
    onSelectSubCategorie,
    onRemoveSubCategorie,
    options,
    onShowColor,
    HundelChangeComplet,
    removeColor,
    onSelectCategory,
    onSelectBrand,
    onChangeProdName,
    onChangeProdDescription,
    onChangePriceBefore,
    onChangepriceAfter,
    onChangeQty,
    handelSubmit,
  ];
};
export default Addproducthook;