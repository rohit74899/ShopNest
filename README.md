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
