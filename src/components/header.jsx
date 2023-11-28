import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actionTypes from '../actionTypes/actionTypes'
import { Box, Typography } from '@mui/material';

const Header = (props) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    useEffect(() => {
        dispatch({
            type: actionTypes.TEST_API
        })
    }, [])
    useEffect(() => {
      dispatch({
          type: actionTypes.USER_DETAILS,
          payload: props.user
      })
  }, [props.user])
    return(<Box sx={{width: '100%',
    background: 'color(rec2020 0.32 0.43 0.62)',
    height: '60px'

}}>
<Typography variant='h5' sx={{
    color: 'white',
    position: 'absolute',
    left: '30px',
    top: '10px'
}}>
Save It!
</Typography>
        </Box>)
}

// To make those two function works register it using connect
export default Header;