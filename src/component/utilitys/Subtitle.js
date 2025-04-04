import { useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Subtitle = ({ title, btntitle, pathText  }) => {
  const theme = useTheme();

  return (
    <div className="d-flex justify-content-between pt-4">
      <div style={{color: theme.palette.text.primary}}  className="sub-tile">{title}</div>
      {btntitle ? (
        <Link  to={`${pathText}`} style={{textDecoration:'none'}}>
          <div style={{color: theme.palette.text.primary}} className="shopping-now">{btntitle}</div>
        </Link>
      ) : null}
    </div>
  );
};
