import React from 'react'
import {useContextFilter} from "../context/Filter_context"
import GridView from './GridView';
import ListView from './ListView';

const ProductList=()=>   {
  const {filter_Products,grid_view }=useContextFilter();
  
  
      if(grid_view===true){
        return <GridView products={filter_Products}/>;
      }
      if(grid_view===false){
        return <ListView products={filter_Products}/>;
      }
      
    
  
}

export default ProductList
