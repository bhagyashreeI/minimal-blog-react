import { Box, Typography } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const ErrorPage = () =>{
    return <>
    <Header/>
    <Box height={200} width={200} my={4} display="flex" alignItems="center" gap={4} p={2} sx={{ mx: "auto" }}>
        <Typography variant="body" sx={{ fontStyle: "oblique", fontWeight: "medium", fontSize: 26 }}>
          Page Not Found
        </Typography>
      </Box>
      <Footer/>
    </>;
}

export default ErrorPage;