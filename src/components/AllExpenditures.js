import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actionTypes from '../actionTypes/actionTypes'
import { Box, Card, CardContent, CardHeader, Grid, LinearProgress, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AddExpenditures from './AddExpenditures'

const AllExpenditures = () => {
    const columns = [
        { field: 'category', headerName: 'CATEGORY', width: 200 },
        {
          field: 'amount',
          headerName: 'AMOUNT',
          width: 150,
          editable: true,
        },
        {
          field: 'date',
          headerName: 'SPENT DATE',
          width: 150,
          editable: true,
        }
      ];
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    const userDetails = useSelector((state) => state.user)
    const [allExpendituresData, setAllExpendituresData] = useState([]);
    useEffect(() => {
        if(userDetails?.user) {
        dispatch({
            type: actionTypes.GET_ALL_EXPENDITURES_API,
            payload: {
                userName: userDetails.user.username
            }
        })
    }   
    }, [userDetails])
    useEffect(() => {
        setAllExpendituresData(state.expenditures?.allExpenditure)
    }, [state.expenditures])
    return(<React.Fragment>
        {allExpendituresData?.length ? (
            <React.Fragment>
            <Grid container spacing={2}>
            <Grid item xs={7}>
            <Card sx={{ width: '100%' }}>
            <CardHeader
            titleTypographyProps={{
                fontSize: 15,
              }}
              title="All Expenditures"
            >
            </CardHeader>
            <CardContent>
            <DataGrid
            rows={allExpendituresData || []}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 20,
                },
              },
            }}
            sx={{
                height: '70vh'
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
          </CardContent>
          </Card>
          </Grid>
          <Grid item xs={5}>
          <AddExpenditures user={userDetails}/>
          </Grid>
          </Grid>
          </React.Fragment>
        ): (
            <Typography variant='h6' gutterBottom sx={{
                textAlign: 'center'
            }}>loading ..! <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box></Typography>
        )}
       
        </React.Fragment>)
}
export default AllExpenditures;