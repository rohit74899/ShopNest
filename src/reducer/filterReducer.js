import React from 'react'

const filterReducer=(state,action)=> {
  switch (action.type) {
    case "FILTER_PRODUCTS":
        return{
          ...state,
          filter_Products:action.payload,
          all_Products:action.payload,
        };
      
      
  
    default:
         return state;
  }
  return state;
}

export default filterReducer
