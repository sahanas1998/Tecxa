import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { start } from '@popperjs/core';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import { Stack, margin } from '@mui/system';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


const RightSideBar = () => {
  return (
    <div>
      <div class="flex flex-row ...">
        <div>
        <Card sx={{ minWidth: 240 , minHeight :120 , borderRadius:10 , textAlign:start ,marginLeft:6}} >
      <CardContent>
        <Typography variant="h5" component="div">
           Product Sale Chart
        </Typography>
        <Stack direction="row" spacing={2}>
          <div className='grid grid-cols-2 gap-2 text-blue-800 text-center'>
        <Typography variant="body2" component="div">
          <h1>$5620</h1><h1>Online Sales</h1>
        </Typography>
        <Typography variant="body2" component="div">
         <h1>$2350</h1><h1>Offline Sales</h1>
        </Typography>
        </div>
         </Stack>
         <div >
          <Typography variant="body2" component="div"  >
          <img src='https://redyellowblue.org/wp-content/uploads/2017/07/ryb-color-wheel.png' height="170" width="170"/>
          </Typography>
          <Typography variant="body2" component="div">
            <ul role="list" class="list-disc pl-3">
              <li>Gadget Branding</li>
              <li>Souvernir Gift Products</li>
              <li>Advertisement & Influencer</li>
            </ul>
        </Typography>
          </div>
      </CardContent>
    </Card>
        </div>
      </div>
      <div class="flex flex-row ...">
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 240,
            height: 240,
            marginLeft:6
          },
        }}
      >
        <Paper sx={{ backgroundColor: '#5c6bc0' }}>
          <p>Order</p>
          <AutoAwesomeMotionIcon color='white'/>
          <h1>187</h1>
          <button>+11%</button>
        </Paper>
      </Box>
    </div>
          </div>
  )
}

export default RightSideBar