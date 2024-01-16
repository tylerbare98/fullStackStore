import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  darkMode: boolean;
  changeDarkMode: () => void;
}

export default function Catalog({darkMode, changeDarkMode}: Props) {
    return (
      <AppBar position="static" sx={{mb: 4}}>
        <Toolbar>
            <Typography variant="h6">
                Re-Store
            </Typography>
            <Switch checked={darkMode} onChange={changeDarkMode}/>
        </Toolbar>
      </AppBar>
    )
}