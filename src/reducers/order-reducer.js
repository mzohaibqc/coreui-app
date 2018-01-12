const defaultState = {
  orders: [],
  fetching: false,
  fetched: false,
  error: null
}

export default function getOrders(state = defaultState, action) {
  switch (action.type) {
    case `FETCH_ORDERS_FULLFILLED`:
      return {
        ...state,
        fetching: false,
        fetched: true,
        orders: [...action.payload]
      };

    case `FETCH_ORDERS_REJECTED`:
      return {
        ...state,
        fetching: false,
        error: action.error
      };
    case `FETCH_ORDERS_PENDING`:
      return {
        ...state,
        fetching: true
      };

    default: return state;
  }
}