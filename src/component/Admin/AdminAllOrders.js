import React from "react";
import { Row } from "react-bootstrap";
import AdminAllOrdersItem from "./AdminAllOrdersItem";
import UserGetAllOrderHook from "./../../hook/user/user-get-all-order-hook";
import { PaginationComp } from "./../utilitys/PaginationComp";
import { useTheme } from "@mui/system";

export const AdminAllOrders = () => {
  const [userName, results, paginate, orderData, onPress] =
    UserGetAllOrderHook();
  const theme = useTheme();

  return (
    // style={{
    //     color: theme.palette.text.primary,
    //     backgroundColor: theme.palette.button.main,
    //   }}
    // style={{
    //     color: theme.palette.text.primary,

    //   }}
    // style={{
    //     backgroundColor: theme.palette.button.main,

    //   }}
    <div>
      <div
        style={{
          color: theme.palette.text.primary,
        }}
        className="admin-content-text"
      >
        Manage all orders
      </div>
      <Row   className="justify-content-start">
        {orderData.length >= 1 ? (
          orderData.map((orderItem, index) => {
            return <AdminAllOrdersItem key={index} orderItem={orderItem} />;
          })
        ) : (
          <h6>No requests yet</h6>
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
