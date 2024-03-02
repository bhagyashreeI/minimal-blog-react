import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
const Header = () =>{
    return (
        <Box>
        <AppBar className="headerCls">
            <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Blogs
          </Typography>
            <Button className="linkSize" size="small" fontSize="small" sx={{ mr: 2 }} color="inherit" component={Link} to={"/logout"} >Home</Button>
            <Button className="linkSize" sx={{ mr: 2 }} color="inherit" component={Link} to={"/logout"}>About</Button>
            <Button className="linkSize" sx sx={{ mr: 2 }} color="inherit" component={Link} to={"/logout"}>Contact Us</Button>
          </Toolbar>
        </AppBar>
        </Box>
    )
}

export default Header;