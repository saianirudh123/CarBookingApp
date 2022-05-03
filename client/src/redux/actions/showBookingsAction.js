import axios from 'axios';

export const getAllBookings=()=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})
  
    try {
        const response = await axios.get('/api/bookings/getallbookings')
        dispatch({type: 'GET_ALL_BOOKINGS', payload:response.data})
        dispatch({type: 'LOADING' , payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
  
  }