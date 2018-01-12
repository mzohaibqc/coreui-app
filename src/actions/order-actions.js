import axios from 'axios'
import getOrders from '../services/data'

export function fetchOrders() {
  return dispatch => {
    dispatch({type: 'FETCH_ORDERS_PENDING'})
    return getOrders().then(orders => {
      dispatch({type: 'FETCH_ORDERS_FULLFILLED', payload: orders})
    }).catch((error) => {
      dispatch({type: 'FETCH_ORDERS_REJECTED', payload: error})
    })
  }
}