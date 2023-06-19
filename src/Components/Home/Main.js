import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';

const Main = () => {
  return (
    <div>
      <div className="flex flex-row text-left space-x-16 ...">
        <div>
        <Card sx={{ minWidth: 450 , minHeight :200 , borderRadius:10 , backgroundColor:"#ce93d8" , color:"#f3e5f5"}}>
      <CardContent>
        <Typography variant="h5" component="div">
          Set Delivery
        </Typography>
        <Typography variant="body2">
          Send 
        </Typography>
      </CardContent>
      <CardActions >
      <Button endIcon={<SendIcon color='grey'/>} sx={{ backgroundColor:"#f3e5f5" , borderRadius:3 , color:"ce93d8"}}>Fill in this detail</Button>
      </CardActions>
    </Card>
        </div>
        <div>
        <Card sx={{ minWidth: 450 , minHeight :200 , borderRadius:10 , backgroundColor:"#512da8" , color:"#f3e5f5"}}>
      <CardContent>
        <Typography variant="h5" component="div">
          Set Bank Account
        </Typography>
        <Typography variant="body2">
          Send 
        </Typography>
      </CardContent>
      <CardActions >
      <Button endIcon={<SendIcon color='grey'/>} sx={{ backgroundColor:"#f3e5f5" , borderRadius:3 , color:"ce93d8"}}>Fill in this detail</Button>
      </CardActions>
    </Card>
        </div>
        <div>
        <Card sx={{ minWidth: 450 , minHeight :200 , borderRadius:10 , backgroundColor:"#512da8" , color:"#f3e5f5"}}>
      <CardContent>
        <Typography variant="h5" component="div">
          Set Delivery
        </Typography>
        <Typography variant="body2">
          Send 
        </Typography>
      </CardContent>
      <CardActions >
      <Button endIcon={<SendIcon color='grey'/>} sx={{ backgroundColor:"#f3e5f5" , borderRadius:3 , color:"ce93d8"}}>Fill in this detail</Button>
      </CardActions>
    </Card>
        </div>
      </div>
    </div>
  )
}

export default Main