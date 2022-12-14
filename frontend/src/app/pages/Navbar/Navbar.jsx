import { Box, Typography } from "@material-ui/core";
import { useLocation, useNavigate } from "react-router-dom";

const Tab = ({ label, to, navigate }) => {
  const { pathname } = useLocation();
  return (
    <Box
      onClick={() => navigate(to)}
      sx={{
        width: 250,
        height: 50,
        borderLeft: "1px solid #9191cc",
        borderRight: "1px solid #9191cc",
        backgroundColor: pathname === to ? "#9191cc" : "#b6b6ff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#9191cc",
        },
      }}
    >
      <Typography
        style={{ height: "fit-content", fontSize: 16, fontWeight: 700 }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#d3d3ff",
          border: "1px solid #9191cc",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "4%",
            backgroundColor: "#d3d3ff",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "35px",
            fontWeight: "bold",
            fontFamily: "Nerko One",
            color: "blueviolet",
          }}
        >
          COVID-19 DataVis
        </Box>
        <Tab label="By Country" to="/" navigate={navigate} />
        <Tab label="Top 10" to="/top10" navigate={navigate} />
        <Tab label="Compare" to="/compare" navigate={navigate} />
        <Box
          sx={{
            position: "absolute",
            right: "4%",
            backgroundColor: "#d3d3ff",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "35px",
            fontWeight: "bold",
            fontFamily: "Nerko One",
            color: "blueviolet",
          }}
        >
          Z-Team
        </Box>
      </Box>
    </Box>
  );
};
