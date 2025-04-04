import React from "react";

import {
  ArrowDropDown,
  ArrowDropDownCircleOutlined,
  ExpandMore,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Container, IconButton, Stack, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { HeaderhookIconStyled } from "../../hook/Headers/header-hook";
// import { Link } from "react-router-dom";
import GetAllUserCartHook from "../../hook/cart/get-all-user-cart-hook";
import NavbarSearchHhook from "../../hook/search/navbar-search-hook";
import { Link } from "react-router-dom";
import { AllCategoryPageHook } from "../../hook/category/all-category-page-hook";

const [Search, SearchIconWrapper, StyledInputBase, StyledBadge, options] =
  HeaderhookIconStyled();
const Header2 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  //

  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  //

  // get category name

  const [loading, pageCount, category, getPage] = AllCategoryPageHook();

  const [items, setItems] = useState([]);
  useEffect(() => {
    if (category) {
      setItems(category.data);
      // console.log(category.data);
    }
  }, [category]);
  // end
  //
  const theme = useTheme();
  const mode = localStorage.getItem("mode");
  //
  const [onChangeSearch, searchWord] = NavbarSearchHhook();

  let word = "";
  if (localStorage.getItem("searchWord") != null)
    word = localStorage.getItem("searchWord");

  const [user, setUser] = useState("");
  let usert = "";
  // recuper data de user ??
  useEffect(() => {
    // methode 1 => par localStorage
    if (localStorage.getItem("user") !== null)
      // json to js
      usert = JSON.parse(localStorage.getItem("user"));
    setUser(usert);

    // matho 2 :> par request ("/api/v1/users/getMe")
    // dispatch(getLoggerUser());
  }, []);
  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
  };

  // cart
  const [itemsNum] = GetAllUserCartHook();
  //
  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
      <Stack alignItems={"center"}>
        {mode === "dark" ? (
          <img style={{ height: 49 }} src="/logo-dark.png" />
        ) : (
          <img style={{ height: 49 }} src="/logo-light.png" />
        )}
      </Stack>

      <Search
        sx={{
          display: "flex",
          borderRadius: "22px",
          justifyContent: "space-between",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          value={word}
          onChange={onChangeSearch}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />

        <div>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
              borderBottomRightRadius: 22,
              borderTopRightRadius: 22,
              p: "0",
            }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                // className="border"
                sx={{
                  width: 93,
                  textAlign: "center",
                  "&:hover": { cursor: "pointer" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "16px" }} />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {/*  */}
            {items
              ? items.map((item, index) => {
                  return (
                    <Link
                      onClick={() => {
                        window.location.href(`/products/category/${item._id}`);
                      }}
                      to={`/products/category/${item._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <MenuItem onClick={handleClose}>
                        <ListItemText
                          style={{ color: theme.palette.text.primary }}
                        >
                          {item.name}
                        </ListItemText>
                      </MenuItem>
                    </Link>
                  );
                })
              : null}
          </Menu>
        </div>
      </Search>

      <Stack direction={"row"} gap={2} alignItems={"center"}>
        <IconButton
          href="/cart"
          aria-label="cart"
          className="nav-text position-relative d-flex mt-2 justify-content-center"
        >
          <StyledBadge badgeContent={itemsNum || 0} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        {user != "" ? (
          <>
            <IconButton
              style={{ top: "5px", margin: 0, padding: 0 }}
              onClick={handleClick}
              color="inherit"
              aria-controls="basic-nav-dropdown"
              aria-haspopup="true"
            >
              <p style={{ margin: 0, padding: 0, fontSize: "70%" }}>
                {" "}
                {user.name}
              </p>
              <ArrowDropDown style={{ margin: 0, padding: 0 }} />
            </IconButton>
            <Menu
              id="basic-nav-dropdown"
              anchorEl={anchorEl2}
              keepMounted
              open={Boolean(anchorEl2)}
              onClose={handleClose2}
              PaperProps={{
                style: { color: theme.palette.text.primary },
              }}
            >
              {user.role === "admin" ? (
                <Link
                  to={`/admin/allproducts`}
                  style={{
                    textDecoration: "none",
                    color: theme.palette.text.primary,
                  }}
                >
                  {/* <MenuItem href="/user/profile">Profile</MenuItem> */}
                  <MenuItem href="/admin/allproducts">Dashboard</MenuItem>
                </Link>
              ) : (
                <Link
                  to={`/user/profile`}
                  style={{
                    textDecoration: "none",
                    color: theme.palette.text.primary,
                  }}
                >
                  <MenuItem href="/user/profile">Profile</MenuItem>
                </Link>
              )}
              <MenuItem onClick={logOut} href="/">
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <IconButton style={{ top: "4px" }} href="/login">
            {/* <Link style={{textDecoration: 'none'}} to={"/login"}> */}
            <Person2OutlinedIcon />
            {/* </Link> */}
          </IconButton>
        )}
      </Stack>
    </Container>
  );
};

export default Header2;
