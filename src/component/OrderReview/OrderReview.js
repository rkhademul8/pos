import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeFromDb } from "../../utilities/Fakedb";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const OrderReview = ({ cart, handleAddToCart }) => {
  console.log(cart);
  //  remove from cart
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
    // removeFromDb(key);
  };
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
            <td>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {product?.quentity >= 1 ? (
                  <RemoveCircleIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleAddToCart(product, "minus")}
                  />
                ) : (
                  <RemoveCircleIcon sx={{ cursor: "pointer" }} />
                )}

                <span>{product?.quentity}</span>
                <AddCircleIcon
                  sx={{ cursor: "pointer" }}
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
  );
};

export default OrderReview;
