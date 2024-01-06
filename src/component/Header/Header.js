import { Box, Button, Grid, SwipeableDrawer, Typography } from "@mui/material";
import React, { useState } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import logo from "../../images/gobilling.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  console.log(open);
  const drawerWidth = 350;
  const toggleDrawer = (openStatus) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(openStatus);
  };

  return (
    <Box>
      <Box>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={6}
            md={1}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <MenuOutlinedIcon
              onClick={toggleDrawer(true)}
              style={{ fontSize: "40px", color: "#000000" }}
            />

            <SwipeableDrawer
              anchor="left"
              open={open}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              PaperProps={{
                style: {
                  width: drawerWidth,
                },
              }}
            >
              {/* <div>
                <Button onClick={toggleDrawer(false)}>Close Drawer</Button>
              </div> */}

              <Box style={{ background: "#EFEFEF", padding: "0px 20px" }}>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <img style={{ width: "250px" }} src={logo} />
                </Box>
                <Box my={3}>
                  {" "}
                  <Typography style={{ fontSize: "18px", color: "#83909B" }}>
                    Location:
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "24px",
                      color: "#454F5B",
                      fontWeight: "600",
                    }}
                  >
                    Los Angeles, California
                  </Typography>
                </Box>
              </Box>
            </SwipeableDrawer>
          </Grid>

          <Grid item xs={12} sm={6} md={2.5}>
            <Box>
              <button
                style={{
                  width: "100%",
                  height: "60px",
                  background: "#DEE1F3",
                  color: "#5C6AC4",
                  border: "none",
                  fontSize: "26px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <NoteAltOutlinedIcon
                  style={{ fontSize: "28px", marginRight: "10px" }}
                />
                Note
              </button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2.5}>
            <Box>
              <button
                style={{
                  width: "100%",
                  height: "60px",
                  background: "#DEE1F3",
                  color: "#5C6AC4",
                  border: "none",
                  fontSize: "26px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LocalShippingOutlinedIcon
                  style={{ fontSize: "28px", marginRight: "10px" }}
                />
                Shipping
              </button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <button
                style={{
                  width: "100%",
                  height: "60px",
                  background: "#DEE1F3",
                  color: "#5C6AC4",
                  border: "none",
                  fontSize: "26px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AddTaskOutlinedIcon
                  style={{ fontSize: "30px", marginRight: "10px" }}
                />
                Hold Orders
              </button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <button
                style={{
                  width: "100%",
                  height: "60px",
                  background: "#DEE1F3",
                  color: "#5C6AC4",
                  border: "none",
                  fontSize: "26px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AddCircleIcon
                  style={{ fontSize: "30px", marginRight: "10px" }}
                />
                New Item
              </button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box my={2} style={{ background: "#EEF0F9", borderRadius: "5px" }}>
        <Grid
          container
          py={1.3}
          px={1}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} sm={6} md={8} sx={{ display: "flex", gap: "8px" }}>
            <AccountCircleOutlinedIcon
              style={{ color: "#5C6AC4", fontSize: "29px" }}
            />
            <Typography
              style={{ fontSize: "20px", color: "#5C6AC4", fontWeight: "500" }}
            >
              Steve Jobs
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box style={{ display: "flex", justifyContent: "end" }}>
              <AddCircleOutlineOutlinedIcon
                style={{ color: "#5C6AC4", fontSize: "30px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;
