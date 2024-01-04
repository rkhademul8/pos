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

const Home = () => {
  const [value, setValue] = React.useState("1");

  const [products, setProducts] = useState([]);
  const [allCategories, setAllCotegories] = useState([]);
  const [smartPhone, setSmartPhone] = useState([]);
  const [laptop, setLaptop] = useState([]);
  const [groceries, setGroceries] = useState([]);

  console.log("smartPhone", smartPhone);

  useEffect(() => {
    const url = `https://dummyjson.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.products);
        setAllCotegories(data?.products);
        const smartPhoneDataFilter = data?.products?.filter((data) => {
          return data.category === "smartphones";
        });
        const laptopDataFilter = data?.products?.filter((data) => {
          return data.category === "laptops";
        });
        const groceriesDataFilter = data?.products?.filter((data) => {
          return data.category === "groceries";
        });
        setSmartPhone(smartPhoneDataFilter);
        setLaptop(laptopDataFilter);
        setGroceries(groceriesDataFilter);
      });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Container maxWidth={"xxl"}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Cart />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              backgroundColor: "#F4F6F8",
              borderLeft: "1px solid red",
              height: "100%",
            }}
          >
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
                    <AllCategories allCategories={allCategories} />
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
