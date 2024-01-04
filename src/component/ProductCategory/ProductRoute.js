import { Box } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ProductRoute = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#EFF2F5",
        }}
      >
        <NavLink
          to="/trips/tourpackage/packageinformation"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Product Category1
        </NavLink>
        <NavLink
          to="/trips/tourpackage/packageinformation"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Product Category2
        </NavLink>
        <NavLink
          to="/trips/tourpackage/packageinformation"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Product Category3
        </NavLink>
        <NavLink
          to="/trips/tourpackage/packageinformation"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Product Category4
        </NavLink>
      </Box>
      <Outlet />
    </Box>
  );
};

export default ProductRoute;
