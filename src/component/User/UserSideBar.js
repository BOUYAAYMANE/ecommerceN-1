import { useTheme } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const UserSideBar = () => {
  const theme = useTheme();

  return (
    <div
      style={{ backgroundColor: theme.palette.myColor.main }}
      className="sidebar"
    >
      <div className="d-flex flex-column">
        <Link to="/user/profile" style={{ textDecoration: "none" }}>
          <div
            style={{ color: theme.palette.text.primary }}
            className="admin-side-text  mt-3 my-1 border-bottom p-2 mx-auto text-center"
          >
            Profile
          </div>
        </Link>
        <Link to="/user/allorders" style={{ textDecoration: "none" }}>
          <div
            style={{ color: theme.palette.text.primary }}
            className="admin-side-text  border-bottom p-2 mx-auto text-center"
          >
            Order Management
          </div>
        </Link>
        <Link to="/user/favoriteproducts" style={{ textDecoration: "none" }}>
          <div
            style={{ color: theme.palette.text.primary }}
            className="admin-side-text my-1 border-bottom p-2 mx-auto text-center"
          >
            Favorite Products
          </div>
        </Link>
        <Link to="/user/addresses" style={{ textDecoration: "none" }}>
          <div
            style={{ color: theme.palette.text.primary }}
            className="admin-side-text my-1 border-bottom p-2 mx-auto text-center"
          >
            Personal addresses
          </div>
        </Link>

      </div>
    </div>
  );
};
export default UserSideBar;
