import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Box } from '@mui/material';
import Card from './Components/Card';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RandomQuote from './Components/RandomQuote';
import backgroundImage from "../src/pastel.jpg"
import CardSkelton from './Components/CardSkelton';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {

  const [allQuotes,setAllQuotes]=useState([]);
  const [quoteLoading,setQuoteLoading]=useState(false);
  
  useEffect(()=>{

    axios.get("https://dummyjson.com/quotes")
    .then((response)=>{
setQuoteLoading(true);
setTimeout(() => {
  setQuoteLoading(false)
  setAllQuotes(response.data.quotes)
}, 3000);

// console.log(response.data.quotes);


    })
    .catch((error)=>{
      console.log(error);
    })

  },[]);

  return (
    <div>
      {/* <Box>
        <Card/>
      </Box> */}

      <Box  sx={{
        
            display: "flex",
            backgroundImage: `url(${backgroundImage})`, 
            backgroundSize: "cover", 
            backgroundPosition: "center", 
             
          }}>

      <Grid container spacing={2} sx={{p:2,display:"flex", justifyContent: "center",alignItems:"center",mb:2}}>
        
        
        <Grid item xs={4} >
          
            <Item elevation={5}>
           <RandomQuote/>
            </Item>
        </Grid>
         
      </Grid>
    </Box>


    <Box sx={{ flexGrow: 1 , minHeight:"100vh"}}>

      <Grid container spacing={2} sx={{p:2}}>
{quoteLoading
?(
[1,2,3,4,5,6].map(()=>
  <Grid item xs={4} >
  <Item elevation={5}>
<CardSkelton/>
</Item>
</Grid>)
)
:(  allQuotes?.map((value,index)=>(

        
  <Grid item xs={4} key={index}>
    <Item>
      
      <Card data={value}/></Item>   
  </Grid>
    ))
    )}

      
         
      </Grid>
    </Box>
    </div>
  );
}

export default App;
