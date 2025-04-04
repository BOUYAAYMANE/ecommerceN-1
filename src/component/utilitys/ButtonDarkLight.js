import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import {
  BorderAll,
  DarkModeOutlined,
  LightModeOutlined,
} from "@mui/icons-material";
import { ColorModeContext } from "../../theme";
export const ButtonDarkLight = ({ theme }) => {
  const colorMode = useContext(ColorModeContext);

  return (
    <div style={{ position: "absolute", top: 20, right: 20 }}>
      {theme.palette.mode === "light" ? (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <LightModeOutlined
            sx={{
              padding: "5px",
              fontSize: "30px",
              color: "orange",
              border: "1px solid #552",
              borderRadius: "30px",
            }}
          />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <DarkModeOutlined
            sx={{
              padding: "5px",
              fontSize: "30px",
              border: "1px solid #552",
              borderRadius: "30px",
            }}
          />
        </IconButton>
      )}
    </div>
  );
};
