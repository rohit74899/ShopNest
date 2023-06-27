import { createContext,useContext, useEffect, useReducer } from "react";
import  {useProductContext}  from '../context/productcontext'
import reducer from "../reducer/filterReducer"
const FilterContext=createContext();

const Initialstate={
    filter_Products:[],
    all_Products:[],
    grid_view:true,

}
export const FilterContextProvider=({children})=>{
    const {products} =useProductContext();
    // console.log("Filter_context.js",products); 

    const [state,dispatch]=useReducer(reducer,Initialstate);

    // Grid view
    const setGridView=()=>{
        dispatch({type:"SET_GRID_VIEW"});
    }

    useEffect(()=>{
        dispatch({type:"SET_FILTER_PRODUCTS",payload:products});
    },[products])
    // When any of the dependencies change, the effect is re-run. If a dependency is not included in the dependency array, the effect will only run once, when the component is mounted.
  
    return (
        <FilterContext.Provider value={{...state,setGridView}}>
            {children}
        </FilterContext.Provider>
    )
}
export const useContextFilter=()=>{
    return useContext(FilterContext);
}