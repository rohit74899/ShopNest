import React from 'react'

const filterReducer=(state,action)=> {
  switch (action.type) {
    case "SET_FILTER_PRODUCTS":
        return{
          ...state,
          filter_Products:action.payload,
          all_Products:action.payload,
        };
    case "SET_GRID_VIEW":
        return{
          ...state,
          grid_view:true,
        };
      
  
    default:
         return state;
  }
  return state;
}

export default filterReducer
