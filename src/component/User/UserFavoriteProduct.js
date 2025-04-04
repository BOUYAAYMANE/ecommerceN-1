import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import CardProductContainer from "../Products/CardProductContainer";
import { getProductWishList } from "../../redux/actions/wishListAction";
import CardProductContainerFavorite from "../Products/CardProductContainerFavorite";
import { useTheme } from "@mui/system";
const UserFavoriteProduct = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getProductWishList());
      setLoading(false);
    };
    get();
  }, []);

  const res = useSelector((state) => state.addToWishListReducer.allWishList);
  useEffect(() => {
    if (loading === false) {
      if (res) setItems(res.data);
    }
  }, [loading]);
  const theme = useTheme();

  return (
    <div>
      <div  style={{ color: theme.palette.text.primary }} className="admin-content-text pb-4">Favorites list</div>
      <Row className="justify-content-start">
        {items.length <= 0 ? (
          <h6  style={{ color: theme.palette.text.primary }}>There are currently no favorite products</h6>
        ) : (
          <CardProductContainerFavorite products={items} title="" btntitle="" />
        )}
      </Row>
      {/* <PaginationComp /> */}
    </div>
  );
};

export default UserFavoriteProduct;
