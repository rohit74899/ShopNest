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
    featureProducts:[],//this is aaray
    isSingleLoading:false,
    singleProduct:{},//this is object
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
    
    // 2nd APi call for single product
    const getSingleProduct= async(url)=>{
        dispatch({type:"SET_SINGLE_LOADING"});
        try{
            const res= await axios.get(url);
            const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct }); 
            //in axios we get por data in {data} object
            } catch (error){
                dispatch({type:"SET_SINGLE_ERROR"});
            }
    }
    
    useEffect(()=>{
        getProducts(API);
    },[]);

    return(

    //... is a spread operator
    //state is a varaible
    <AppContext.Provider value={{...state, getSingleProduct}}>{children}</AppContext.Provider>
    );
};
// the children is basically our app component 
// we wrap our app component in index.js file inside our AppProvider


//custom hook

const useProductContext=()=>{
    return useContext(AppContext);
}

export {AppProvider,AppContext,useProductContext};

//dispatch method is state menagement library associated with React useReducer ,Hook

// Axios is a popular JavaScript library used for making HTTP requests from a web browser or Node.js. It provides a simple and convenient API for sending asynchronous HTTP requests to a server and handling the responses.

//Important pt
// context API
// dispatch
// Axios