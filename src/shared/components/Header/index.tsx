import React from 'react';
import {Grid, MenuItem, Typography} from "@mui/material";
import './index.css'

const menu = ['About me', 'Works', 'Contact']

function Header() {
    return (
        <header className='header'>
            <Grid container spacing={2} sx={{justifyContent: 'center'}}>
                {
                    menu.map(el => {
                        return <Grid item key={el}>
                            <MenuItem sx={{color: 'white'}}>
                                <Typography>{el}</Typography>
                            </MenuItem>
                        </Grid>
                    })
                }

            </Grid>
        </header>
    );
}

export default Header;
