import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";

const AllCategories = ({ allCategories, handleAddToCart }) => {
  return (
    <Box>
      <Grid container spacing={2}>
        {allCategories?.map((product) => (
          <Grid item xs={12} sm={6} md={2.4}>
            <Box
              key={product?.id}
              style={{
                borderRadius: "3px",
                textAlign: "center",
                //   boxShadow:
                //     " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                border: "1px solid #B2BBC2",
              }}
            >
              <Box style={{ padding: "5px" }} mb={1}>
                <img
                  style={{ width: "130px", height: "130px" }}
                  src={product?.thumbnail}
                  alt="prifileImg"
                />
              </Box>
              <Box>
                <Typography
                  style={{
                    color: "#22222",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                  mb={1}
                >
                  {product?.price} $
                </Typography>
                <Divider />

                <Box>
                  <Typography
                    mt={1}
                    style={{
                      color: "#22222",
                      fontSize: "16px",
                      fontWeight: "500",
                      padding: "0px 5px",
                      height: "40px",
                    }}
                  >
                    {product?.title}
                  </Typography>

                  <button
                    style={{
                      border: "none",
                      background: "tomato",
                      color: "#fff",
                      fontSize: "14px",
                      padding: "6px 10px",
                      borderRadius: "5px",
                      margin: "10px 0px",
                    }}
                    onClick={() => handleAddToCart(product, "add")}
                  >
                    Add To Cart
                  </button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllCategories;
