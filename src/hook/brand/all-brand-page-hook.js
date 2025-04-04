import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrand, getAllBrandPage } from '../../redux/actions/brandAction';

export const AllBrandPageHook = () => {
    const dispatch = useDispatch();
  // when first load
  useEffect(() => {
    dispatch(getAllBrand(6));
  }, []);
  // hna kanmchy direct ldata
  const brand = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.loading);
  // to get page count
  //en fais ca car en 1er fois data prent 1s,3s.. pour s'afficher et nou donne une prob
  let pageCount = 0;
  if (brand.paginationResult)
    pageCount = brand.paginationResult.numberOfPages;
  // when press pagination
  // func bach n returniw num de page bach n accediw l page 
  const getPage = (page) => {
    dispatch(getAllBrandPage(page));
  };
return [loading,pageCount,brand,getPage]
}
