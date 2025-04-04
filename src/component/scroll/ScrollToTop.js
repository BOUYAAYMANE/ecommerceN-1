import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";

const ScrollToTop = () => {
  return (
    // zoom kat afficher ou desafficher 
    // useScrollTrigger katrje3 true mli kaywsel 100 px
    <Zoom in={useScrollTrigger({ threshold: 100 })}>
      <Fab
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        variant="extended"
        size="small"
        sx={{ position: "fixed", bottom: 33, right: 33 }}
        color="primary"
        aria-label="add"
      >
        <KeyboardArrowUp fontSize="medium" />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
