import { Box, MenuItem } from "@mui/material"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div style={{display: 'flex', height: '150px', backgroundColor: '#1976D2', alignSelf: 'end'}}>
      <Link to={'/'}>
          <Box sx={{width: {xs: 140, sm: 220}, margin: '1rem'}}>
              <img src="https://res.cloudinary.com/dwyf1blmt/image/upload/v1687076562/ecommerce-react/logo_tsv1kb.svg" alt="logotipo" />
          </Box>
      </Link>
    </div>
  )
}

export default Footer