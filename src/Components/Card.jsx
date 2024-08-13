import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import backgroundImage from "../Components/sea.jpg"


export default function Card({data}) {
  return (
    <div style={{  height:"15vh", overflow:"auto"}}>
      {/* <Paper sx={{p:3}}>
        Card Contents
      </Paper> */}
      <Box sx={{p:3,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Ensure the image covers the entire box
        backgroundPosition: 'center', // Center the image
        p: 8, // Add padding for content inside the box
      
      }}>
        <Typography variant='body2' sx={{fontWeight:600}}>
{
    data?.quote
}

        </Typography>
        <Typography variant="caption" color={"text.secondary"}>
{
    data?.author
}
        </Typography>
      </Box>
    </div>
  )
}
