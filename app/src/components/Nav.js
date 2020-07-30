import React from 'react';
import { Menu, AppBar, Toolbar, Button, MenuItem, } from '@material-ui/core'
import { Link, useRouteMatch} from 'react-router-dom'

const Nav = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { url, path } = useRouteMatch()
    console.log("Nav -> path", path)
    console.log("Nav -> url", url)
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
                        <Link to='/'>
                            <MenuItem onClick={handleClose, () => { console.log('button is clicked') }}>Home</MenuItem>
                        </Link>
                        <Link exact to='/login'>
                            <MenuItem onClick={handleClose}>Log In</MenuItem>
                        </Link>

                        <Link to='/'>
                            <MenuItem onClick={handleClose}>Sign Up</MenuItem>
                        </Link>

                        <Link to='/dashboard'>
                            <MenuItem onClick={handleClose}>Link4</MenuItem>
                        </Link>

                        <Link to='/'>
                            <MenuItem onClick={handleClose}>Link5</MenuItem>
                        </Link>



                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Nav