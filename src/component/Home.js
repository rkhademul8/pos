import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import profile from "../images/profile.jpg";
import SearchIcon from "@mui/icons-material/Search";
import Cart from "./Cart/Cart";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const Home = () => {
  const [value, setValue] = React.useState("1");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://fakestoreapi.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Container maxWidth={"xxl"}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={5}>
            <Cart />
          </Grid>
          <Grid item xs={12} sm={6} md={7}>
            {/* <Box
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
                }}
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
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={2}>
                <Box
                  style={{
                    borderRadius: "3px",
                    textAlign: "center",
                    boxShadow:
                      " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                  }}
                >
                  <Box style={{ padding: "5px" }}>
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={profile}
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
                    >
                      $50
                    </Typography>
                    <Typography
                      style={{
                        color: "#22222",
                        fontSize: "16px",
                        fontWeight: "500",
                        borderTop: "1px solid #ccc",
                      }}
                    >
                      Hello
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid> */}

            <Typography />

            <Box mt={4}>
              <TabContext value={value}>
                <Box
                  sx={{
                    height: "34px",
                    bgcolor: "transparent",
                    justifyContent: "flex-start",
                    "& button.Mui-selected": {
                      color: "green",
                      borderRadius: "5px",
                      border: "1px solid green",
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
                        color: "#222222",
                        borderRadius: "5px",
                        textTransform: "capitalize",
                        fontWeight: "300",
                        fontSize: "16px",
                        border: "1px solid red",
                        height: "40px",
                        minHeight: "40px",
                        marginRight: "10px",
                      }}
                      label="Item One"
                      value="1"
                    />
                    <Tab
                      sx={{
                        color: "#222222",
                        borderRadius: "5px",
                        textTransform: "capitalize",
                        fontWeight: "300",
                        fontSize: "16px",
                        border: "1px solid red",
                        height: "40px",
                        minHeight: "40px",
                        marginRight: "10px",
                      }}
                      label="Item Two"
                      value="2"
                    />
                    <Tab
                      sx={{
                        color: "#222222",
                        textTransform: "capitalize",
                        fontWeight: "300",
                        fontSize: "16px",
                        borderRadius: "5px",
                        border: "1px solid red",
                        height: "40px",
                        minHeight: "40px",
                        marginRight: "10px",
                      }}
                      label="Item Three"
                      value="3"
                    />
                  </TabList>
                </Box>
                <Box mt={4}>
                  <TabPanel value="1">
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
                        }}
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
                    <Grid container spacing={2}>
                      {products?.map((product) => (
                        <Grid item xs={12} sm={6} md={2}>
                          <Box
                            key={product?.id}
                            style={{
                              borderRadius: "3px",
                              textAlign: "center",
                              boxShadow:
                                " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                            }}
                          >
                            <Box style={{ padding: "5px" }}>
                              <img
                                style={{ width: "200px", height: "200px" }}
                                src={product?.image}
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
                              >
                                $50
                              </Typography>
                              <Typography
                                style={{
                                  color: "#22222",
                                  fontSize: "16px",
                                  fontWeight: "500",
                                  borderTop: "1px solid #ccc",
                                }}
                              >
                                Hello
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </TabPanel>
                  <TabPanel value="2">Item Two</TabPanel>
                  <TabPanel value="3">Item Three</TabPanel>
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
