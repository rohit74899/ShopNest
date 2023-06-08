we used Axios 
     |
        which returns promise
        .then 
        .then .catch
        or we have 
        Async & await

 console.log("~file: productcontext.js ~ line 10 ~ getProducts ~ res",res); 
 to see data coming from API


 Now we have all API data in 
 product variable
  we need to store that data globally for that we need state management
                 | 
         |                |
      useState hook      useReducer hook

///******************UseReducer Hook*****/////////////
1.loading
2.error
3.data



In componenets/FeatureProducts.js

import  useProductContext  from '../context/productcontext'

we exported it as a object therefore we need to export it as an object

import  {useProductContext}  from '../context/productcontext'


//***Iportant part about hook **//
we need to always define HOOK at the top of the function not in the file 
