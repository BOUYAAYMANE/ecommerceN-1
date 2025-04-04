import React from "react";
import { Row } from "react-bootstrap";
import UserAllOrderItem from "./UserAllOrderItem";
import UserGetAllOrderHook from "./../../hook/user/user-get-all-order-hook";
import { PaginationComp } from "./../utilitys/PaginationComp";
import { useTheme } from "@mui/system";

const UserAllOrder = () => {
  const [userName, results, paginate, orderData, onPress] =
    UserGetAllOrderHook();
  const theme = useTheme();

  return (
    <div>
      <div
        style={{ color: theme.palette.text.primary }}
        className="admin-content-text pb-4"
      >
        Number of orders #{results}
      </div>
      <Row className="justify-content-between">
        {orderData.length >= 1 ? (
          orderData.map((orderItem, index) => {
            return <UserAllOrderItem key={index} orderItem={orderItem} />;
          })
        ) : (
          <h6>No orders until </h6>
        )}

        {paginate.numberOfPages >= 2 ? (
          <PaginationComp
            onPress={onPress}
            pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0}
          />
        ) : null}
      </Row>
    </div>
  );
};

export default UserAllOrder;
