import React from 'react';
import {Grid, Typography} from "@mui/material";

function AboutMe() {
    return (
        <Grid container>
            <Grid mt={8} item xs={12} textAlign="center">
                <Typography sx={{fontWeight:"700"}} variant="h4">Hello, My name is Maxim Botnariuc</Typography>
            </Grid>
        </Grid>
    );
}

export default AboutMe;
