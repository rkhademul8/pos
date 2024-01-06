import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeFromDb } from "../../utilities/Fakedb";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import Header from "../Header/Header";

const OrderReview = ({ cart, handleAddToCart }) => {
  const navigate = useNavigate();

  const handleRemove = (key, product) => {
    Swal.fire({
      title: `Are you sure you want to remove ${product} from cart`,
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromDb(key);
        navigate(0);
      } else {
      }
    });
  };
  let quentity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quentity) {
      product.quentity = 1;
    }
    total += Number(product.price) * Number(product.quentity);
    quentity = quentity + product.quentity;
  }
  const shipping = total > 0 ? 10 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;

  return (
    <Box className="cart-table">
      <Header />
      <Box>
        <table>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Add More</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
          {cart.map((product) => (
            <tr key={product?.id}>
              <td>{product?.title}</td>
              <td>{product?.price} $</td>
              <td>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  {product?.quentity > 1 ? (
                    <RemoveCircleIcon
                      sx={{
                        cursor: "pointer",
                        color: "#84919C",
                        fontSize: "26px",
                      }}
                      onClick={() => handleAddToCart(product, "minus")}
                    />
                  ) : (
                    <RemoveCircleIcon
                      sx={{
                        cursor: "pointer",
                        color: "#84919C",
                        fontSize: "26px",
                      }}
                    />
                  )}

                  <span>{product?.quentity}</span>
                  <AddCircleIcon
                    sx={{
                      cursor: "pointer",
                      color: "#84919C",
                      fontSize: "26px",
                    }}
                    onClick={() => handleAddToCart(product, "add")}
                  />
                </Box>
              </td>
              <td> {Number(product?.price) * Number(product?.quentity)} $</td>
              <td>
                <DeleteIcon
                  sx={{ color: "tomato", fontSize: "26px", cursor: "pointer" }}
                  onClick={() => handleRemove(product?.id, product?.title)}
                />
              </td>
            </tr>
          ))}
        </table>
      </Box>
      <Grid container spacing={2} display={"flex"} justifyContent={"flex-end"}>
        <Grid item xs={12} sm={6} md={4}>
          <Box mt={2}>
            <Divider />
            <Box
              my={1}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography>Sub Total: </Typography>
              <Typography>{total || 0} $ </Typography>
            </Box>
            <Divider />
            <Box
              my={1}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography>TAX: </Typography>
              <Typography>{tax?.toFixed(2)} $ </Typography>
            </Box>
            <Divider />
            <Box
              my={1}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography>Shipping: </Typography>
              <Typography>{shipping} $ </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box mt={2} style={{ background: "#E1EAF9", borderRadius: "5px" }}>
        <Grid
          container
          py={1.5}
          px={1}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} sm={6} md={8}>
            <Typography style={{ fontSize: "18px", color: "#3674D9" }}>
              Products Count ({quentity})
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{
                  fontSize: "28px",
                  fontWeight: "500",
                  color: "#3674D9",
                  paddingLeft: "12px",
                }}
              >
                Total
              </Typography>
              <Typography
                style={{
                  fontSize: "28px",
                  fontWeight: "500",
                  color: "#3674D9",
                }}
              >
                $ {grandTotal || 0}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <button
                style={{
                  width: "100%",
                  height: "60px",
                  background: "#FADEDD",
                  color: "#E55C57",
                  border: "none",
                  fontSize: "30px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CancelOutlinedIcon
                  style={{ fontSize: "30px", marginRight: "10px" }}
                />
                Cancel
              </button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <button
                style={{
                  width: "100%",
                  height: "60px",
                  background: "#DEE1F3",
                  color: "#5C6AC4",
                  border: "none",
                  fontSize: "30px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AddTaskOutlinedIcon
                  style={{ fontSize: "30px", marginRight: "10px" }}
                />
                Hold
              </button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <button
                style={{
                  width: "100%",
                  height: "60px",
                  background: "#DEE1F3",
                  color: "#3B73D6",
                  border: "none",
                  fontSize: "30px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <DiscountOutlinedIcon
                  style={{ fontSize: "30px", marginRight: "10px" }}
                />
                Discount
              </button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <button
                style={{
                  width: "100%",
                  height: "60px",
                  background: "#D7E3F7",
                  color: "#3674D9",
                  border: "none",
                  fontSize: "30px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ProductionQuantityLimitsOutlinedIcon
                  style={{ fontSize: "30px", marginRight: "10px" }}
                />
                Play Now
              </button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default OrderReview;
