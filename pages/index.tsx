import {
  AccountBox,
  AccountCircle,
  ArrowDownward,
  Notifications,
  Place,
  Settings,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const ProductCard = () => (
  <Paper
    sx={{
      width: 250,
      height: 300,
    }}
  >
    <img
      src="https://asset.kompas.com/crops/icva5Lwu8mguAdL-ZHNbwHT-eZ0=/0x0:1200x800/750x500/data/photo/2020/10/26/5f96aecd62a38.jpg"
      alt=""
      style={{
        width: "100%",
        height: 150,
        objectFit: "cover",
      }}
    />
    <Box
      sx={{
        p: 1,
      }}
    >
      <Typography
        variant="body1"
        sx={{
          height: 40,
        }}
      >
        Rumah Taman Mekarsari
      </Typography>
      <Typography
        variant="h5"
        fontWeight={"bold"}
        sx={{
          height: 40,
        }}
      >
        Rp. 120JT
      </Typography>
      <Typography
        variant="h6"
        fontWeight={"bold"}
        sx={{
          height: 40,
          alignItems: "center",
          display: "flex",
        }}
      >
        <Place />
        Kemayoran
      </Typography>
    </Box>
  </Paper>
);

const Home: NextPage = () => {
  return (
    <Box>
      <Paper
        sx={{
          width: "100%",
          height: 100,
          display: "flex",
          alignItems: "center",
          px: 2,
          gap: 2,
        }}
      >
        <img
          src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
          alt="logo"
          width="20%"
        />
        <Divider orientation="vertical" />
        <TextField
          label="Cari Rumah ..."
          sx={{
            width: "70%",
          }}
        />
        <Divider orientation="vertical" />
        <Stack direction={"row"}>
          <IconButton>
            <AccountCircle />
          </IconButton>
          <IconButton>
            <Notifications />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </Stack>
        <Divider orientation="vertical" />
      </Paper>
      <Box sx={{ mt: 2, p: 1, display: "flex", alignItems: "center" }}>
        Rumah atau Tanah di Daerah <Place /> <b>Jakarta Timur</b>
      </Box>
      <Box sx={{ p: 4, display: "flex", gap: 3, flexDirection: "column" }}>
        <Grid container spacing={1}>
          {[...Array(5)].map((e, i) => (
            <Grid item key={i}>
              <ProductCard />
            </Grid>
          ))}
        </Grid>
        <img
          src="https://images.tokopedia.net/img/WVCyGU/2022/2/3/edca0e0a-49bb-4372-80d3-22d4be35990c.jpg"
          alt=""
        />
        <Grid container spacing={1}>
          {[...Array(5)].map((e, i) => (
            <Grid item key={i}>
              <ProductCard />
            </Grid>
          ))}
        </Grid>{" "}
      </Box>
    </Box>
  );
};

export default Home;
