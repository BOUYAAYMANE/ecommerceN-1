import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllCategory from "../../redux/actions/categorieAction";
import { getAllBrand } from "../../redux/actions/brandAction";
import {
  createProduct,
  getOneProduct,
  updateProducts,
} from "../../redux/actions/productsAction";
import { getOneCategory } from "../../redux/actions/subCategoryAction";
import notify from "../../component/utilitys/ToastNotify";
const Editproducthook = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // verification la offlign of connection
    if (!navigator.onLine) {
      notify("هناك مشكله فى الاتصال بالانترنت", "warning");
      return;
    }
    const run = async () => {
      await dispatch(getOneProduct(id));
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };
    run();
  }, []);
  // get one product details
  const item = useSelector((state) => state.allProduct.oneproduct);
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
  //
  useEffect(() => {
    if (item && item.data) {
      setCatId(item.data.category);

      setProdName(item.data.title);
      setProdDescription(item.data.description);
      setPriceBefore(item.data.price);
      setQty(item.data.quantity);
      setbrandId(item.data.brand);
      setColors(item.data.availableColors);
      setImages(item.data.images);
    }
  }, [item]);
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
    setCatId(e.target.value);
  };
  //  -1- mli katbdel catId => kat activae useEffet => dispatch
  useEffect(() => {
    if (catId != 0) {
      const run = async () => {
        // lorsque on select categories => dispatsh sur l action qui donne les subCate d un categ
        await dispatch(getOneCategory(catId));
      };
      run();
    }
  }, [catId]);
  //   -2-mli kaykon dispatch katbdel data li f subCategoriesCond
  useEffect(() => {
    if (subCategoriesCond && subCategoriesCond.data) {
      setOptions(subCategoriesCond.data);
    }
  }, [subCategoriesCond]);

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
    e.persist();
    setProdName(e.target.value);
  };
  const onChangeProdDescription = (e) => {
    e.persist();
    setProdDescription(e.target.value);
  };
  const onChangePriceBefore = (e) => {
    e.persist();
    setPriceBefore(e.target.value);
  };
  const onChangepriceAfter = (e) => {
    e.persist();
    setPriceAftr(e.target.value);
  };
  const onChangeQty = (e) => {
    e.persist();
    setQty(e.target.value);
  };
  //get create meesage
  const product = useSelector((state) => state.allProduct.product);
  //convert url to file
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
};
  //to  save data and envoi vers base de donner
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (
      catId === 0 ||
      prodName === "" ||
      prodDescription === "" ||
      images.length <= 0 ||
      priceBefore <= 0
      
    ) {
      notify("من فضلك اكمل البيانات", "warning");
      return;
    }
// url to image
    let imgCover;
    if (images[0].length <= 1000) {
      convertURLtoFile(images[0]).then((val) => (imgCover = val));
    } else {
      imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    }

    let itemImages = [];
    //convert array of base 64 image to file
    Array.from(Array(Object.keys(images).length).keys()).map((item, index) => {
      if (images[index].length <= 1000) {
        convertURLtoFile(images[index]).then((val) => itemImages.push(val));
      } else {
        itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"));
      }
    });

    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);

    formData.append("category", catId);
    formData.append("brand", brandId);

    setTimeout(() => {
      formData.append("imageCover", imgCover);
      itemImages.map((item) => formData.append("images", item));
    }, 1000);

    colors.map((color) => formData.append("availableColors", color));
    selectedsubId.map((item) => formData.append("subcategory", item._id));
    setTimeout(async () => {
      setLoading(true);
      await dispatch(updateProducts(id, formData));
      setLoading(false);
    }, 1000);
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
        if (product.status === 200) {
          notify("تم التعديل بنجاح", "success");
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
    catId,
    brandId,
  ];
};
export default Editproducthook;
