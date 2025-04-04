import { useTheme } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
  const theme = useTheme();

  return (
    <div className="sidebar" style={{ backgroundColor: theme.palette.myColor.main }}>
      <div className="d-flex flex-column">
        <Link to="/admin/allorders" style={{ textDecoration: 'none' }}>
          <div style={{ color: theme.palette.text.primary }} className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
            Manage Orders
          </div>
        </Link>
        <Link to="/admin/allproducts" style={{ textDecoration: 'none' }}>
          <div style={{ color: theme.palette.text.primary }} className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            Manage Products
          </div>
        </Link>
        <Link to="/admin/addbrand" style={{ textDecoration: 'none' }}>
          <div style={{ color: theme.palette.text.primary }} className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            Add Brand
          </div>
        </Link>
        <Link to="/admin/addcategory" style={{ textDecoration: 'none' }}>
          <div style={{ color: theme.palette.text.primary }} className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            Add Category
          </div>
        </Link>
        <Link to="/admin/addsubcategory" style={{ textDecoration: 'none' }}>
          <div style={{ color: theme.palette.text.primary }} className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            Add Subcategory
          </div>
        </Link>
        <Link to="/admin/addproduct" style={{ textDecoration: 'none' }}>
          <div style={{ color: theme.palette.text.primary }} className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            Add Product
          </div>
        </Link>
        <Link to="/admin/addcoupon" style={{ textDecoration: 'none' }}>
          <div style={{ color: theme.palette.text.primary }} className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            Add Coupon
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;