import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import profile from "../images/profile.jpg";
import SearchIcon from "@mui/icons-material/Search";
import Cart from "./Cart/Cart";
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

  const smartPhone = search?.filter((data) => {
    return data.category === "smartphones";
  });

  const laptop = search?.filter((data) => {
    return data.category === "laptops";
  });
  const groceries = search?.filter((data) => {
    return data.category === "groceries";
  });

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
  //  add to cart
  const handleAddToCart = (product) => {
    // console.log(product);
    const exixts = cart.find((pd) => pd.id === product.id);
    let newCart = [];
    if (exixts) {
      const rest = cart.filter((pd) => pd.id !== product.id);
      exixts.quentity = exixts.quentity + 1;
      newCart = [...rest, product];
    } else {
      product.quentity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addTodb(product.id);
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
      <Container maxWidth={"xxl"}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <OrderReview cart={cart} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              backgroundColor: "#F4F6F8",
              borderLeft: "1px solid red",
            }}
          >
            <Box
              className="searchInput"
              my={2}
              style={{ position: "relative" }}
            >
              <input
                placeholder="search...."
                style={{
                  width: "100%",
                  border: "1px solid #ccc",
                  outline: "none",
                  height: "40px",
                  padding: "0px 30px",
                  fontSize: "14px",
                  color: "#ccc",
                  boxSizing: "border-box",
                }}
                onChange={handelSearchItems}
              />
              <SearchIcon
                style={{
                  color: "#cccccc",
                  fontSize: "32px",
                  position: "absolute",
                  top: "4px",
                  left: "0px",
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
                <Box mt={4}>
                  <TabPanel value="1">
                    <AllCategories
                      allCategories={search}
                      handleAddToCart={handleAddToCart}
                    />
                  </TabPanel>
                  <TabPanel value="2">
                    <SmartPhone smartPhone={smartPhone} />
                  </TabPanel>
                  <TabPanel value="3">
                    <Laptop laptop={laptop} />
                  </TabPanel>
                  <TabPanel value="4">
                    <Groceries groceries={groceries} />
                  </TabPanel>
                </Box>
              </TabContext>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
