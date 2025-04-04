import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  Grid,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Subtitle } from "../utilitys/Subtitle";
// import { Card } from "react-bootstrap";
// import { BaseURL } from "../../constante";

const Main = ({ products, pathText, title, btntitle }) => {
  const theme = useTheme();
  return (
    <Container sx={{ py: 9 }}>
      {products ? (
        <Subtitle
          theme={theme}
          title={title}
          btntitle={btntitle}
          pathText={pathText}
        />
      ) : null}
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        <Grid container spacing={2}>
          <AnimatePresence>
            {products
              ? products.map((item, index) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
                      <Card
                        component={motion.section}
                        layout
                        initial={{ transform: "scale(0)" }}
                        animate={{ transform: "scale(1)" }}
                        transition={{
                          duration: 1.6,
                          type: "spring",
                          stiffness: 50,
                        }}
                        key={item._id}
                        className="my-2"
                        style={{
                          mt: 4,
                          ":hover .MuiCardMedia-root ": {
                            rotate: "1deg",
                            scale: "1.1",
                            transition: "0.35s",
                          },
                          borderRadius: "8px",
                          border: "none",
                        
                        }}
                      >
                        <Link
                          to={`/Product/${item._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <CardMedia
                            style={{ height: "228px" }}
                            component="img"
                            image={item.imageCover}
                          />
                        </Link>

                        <CardContent
                          sx={{ bgcolor: theme.palette.myColor.main }}
                        >
                          <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                          >
                            <Typography
                              gutterBottom
                              style={{
                                fontSize: "16px",
                                color: theme.palette.text.primary,
                              }}
                              // variant="h6"
                              component="div"
                            >
                              {item.title}
                            </Typography>

                            {item.priceAfterDiscount >= 1 ? (
                              <div>
                                <Typography variant="subtitle1" component="p">
                                  <span
                                    style={{
                                      textDecorationLine: "line-through",
                                      fontSize: "16px",
                                    }}
                                  >
                                    {item.price}
                                  </span>
                                  ${item.priceAfterDiscount}
                                </Typography>
                              </div>
                            ) : (
                              item.price
                            )}
                          </Stack>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })
              : null}
          </AnimatePresence>
        </Grid>
      </Stack>
    </Container>
  );
};
// };

export default Main;

