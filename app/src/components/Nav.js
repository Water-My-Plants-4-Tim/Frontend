import React from 'react';
import { Menu, AppBar, Toolbar, Button, MenuItem } from '@material-ui/core'

const Nav = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar position="sticky">
                <Toolbar>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                   Water My Plants
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose, () => {console.log('button is clicked')}}>Link1</MenuItem>
                    <MenuItem onClick={handleClose}>Link2</MenuItem>
                    <MenuItem onClick={handleClose}>Link3</MenuItem>
                    <MenuItem onClick={handleClose}>Link4</MenuItem>
                    <MenuItem onClick={handleClose}>Link5</MenuItem>

                </Menu> 
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Nav