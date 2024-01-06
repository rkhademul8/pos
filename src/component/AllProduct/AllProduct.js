import { Badge, Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { addTodb, cartStore } from "../../utilities/Fakedb";
import AddHomeIcon from "@mui/icons-material/AddHome";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://dummyjson.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const filterData = data?.products?.filter((data) => {
          return data?.brand !== "Samsung" && "LED Lights";
        });

        setProducts(filterData);
      });
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [cart, setCart] = useState([]);

  //  add and remove to cart
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

  let quentity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quentity) {
      product.quentity = 1;
    }
    total += Number(product.price) * Number(product.quentity);
    quentity = quentity + product.quentity;
  }

  return (
    <Box>
      <Container maxWidth="xl">
        <Box
          mt={1}
          style={{
            background: "#EEF0F9",
            height: "60px",
            padding: "0px 10px",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to={"/"}>
            {" "}
            <AddHomeIcon style={{ color: "#5C6AC4", fontSize: "40px" }} />
          </Link>
          <Typography style={{ color: "#84919C", fontSize: "22px" }}>
            All Product
          </Typography>

          <Link to={"/"}>
            <Badge badgeContent={quentity || 0} color="primary">
              <ShoppingCartIcon
                style={{ color: "#5C6AC4", fontSize: "40px" }}
              />
            </Badge>
          </Link>
        </Box>

        <Box mt={2}>
          <Grid container spacing={2}>
            {products?.map((product) => (
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 15px",

                    padding: "20px",
                    borderRadius: "5px",
                  }}
                >
                  <Slider {...settings}>
                    {product?.images?.map((image, index) => (
                      <div key={index}>
                        <img
                          style={{ width: "100%", height: "280px" }}
                          src={image || product?.thumbnail}
                          alt={`Image ${index}`}
                        />
                      </div>
                    ))}
                  </Slider>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      mt={1}
                      style={{
                        fontSize: "16px",
                        color: "#84919C",
                        height: "35px",
                        fontWeight: "600",
                      }}
                    >
                      {product?.title?.slice(0, 35)}
                    </Typography>

                    <Typography
                      style={{
                        color: "#000000",
                        fontWeight: "600",
                        fontSize: "16px",
                      }}
                    >
                      Price:{product?.price} $
                    </Typography>
                  </Box>
                  <Typography
                    my={2}
                    style={{
                      fontSize: "16px",
                      color: "#222222",
                      fontWeight: "500",
                      height: "50px",
                    }}
                  >
                    {product?.description?.slice(0, 70)}
                  </Typography>
                  <Box
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography style={{ color: "#7985CF" }}>
                      Stock:{product?.stock}
                    </Typography>
                    <Typography style={{ color: "green" }}>
                      Rating:{product?.rating}
                    </Typography>
                  </Box>

                  <Box
                    mt={2}
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <button
                      style={{
                        border: "none",
                        background: "tomato",
                        color: "#fff",
                        fontSize: "18px",
                        width: "150px",
                        height: "40px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleAddToCart(product, "add")}
                    >
                      Add To cart
                    </button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AllProduct;
