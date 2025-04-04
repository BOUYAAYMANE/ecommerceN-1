import {
  Box,
  Container,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {
  SportsEsportsOutlined,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  Close,
} from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Links from "./Links";
import { MenuArray } from "./MenuArray";
import { Link } from "react-router-dom";
import { AllCategoryPageHook } from "../../hook/category/all-category-page-hook";

const Header3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // hook f mui kat3awna an3yto les theme li derna f theme.js
  const theme = useTheme();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  // Le paramètre anchor  représente l'ancre ou la position à laquelle le tiroir (drawer) est attaché ou aligné.
  // Il indique la direction dans laquelle le tiroir s'ouvrira ou se fermera.
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // get category name

  const [loading, pageCount, category, getPage] = AllCategoryPageHook();

  const [items, setItems] = useState([]);
  useEffect(() => {
    if (category) {
      setItems(category.data);
      console.log(category.data);
    }
  }, [category]);
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 5,
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 222,
            // color mn theme.js mais jbnah b useTheme de materialUi
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.secondary,
          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            Categories
          </Typography>
          <Box flexGrow={1} />

          <KeyboardArrowRightOutlinedIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: 220,
              bgcolor: theme.palette.myColor.main,
            },
          }}
        >
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

          <Link to="/AllCategorie" style={{ textDecoration: "none" }}>
            <div
              style={{ color: theme.palette.text.primary }}
              className="cat-text-header"
            >
              Plus
            </div>
          </Link>
        </Menu>
      </Box>
      {/* useMediaQuery est un hook fourni par Material-UI qui permet de
       détecter les requêtes de média dans votre application React */}
      {/* min bach tban 1200 */}
      {/* (methode 1 de responsive)  */}
      {useMediaQuery("(min-width:1200px)") && (
        <Stack gap={4} direction={"row"} alignItems={"center"}>
          <Links title={"Home"} />
          {/* <Links title={""} /> */}
          <Links  title={"Favoris"} />
          <Links title={"Products"} />
          {/* <Links title={"User Account"} />
          <Links title={"Vendor Account"} /> */}
        </Stack>
      )}
      {/* max dialha 1200 */}
      {useMediaQuery("(max-width:1200px)") && (
        //Menu icon 3tinaha true fach mli tklicker 3liha t afficha Drawer (li fih les lien de page par exampl)
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}
      {/* mli kankiw 3li Menu Icon kat afficha  */}
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{ width: 444, mx: "auto", mt: 6, position: "relative", pt: 10 }}
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.5s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>

          {MenuArray.map((item) => {
            return (
              <Accordion
                key={item.mainLink}
                elevation={0}
                sx={{ bgcolor: "initial" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>

                <List sx={{ py: 0, my: 0 }}>
                  {item.subLinks.map((link) => {
                    return (
                      <ListItem key={link} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
