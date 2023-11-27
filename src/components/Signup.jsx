import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actionTypes from '../actionTypes/actionTypes'
import { Box, Button, Card, CardActions, CardContent, CardHeader, TextField, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';

const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
  padding: 10,
  textAlign: 'center',
  color: 'black',
}));



const SignUp = () => {
    const dispatch = useDispatch();
    const [userDetails, setUserDetails] = useState({
        fullName: '',
        email: '',
        empId: '',
        password: ''
    })
    const state = useSelector((state) => state)
    useEffect(() => {
        dispatch({
            type: actionTypes.TEST_API
        })
    }, [])

    return(
        <>
        <Card sx={{ width:  800}}>
        <CardHeader
        title="Create an account"
        >
        </CardHeader>
        <CardContent>

        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1
          },
        }}
      >        <Grid container spacing={2}>
        <Paper elevation={3} />
        <Grid item xs={4}>
        <Typography variant="button" display="block" sx={{margin: '10px 10px 15px 50px'}} gutterBottom>
        Full name:
      </Typography>
      </Grid>
          <Grid item xs={6}>
          <TextField
          required
          fullWidth
          value={userDetails.fullName}
          onChange={(e) => setUserDetails({...userDetails, fullName: e.target.value})}
          id="outlined-required"
          label="Required"
        />
          </Grid>
          <Grid item xs={4}>
          <Typography variant="button" display="block" sx={{margin: '10px 10px 15px 50px'}}  gutterBottom>
          Employee Id:
        </Typography>        </Grid>
            <Grid item xs={6}>
            <TextField
            required
            fullWidth
            value={userDetails.empId}
          onChange={(e) => setUserDetails({...userDetails, empId: e.target.value})}
            id="outlined-required"
            label="Required"
          />
            </Grid>
           
            <Grid item xs={4}>
            <Typography variant="button" display="block" sx={{margin: '10px 10px 15px 50px'}} gutterBottom >
            Email:
          </Typography>        </Grid>
              <Grid item xs={6}>
              <TextField
              required
              value={userDetails.email}
          onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
              fullWidth
              id="outlined-required"
              label="Required"
            />
              </Grid>

              <Grid item xs={4}>
              <Typography variant="button" display="block" sx={{margin: '10px 10px 15px 50px'}} gutterBottom >
              Password:
            </Typography>        </Grid>
                <Grid item xs={6}>
                <TextField
                required
                type='password'
                value={userDetails.password}
            onChange={(e) => setUserDetails({...userDetails, password: e.target.value})}
                fullWidth
                id="outlined-required"
                label="Required"
              />
                </Grid>
        </Grid>
      </Box>
      <Button variant="contained" fullWidth sx={{ml: 32, mt: 5, width: '30%', background: 'color(rec2020 0.32 0.43 0.62)',}}>Sign up</Button>

      </CardContent>
    </Card>
        </>
    )
}

// To make those two function works register it using connect
export default SignUp;