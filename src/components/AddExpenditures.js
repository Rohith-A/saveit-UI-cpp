import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actionTypes from '../actionTypes/actionTypes'
import { Autocomplete, Box, Button, Card, CardContent, CardHeader, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  padding: 10,
  textAlign: 'center',
  color: 'black',
}));

const AddExpenditures = (props) => {
  const userDetails = props.user
  const dispatch = useDispatch();
  const [category, setCategory] = useState({
  })
  const [expenditureDetails, setExpenditureDetails] = useState({
    category: '',
    amount: '',
    date: '',
  })
  const state = useSelector((state) => state)

  const [categories, setCategories] = useState(state.categories || {});

  useEffect(() => {
    dispatch({
      type: actionTypes.GET_CATGORIES_API
    })
  }, [])

  const addExpenditure = () => {
    const payload = expenditureDetails;
    expenditureDetails.userName = userDetails.user.username
    dispatch({
      type: actionTypes.ADD_EXPENDITURES_API,
      payload: expenditureDetails
    })
  }
  return (
    <React.Fragment>
      <Card sx={{ width: '100%' }}>
        <CardHeader
          titleTypographyProps={{
            fontSize: 17,
          }}
          title="Add expenditure"
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
                <Typography variant="button" display="block" sx={{ margin: '10px 10px 15px 50px' }} gutterBottom>
                  Category:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                {state.categories && state.categories.categoryOptions && (
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={state.categories.categoryOptions}
                    onChange={(e, value) => {
                      setExpenditureDetails({ ...expenditureDetails, category: value.value })
                      setCategory(value);
                    }
                    }
                    renderInput={(params) => <TextField value={category} {...params} label="Category" />}
                  />
                )}

              </Grid>
              <Grid item xs={4}>
                <Typography variant="button" display="block" sx={{ margin: '10px 10px 15px 50px' }} gutterBottom>
                  Amount
                </Typography>        </Grid>
              <Grid item xs={8}>
                <TextField
                  required
                  fullWidth
                  value={expenditureDetails.empId}
                  onChange={(e) => setExpenditureDetails({ ...expenditureDetails, amount: e.target.value })}
                  id="outlined-required"
                  label="Required"
                />
              </Grid>

              <Grid item xs={4}>
                <Typography variant="button" display="block" sx={{ margin: '10px 10px 15px 50px' }} gutterBottom >
                  Date
                </Typography>        </Grid>
              <Grid item xs={8}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker sx={{
                    width: '100%'
                  }} onChange={(e) => setExpenditureDetails({ ...expenditureDetails, date: new Date(e.$d).toLocaleDateString() })} />
                </LocalizationProvider>

              </Grid>
            </Grid>
          </Box>
          <Button variant="contained"
            fullWidth
            onClick={() => addExpenditure()}
            sx={{ ml: 5, mt: 5, width: '50%', background: 'color(rec2020 0.32 0.43 0.62)' }}>ADD EXPENDITURE</Button>

        </CardContent>
      </Card>
    </React.Fragment>
  )
}

// To make those two function works register it using connect
export default AddExpenditures;