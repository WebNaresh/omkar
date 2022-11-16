import React from "react";
import { Box } from "@mui/system";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="http://ssgmkhandala.org/images/college/sanstha.jpg"
          height={"100px"}
          style={{ margin: "20px 10px" }}
        />
        <img
          src="http://ssgmkhandala.org/images/logo_purple.png"
          height={"70px"}
          alt="none"
        />
      </Box>
    </>
  );
};

export default Header;
