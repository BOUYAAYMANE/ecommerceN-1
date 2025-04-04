import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneProduct,
  getProductLike,
} from "../../redux/actions/productsAction";
import mobile from "../../assets/Image/mobile.png";
import { getOneCategory } from "../../redux/actions/categorieAction";
import { getOneBrand } from "../../redux/actions/brandAction";

const ViewProducDetailstHook = (prodId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(prodId));
  }, []);

  const oneproduct = useSelector((state) => state.allProduct.oneproduct);
  const oneCategory = useSelector((state) => state.allCategory.onecategory);
  const onebrand = useSelector((state) => state.allBrand.onebrand);
  const LikeProduct = useSelector((state) => state.allProduct.likeproduct);

  // to show product item
  let item = [];
  if (oneproduct && oneproduct.data) item = oneproduct.data;
  else item = [];
  // si item existe dispatch sur one categ
  useEffect(() => {
    if (item.category) {
      dispatch(getOneCategory(item.category));
    }
    if (item.brand) {
      dispatch(getOneBrand(item.brand));
    }
    if (item.category) {
      dispatch(getProductLike(item.category));
    }
  }, [item]);
  //  to view images galery
  let images = [];
  if (item.images) {
    images = item.images.map((img) => {
      return { original: img };
    }); 
  } else {
    images = [
      {
        original: `${mobile}`,
      },
    ];
  }
  // to show categorie
  let cat = [];
  if (oneCategory && oneCategory.data) cat = oneCategory.data;
  else cat = [];
  // to show categorie
  let brand = [];
  if (onebrand && onebrand.data) brand = onebrand.data;
  else brand = [];
  // to show product like
  let ProdLike = [];
  if (LikeProduct) ProdLike = LikeProduct.data;
  else ProdLike = [];
  if (ProdLike) {
    var items = ProdLike.slice(0, 4);
  }
  ////console.log(brand)
  return [item, images, cat, brand, items];
};

export default ViewProducDetailstHook;
