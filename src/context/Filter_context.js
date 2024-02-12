import { createContext,useContext, useEffect, useReducer } from "react";
import  {useProductContext}  from '../context/productcontext'
import reducer from "../reducer/filterReducer"
const FilterContext=createContext();

const Initialstate={
    filter_Products:[],
    all_Products:[],
    grid_view:true,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
    },
}
export const FilterContextProvider=({children})=>{
    const {products} =useProductContext();
    // console.log("Filter_context.js",products); 

    const [state,dispatch]=useReducer(reducer,Initialstate);

    // Grid view
    const setGridView=()=>{
        dispatch({type:"SET_GRID_VIEW"});
    }

    //sorting function
    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: userValue });
      };



    // update the filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

   // to sort the product
   useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);

    useEffect(()=>{
        dispatch({type:"SET_FILTER_PRODUCTS",payload:products});
    },[products])
    // When any of the dependencies change, the effect is re-run. If a dependency is not included in the dependency array, the effect will only run once, when the component is mounted.
  
    return (
        <FilterContext.Provider value={{...state,setGridView,sorting,updateFilterValue}}>
            {children}
        </FilterContext.Provider>
    )
}


export const useContextFilter=()=>{
    return useContext(FilterContext);
}