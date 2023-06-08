// Context API   
//     Create a Context
//     Provider
//     consumer=>useContext hook


import { createContext, useContext } from "react";

const AppContext = createContext(); //warehouse / global store zala

const AppProvider =({children})=>{
    // return<AppContext.Provider value="Rohit">{children}</AppContext.Provider>
    
    // we can pass object also
    return<AppContext.Provider value={{myName:"Vishal"}}>{children}</AppContext.Provider>
};
// the children is basically our app component 
// we wrap our app component in index.js file inside our AppProvider


//custom hook

const useProductContext=()=>{
    return useContext(AppContext);
}

export {AppProvider,AppContext, useProductContext};