import React from 'react';
import {Grid, Typography} from "@mui/material";
import './index.css'

function AboutMe() {
    return (
        <Grid sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }} container>
            <Grid item mt={8} xs={12} textAlign="center">
                <Typography sx={{fontWeight: "700"}} variant="h4">HEY, I'M MAXIM BOTNARIUC</Typography>
            </Grid>
            <Grid item mt={5} md={6} textAlign="center">
                <Typography variant="h6">A Frontend focused Web Developer building the Frontend of Websites and Web
                    Applications that
                    leads to the success of the overall product</Typography>
            </Grid>
            <Grid className='myAvatar' item mt={5}>
                <img src="https://img.freepik.com/premium-vector/man-face-logo-with-vector_96853-578.jpg" alt="MyPhoto"/>
            </Grid>
        </Grid>
    );
}

export default AboutMe;
