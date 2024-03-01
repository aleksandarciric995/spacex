export const initialState = {
  launches: [],
  loading: false,
  error: null,
};


export const launchesReducer = (state, action) => {
  switch (action.type) {
    case `FETCH_LAUNCES_REQUEST`:
      return {
        ...state,
        loading: true,
        error: null,
      }
  
      case 'FETCH_LAUNCHES_SUCCESS':
        return {
          ...state,
          loading: false,
          launches: action.payload
        }

      case 'FETCH_LAUNCHES_FAILURE':
        return {
          ...state,
          loading: false,
          launches: [],
          error: action.payload, // mogli smo da stavimo i false 
        }

    default:
      return state;
  }


}

