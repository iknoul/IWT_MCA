import React from 'react';
import Navbar from './Navbar';
import * as mui from '@mui/material';


const TeacherHome = () => {
  return (
    <>
    <Navbar />
    <div className='mt-3'>
      <div className='container'>
        <div className='row'>
       <mui.Box sx={{display: 'flex',flexDirection: 'row' } }>   
        <mui.Card sx={{ width: '340px' ,mx: 5}}  >
      <mui.CardMedia
        component="img"
        height="140"
        image={require('./5124556.jpg')}
        alt="Attendance"
      />
      <mui.CardContent >
        <mui.Typography gutterBottom variant="h5" component="div" >
          Attendance Module
        </mui.Typography>
        <mui.Typography variant="body2" color="text.secondary">
          <ul>
            <li>Take Students Attendance</li>
            <li>Take Students Attendance</li>
            <li>Take Students Attendance</li>
            <li>Take Students Attendance</li>
          </ul>
        </mui.Typography>
      </mui.CardContent>
      <mui.CardActions>
        <mui.Button size="large">Add Attendance</mui.Button>
        
      </mui.CardActions>
    </mui.Card>
        <mui.Card sx={{ width: '340px' }}  >
      <mui.CardMedia
        component="img"
        height="140"
        image={require('./2152177.jpg')}
        alt="Assignment"
      />
      <mui.CardContent >
        <mui.Typography gutterBottom variant="h5" component="div" >
          Assignment Module
        </mui.Typography>
        <mui.Typography variant="body2" color="text.secondary">
          <ul>
            <li>Take Students Assignment</li>
            <li>Take Students Assignment</li>
            <li>Take Students Assignment</li>
            <li>Take Students Assignment</li>
          </ul>
        </mui.Typography>
      </mui.CardContent>
      <mui.CardActions>
        <mui.Button size="large">Assignment</mui.Button>
       
      </mui.CardActions>
    </mui.Card>
        <mui.Card sx={{ width: '340px',mx:5 }}  >
      <mui.CardMedia
        component="img"
        height="140"
        image={require('./5270.jpg')}
        alt="Management"
      />
      <mui.CardContent >
        <mui.Typography gutterBottom variant="h5" component="div" >
          Mangement Module
        </mui.Typography>
        <mui.Typography variant="body2" color="text.secondary">
          <ul>
            <li>Take Students Mangement</li>
            <li>Take Students Mangement</li>
            <li>Take Students Mangement</li>
            <li>Take Students Mangement</li>
          </ul>
        </mui.Typography>
      </mui.CardContent>
      <mui.CardActions>
        <mui.Button size="large">Add Students</mui.Button>
        
      </mui.CardActions>
    </mui.Card>
    </mui.Box>
        </div>
      </div>
    </div>

    </>

  )
}

export default TeacherHome