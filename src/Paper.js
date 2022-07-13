import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import axios from "axios";

export default function SimplePaper() {

    const [items, setItems] = useState({})

    useEffect(() => {
        axios.get('http://www.boredapi.com/api/activity/').then((response) => {
            console.log(response.data)
            setItems(response.data)
        })
    }, [])

    const text = <Typography
        variant="h4"

        component="a"
        href="/"
        sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            fontSize: '40px',
            color: 'inherit',
        }}>
            {items.activity}
    </Typography>;

    return (
        <Container maxWidth="xl">

            <Box
                sx={{
                    marginTop: '50px',
                    display: { xs: 'none', md: 'flex' },
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '& > :not(style)': {
                        m: 1,
                        width: 600,
                        height: 400,
                    },
                }}
            >


                <Paper elevation={3}>
                    <Box
                        sx={{
                            marginTop: '50px',
                            display: { xs: 'none', md: 'flex' },
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center',
                            '& > :not(style)': {
                                m: 1,
                                width: 600,
                                height: 400,
                            },
                        }}
                    >
                        {text}
                    </Box>
                </Paper>
            </Box>


            <Box
                sx={{
                    marginTop: '50px',
                    display: { xs: 'flex', md: 'none' },
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '& > :not(style)': {
                        m: 1,
                        width: 600,
                        height: 400,
                    },
                }}
            >


                <Paper elevation={3}>
                    <Box
                        sx={{
                            marginTop: '50px',
                            display: { xs: 'flex', md: 'none' },
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center',
                            '& > :not(style)': {
                                m: 1,
                                width: 300,
                                height: 200,
                            },
                        }}
                    >
                        {text}
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}
