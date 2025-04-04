import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { HomePage } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterPage } from "./pages/Auth/RegisterPage";
// import { LoginPage } from './pages/Auth/LoginPage1';
import { AllCategoryPage } from "./pages/CategoryPage/AllCategoryPage";
import { AllBrandPage } from "./pages/Brand/AllBrandPage";
import { ShopProductPage } from "./pages/Products/ShopProductPage";
import ProductDetailsPage from "./pages/Products/ProductDetailsPage";
import CartPage from "./pages/Cart/CartPage";
import AdminAllProductsPage from "./pages/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./pages/Admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./pages/Admin/AdminOrderDetalisPage";
import AdminAddBrandPage from "./pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./pages/Admin/AdminAddProductsPage";
import UserAllOrdersPage from "./pages/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./pages/User/UserFavoriteProductsPage";
import UserAllAddresPage from "./pages/User/UserAllAddresPage";
import UserAddAddressPage from "./pages/User/UserAddAddressPage";
import UserEditAddressPage from "./pages/User/UserEditAddressPage";
import UserProfilePage from "./pages/User/UserProfilePage";
import AdminUpdateProductsPage from "./pages/Admin/AdminUpdateProductsPage";
import ForgetPasswordPage from "./pages/Auth/ForgetPasswordPage";
import VerifyPasswordPage from "./pages/Auth/VerifyPasswordPage";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage";
import AdminAddCouponPage from "./pages/Admin/AdminAddCouponPage";
import AdminEditCouponPage from "./pages/Admin/AdminEditCouponPage";
import ProtectedRoute from "./component/utilitys/ProtectedRoute";
import ProtectedRouteHook from "./hook/Auth/protected-route-hook";
import ChoosePayMethoudPage from "./pages/Checkout/ChoosePayMethoudPage";
import ProductsByCategory from "./pages/Products/ProductsByCategory";
import ProductsByBrand from "./pages/Products/ProductsByBrand";
import { LoginPagee } from "./pages/Auth/LoginPage";
function App() {
  const [theme, colorMode] = useMode();
  const [isUser, isAdmin, userData] = ProtectedRouteHook();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline : css change lorsque theme change */}
        <CssBaseline />
        {/* <HomePage theme={theme} /> */}
        {/* route */}
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<HomePage theme={theme} />} />
            <Route path="/login" element={<LoginPagee theme={theme} />} />
            {/* <Route path="/register" element={<RegisterPage />} /> */}
            <Route path="/register" element={<RegisterPage theme={theme} />} />
            <Route path="/AllCategorie" element={<AllCategoryPage />} />
            <Route path="/AllBrand" element={<AllBrandPage />} />
            <Route path="/Product" element={<ShopProductPage />} />
            <Route path="/Product/:id" element={<ProductDetailsPage />} />
            <Route path="/Cart" element={<CartPage />} />
            <Route
              path="/products/category/:id"
              element={<ProductsByCategory />}
            />
            <Route path="/products/brand/:id" element={<ProductsByBrand />} />

            {/*admin route page if Auth is Admin */}
            <Route element={<ProtectedRoute auth={isAdmin} />}>
              <Route
                path="/admin/allproducts"
                element={<AdminAllProductsPage />}
              />
              <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
              <Route
                path="/admin/orders/:id"
                element={<AdminOrderDetalisPage />}
              />
              <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
              <Route
                path="/admin/addcategory"
                element={<AdminAddCategoryPage />}
              />
              <Route
                path="/admin/addsubcategory"
                element={<AdminAddSubCategoryPage />}
              />
              <Route
                path="/admin/addproduct"
                element={<AdminAddProductsPage />}
              />
              <Route
                path="/admin/updateProduct/:id"
                element={<AdminUpdateProductsPage />}
              />
              {/* coupon */}
              <Route path="/admin/addcoupon" element={<AdminAddCouponPage />} />
              <Route
                path="/admin/editcoupon/:id"
                element={<AdminEditCouponPage />}
              />
            </Route>

            {/* end */}
            {/*User route page  */}
            <Route element={<ProtectedRoute auth={isUser} />}>
              <Route path="/user/allorders" element={<UserAllOrdersPage />} />
              <Route
                path="/order/paymethoud"
                element={<ChoosePayMethoudPage />}
              />
              <Route
                path="/user/favoriteproducts"
                element={<UserFavoriteProductsPage />}
              />
              <Route path="/user/profile" element={<UserProfilePage />} />

              {/* adress */}
              <Route path="/user/addresses" element={<UserAllAddresPage />} />
              <Route
                path="/user/add-address"
                element={<UserAddAddressPage />}
              />
              <Route
                path="/user/edit-address/:id"
                element={<UserEditAddressPage />}
              />
            </Route>

            {/*  */}
            <Route
              path="/user/forget-password"
              element={<ForgetPasswordPage />}
            />
            <Route path="/user/verify-code" element={<VerifyPasswordPage />} />
            <Route
              path="/user/reset-password"
              element={<ResetPasswordPage />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
