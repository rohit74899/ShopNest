import React from 'react'
import {useContextFilter} from "../context/Filter_context"
import GridView from './GridView';
const ProductList=()=>   {
  const {filter_Products,setGridView }=useContextFilter();
  
  
      if(setGridView){
        return <GridView products={filter_Products}/>;
      }
      // if(setGridView===false){
      //   return <ListView products={filter_Products}/>
      // }
    
  
}

export default ProductList
