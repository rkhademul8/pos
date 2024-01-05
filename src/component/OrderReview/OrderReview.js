import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";

const OrderReview = ({ cart }) => {
  return (
    <Box className="cart-table" mt={2}>
      <table>
        <tr>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Add More</th>
          <th>Total Price</th>
          <th>Action</th>
        </tr>

        {cart.map((product) => (
          <tr>
            <td>{product?.title}</td>
            <td>{product?.price} $</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        ))}
      </table>
    </Box>
  );
};

export default OrderReview;
