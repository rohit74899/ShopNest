// Context API   
//     Create a Context
//     Provider
//     consumer=>useContext hook


import { createContext, useContext ,useEffect} from "react";
import axios from "axios";
const AppContext = createContext(); //warehouse / global store zala
const API="https://api.pujakaitem.com/api/products";

const AppProvider =({children})=>{
    
    
    const getProducts= async(url)=>{
        const res= await axios.get(url);
        const products =await res.data;
        console.log("~file: productcontext.js ~ line 10 ~ getProducts ~ res",products); 
    };
    
    
    useEffect(()=>{
        getProducts(API);
    },[]);

    return<AppContext.Provider value={{myName:"Vishal"}}>{children}</AppContext.Provider>
};
// the children is basically our app component 
// we wrap our app component in index.js file inside our AppProvider


//custom hook

const useProductContext=()=>{
    return useContext(AppContext);
}

export {AppProvider,AppContext, useProductContext};