import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


interface Props {
  darkMode: boolean;
  changeDarkMode: () => void;
}

const midLinks = [
  {title:"catalog", path:"/catalog"},
  {title:"about", path:"/about"},
  {title:"contact", path:"/contact"},
]

const rightLinks = [
  {title:"login", path:"/login"},
  {title:"register", path:"/register"},
]

export default function Header({darkMode, changeDarkMode}: Props) {
    return (
      <AppBar position="static" sx={{mb: 4}}>
        <Toolbar>
            <Typography variant="h6" component={NavLink}
                to="/"
                sx={{color:'inherit', textDecoration:'none'}}
            >
                Re-Store
            </Typography>
            <Switch checked={darkMode} onChange={changeDarkMode}/>
            <List sx={{display:'flex'}}>
                {midLinks.map(({title, path}) => (
                  <ListItem component={NavLink}
                    to={path}
                    key={path}
                    sx={{color:'inherit', typography:'h6'}}
                  >
                    {title}
                  </ListItem>
                ))}
            </List>
            <IconButton size="large" edge="start" color="inherit" sx={{mr:2}}>
              <Badge badgeContent={4} color="secondary"> 
                  <ShoppingCartIcon />
              </Badge>
          </IconButton>
            <List sx={{display:'flex'}}>
                {rightLinks.map(({title, path}) => (
                  <ListItem component={NavLink}
                    to={path}
                    key={path}
                    sx={{color:'inherit', typography:'h6'}}
                  >
                    {title}
                  </ListItem>
                ))}
            </List>
        </Toolbar>
      </AppBar>
    )
}