import { Box, Button, CircularProgress, IconButton, Tooltip, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import LoopIcon from '@mui/icons-material/Loop';

export default function RandomQuote() {

    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(false)

    const getRandomQuote = async () => {

        axios.get("https://dummyjson.com/quotes/random")
            .then((response) => {
                setLoading(true)
                setTimeout(() => {
                    setQuote(response.data);
                    setLoading(false)
                }, 2000);
                
            })
            .catch((error) => {
                console.log(error);
            })

    };


    return (
        <Box sx={{ p: 2 }}>

            <Box sx={{ display: "flex", justifyContent: "end" }}>

            {loading?(
                 <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                 <CircularProgress size={20} />
             </Box>
            )
            :(
                
                <Tooltip title="click to refresh" arrow placement='top'>
                    <IconButton color='secondary' onClick={getRandomQuote}>
                        <LoopIcon />
                    </IconButton>
                </Tooltip>
            )}
                  
            </Box>

            <Box>
                {loading?(
                  <Typography>Fetching</Typography>
                )
                :(

    <Typography variant="body2" sx={{ fontWeight: 600 }}>
    {quote == null ? "Click to refresh"
        : quote?.quote}
</Typography>
                )}
              
            </Box>

            <Box><Typography variant="caption" color="text.secondary" sx={{ display: "flex", justifyContent: "end" }}>
                {quote?.author}</Typography></Box>



        </Box>
    )
}
