import { Box } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import RateReviewIcon from "@mui/icons-material/RateReview";

const Cart = () => {
  return (
    <Box>
      <Box className="cart-table" mt={1}>
        <table>
          <tr>
            <td style={{ border: "none" }}>
              <RateReviewIcon style={{ color: "#ccc", fontSize: "25px" }} />
            </td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Germany</td>
            <td style={{ border: "none" }}>
              <DeleteIcon style={{ color: "tomato", fontSize: "25px" }} />
            </td>
          </tr>
        </table>
      </Box>
    </Box>
  );
};

export default Cart;
