import { Box, Skeleton } from '@mui/material'
import React from 'react'

export default function CardSkelton() {
  return (
    <Box sx={{p:2}}>
<Box sx={{p:3,width:100, display:"flex",justifyContent:"center",alignContent:"center",flexDirection:"column"}}>

      <Skeleton animation="wave" sx={{p:2}} width={"100%"}/>
      <Skeleton animation="wave" sx={{p:2}} width={100} />
    

</Box>
    </Box>
  )
}
