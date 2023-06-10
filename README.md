
**Ecommerce_website**
**Project Name : Ecommerce Website**

**1.we used Axios**
   - |
   -  which returns promise
   - {.then} 
   - {.then .catch}
   - or we have 
   - {Async & await}

**2.to see data coming from API**
   - console.log("~file: productcontext.js ~ line 10 ~ getProducts ~ res",res); 
 


 **2.Now we have all API data in**
   - product variable
   - we need to store that data globally for that we   need state management
      - 1. useState hook     
      - 2  useReducer hook
 

=======

**3.UseReducer Hook**
   - 1.loading
   - 2.error
   - 3.data



**4.In componenets/FeatureProducts.js**

   - import  useProductContext  from '../context/productcontext'

   - we exported it as a object therefore we need to export it as an object

   - import  {useProductContext}  from '../context/productcontext'


**5.Important part about hook**
   - we need to always define HOOK at the top of the function not in the file 
<<<<<<< HEAD
=======
   - wheneevr we load page and we get the data same time for that we have useEffect hook
>>>>>>> API_USE
>>>>>>> API_USE
