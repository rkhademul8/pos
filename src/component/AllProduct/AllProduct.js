import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

  return (
    <Box>
      <Container maxWidth="xl">
        <Box mt={2}>
          <Grid container spacing={2}>
            {products?.map((product) => (
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  style={{
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
                    padding: "20px",
                    borderRadius: "5px",
                  }}
                >
                  <Slider {...settings}>
                    {product?.images?.map((image, index) => (
                      <div key={index}>
                        <img
                          style={{ width: "100%", height: "350px" }}
                          src={image || product?.thumbnail}
                          alt={`Image ${index}`}
                        />
                      </div>
                    ))}
                  </Slider>

                  <Typography>{product?.title}</Typography>
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
