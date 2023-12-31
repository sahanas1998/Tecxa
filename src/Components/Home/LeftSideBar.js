import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import { start } from '@popperjs/core';
import ErrorIcon from '@mui/icons-material/Error';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { Stack } from '@mui/system';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import RecommendIcon from '@mui/icons-material/Recommend';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';

const LeftSideBar = () => {
  return (
    <div>
      <div class="flex flex-row space-x-4 ...">
        <div>
        <Card sx={{ minWidth: 450 , minHeight :250 , borderRadius:10 , textAlign:start, marginRight:5}}>
      <CardContent>
        <Typography variant="h5" component="div">
          <ErrorIcon color='primary'/>ISO 9001 pre
        </Typography>
        <Stack direction="row" spacing={2}>
          <div>
          <Typography variant="body2" component="div"  >
          <img src='https://us.123rf.com/450wm/rubelhossain/rubelhossain2010/rubelhossain201001483/157735065-diagramas-de-porcentaje-de-c%C3%ADrculo-del-98-porcentaje-del-98-listo-para-usar-para-dise%C3%B1o-web.jpg?ver=6' height="170" width="170"/>
          </Typography>
          </div>
          <div className='grid grid-cols-2 gap-2 text-blue-800 '>
        <Typography variant="body2" component="div">
          <AccessTimeIcon/><h1>Customer</h1><h1>130</h1>
        </Typography>
        <Typography variant="body2" component="div">
         <AvTimerIcon/><h1>Delivery time</h1><h1>2-3 days</h1>
        </Typography>
        <Typography variant="body2" component="div">
          <ThumbUpIcon/><h1>Good Feedback</h1><h1>1505</h1>
        </Typography>
        <Typography variant="body2" component="div">
          <ThumbDownAltIcon/><h1>Bad Feedback</h1><h1>10</h1>
        </Typography>
        </div>
         </Stack>
      </CardContent>
    </Card>
        </div>
        <div>
        <Card sx={{ minWidth: 250 , minHeight :250 , borderRadius:10 , textAlign:'start'}}>
      <CardContent>
        <Typography variant="h5" component="div">
          <PermIdentityIcon color='primary'/>Reputation level
        </Typography>
        <Stack direction="row" spacing={2}>
          <div className='grid grid-cols-3 gap-8 text-blue-800 text-center'>
        <Typography variant="body2" component="div">
          <AccessTimeIcon/><h1>New Seller</h1>
        </Typography>
        <Typography variant="body2" component="div">
         <RecommendIcon/><h1>Great Seller</h1>
        </Typography>
        <Typography variant="body2" component="div">
          <StarsOutlinedIcon/><h1>king Seller</h1>
        </Typography>
        </div>
         </Stack>
         <div className='text-center'>
          <Typography variant="body2" component="div"  >
          <img src='https://www.pngarts.com/files/10/Blue-Line-PNG-Background-Image.png' height="170" width="200"/>
          <h6 className='text-blue-800'>1 more positive feedback to reach Super Seller</h6>
          </Typography>
          </div>
      </CardContent>
    </Card>
        </div>
      </div>
      <div className="flex flex-row">
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 240,
            height: 300,
            marginTop:5,
            marginLeft:3

          },
        }}
      >
        <Paper sx={{ backgroundColor: '#5c6bc0' }}>
          <div className='pt-6 pl-6 flex items-center space-x-32'>
          <p>Order</p>
          <AutoAwesomeMotionIcon color='background'/>
          </div>
          <div className='pt-6 pl-6 pb-16'>
          <h1>187</h1>
          <Button variant="contained">+11%</Button>
          </div>
        </Paper>
        <Paper sx={{ backgroundColor: '#ffb74d' }}>
          <p>Text 2</p>
        </Paper>
        <Paper sx={{ backgroundColor: '#5c6bc0' }}>
          <p>Text 3</p>
        </Paper>
      </Box>
    </div>
    </div>

  )
}

export default LeftSideBar