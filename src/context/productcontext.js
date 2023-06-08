// Context API   
//     Create a Context
//     Provider
//     consumer=>useContext hook


import { createContext, useContext ,useEffect, useReducer} from "react";
import axios from "axios";
import reducer from "../reducer/productReducer"


const AppContext = createContext(); //warehouse / global store zala
const API="https://api.pujakaitem.com/api/products";


const initalialState={
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    // those data having value true tose only added
}
const AppProvider =({children})=>{
    
    const [state,dispatch]=useReducer(reducer,initalialState);
    
    const getProducts= async(url)=>{
        dispatch({type:"SET_LOADING"});
        try{
        const res= await axios.get(url);
        const products =await res.data;
        dispatch({type: "SET_API_DATA", paylaod: products}) 
        // type :you can write any name
        // payload :{which data is required to complete this work}
        } catch (error){
            dispatch({type:"API_ERROR"});
        }
    };
    
    
    useEffect(()=>{
        getProducts(API);
    },[]);

    return(

    //... is a spread operator
    //state is a varaible
    <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
    );
};
// the children is basically our app component 
// we wrap our app component in index.js file inside our AppProvider


//custom hook

const useProductContext=()=>{
    return useContext(AppContext);
}

export {AppProvider,AppContext, useProductContext};