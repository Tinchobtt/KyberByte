import { Outlet } from "react-router-dom"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"
import { Box } from "@mui/material"

const Layout = () => {
  return (
    <Box sx={{minHeight: '100vh', display: 'grid', gridTemplateRows: {xs:'50px auto auto', md: '60px auto auto'}}}>
        <Navbar />
        <Outlet />
        <Footer />
    </Box>
  )
}

export default Layout