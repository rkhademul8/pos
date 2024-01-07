import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import profile from "../images/profile.jpg";
import SearchIcon from "@mui/icons-material/Search";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AllCategories from "./ProductCategory/AllCategories";
import SmartPhone from "./ProductCategory/SmartPhone";
import Laptop from "./ProductCategory/Laptop";
import Groceries from "./ProductCategory/Groceries";
import { addTodb, cartStore } from "../utilities/Fakedb";
import OrderReview from "./OrderReview/OrderReview";

const Home = () => {
  const [value, setValue] = React.useState("1");
  const [products, setProducts] = useState([]);
  const [allCategories, setAllCotegories] = useState([]);
  const [search, setSearch] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //  product fetch from api
  useEffect(() => {
    const url = `https://dummyjson.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.products);
        setSearch(data?.products);
        setAllCotegories(data?.products);
      });
  }, []);

  // product filter category wise
  const smartPhone = search?.filter((data) => {
    return data.category === "smartphones";
  });

  const laptop = search?.filter((data) => {
    return data.category === "laptops";
  });
  const groceries = search?.filter((data) => {
    return data.category === "groceries";
  });

  //  search functionality

  const handelSearchItems = (e) => {
    let searchInput = e.target.value;
    if (searchInput !== "") {
      const filterData = products.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setSearch(filterData);
    } else if (searchInput === "") {
      setSearch(products);
    }
  };

  const [cart, setCart] = useState([]);

  //  product quentity handle
  const handleAddToCart = (product, action) => {
    const exixts = cart.find((pd) => pd.id === product.id);
    let newCart = [];
    if (exixts) {
      const rest = cart.filter((pd) => pd.id !== product.id);
      if (action === "add") {
        exixts.quentity = exixts.quentity + 1;
      } else {
        exixts.quentity = exixts.quentity - 1;
      }
      newCart = [...rest, product].sort((a, b) => a.id - b.id);
    } else {
      product.quentity = 1;
      newCart = [...cart, product].sort((a, b) => a.id - b.id);
    }
    setCart(newCart);
    addTodb(product.id, action);
  };

  // store data in cart from localstorage
  useEffect(() => {
    const getCart = cartStore();
    const storeProduct = [];
    for (const key in getCart) {
      const selectProduct = products.find(
        (product) => product?.id === parseInt(key)
      );
      if (selectProduct) {
        const quentity = getCart[key];
        selectProduct.quentity = quentity;
        storeProduct.push(selectProduct);
      }
    }
    setCart(storeProduct);
  }, [products]);

  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            position: { md: "fixed" },
            top: 0,
            left: 0,
            bottom: 0,
            zIndex: 1,
            width: "100%",
          }}
        >
          <Box p={2}>
            <OrderReview cart={cart} handleAddToCart={handleAddToCart} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            borderLeft: "1px solid #B2B3B4",
            background: "#F4F6F8",
            minHeight: "100vh",
            marginLeft: { md: "50%" },
          }}
        >
          <Box className="searchInput" style={{ position: "relative" }}>
            <input
              placeholder="search...."
              style={{
                width: "100%",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                outline: "none",
                height: "55px",
                padding: "0px 60px",
                fontSize: "20px",
                color: "#ccc",
                boxSizing: "border-box",
                border: "none",
              }}
              onChange={handelSearchItems}
            />
            <SearchIcon
              style={{
                color: "#637381",
                fontSize: "32px",
                position: "absolute",
                top: "14px",
                left: "18px",
              }}
            />
          </Box>
          <Box mt={4}>
            <TabContext value={value}>
              <Box
                sx={{
                  height: "34px",
                  bgcolor: "transparent",
                  justifyContent: "flex-start",
                  "& button.Mui-selected": {
                    color: "#3674D9",
                    borderRadius: "5px",
                    border: "1px solid #3674D9",
                    fontWeight: "500",
                  },
                }}
              >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  indicatorColor="none"
                  sx={{ padding: "0px 22px" }}
                >
                  <Tab
                    sx={{
                      color: "#637381",
                      borderRadius: "5px",
                      textTransform: "capitalize",
                      fontWeight: "500",
                      fontSize: "16px",
                      border: "1px solid #637381",
                      height: "40px",
                      minHeight: "40px",
                      marginRight: "10px",
                    }}
                    label="All Categories"
                    value="1"
                  />
                  <Tab
                    sx={{
                      color: "#637381",
                      borderRadius: "5px",
                      textTransform: "capitalize",
                      fontWeight: "500",
                      fontSize: "16px",
                      border: "1px solid #637381",
                      height: "40px",
                      minHeight: "40px",
                      marginRight: "10px",
                    }}
                    label="Smart-phone"
                    value="2"
                  />
                  <Tab
                    sx={{
                      color: "#637381",
                      borderRadius: "5px",
                      textTransform: "capitalize",
                      fontWeight: "500",
                      fontSize: "16px",
                      border: "1px solid #637381",
                      height: "40px",
                      minHeight: "40px",
                      marginRight: "10px",
                    }}
                    label="Laptop"
                    value="3"
                  />
                  <Tab
                    sx={{
                      color: "#637381",
                      borderRadius: "5px",
                      textTransform: "capitalize",
                      fontWeight: "500",
                      fontSize: "16px",
                      border: "1px solid #637381",
                      height: "40px",
                      minHeight: "40px",
                      marginRight: "10px",
                    }}
                    label="Groceries"
                    value="4"
                  />
                </TabList>
              </Box>
              <Box mt={2}>
                <TabPanel value="1">
                  <AllCategories
                    allCategories={search}
                    handleAddToCart={handleAddToCart}
                  />
                </TabPanel>
                <TabPanel value="2">
                  <SmartPhone
                    smartPhone={smartPhone}
                    handleAddToCart={handleAddToCart}
                  />
                </TabPanel>
                <TabPanel value="3">
                  <Laptop laptop={laptop} handleAddToCart={handleAddToCart} />
                </TabPanel>
                <TabPanel value="4">
                  <Groceries
                    groceries={groceries}
                    handleAddToCart={handleAddToCart}
                  />
                </TabPanel>
              </Box>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
