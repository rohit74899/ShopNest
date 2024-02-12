const ProductReducer =(state, action)=>{

    switch (action.type) {
        case "SET_LOADING":
            return{
                ...state,  //return all data we get
                 isLoading:true, // update the value of isloading
            };
        case "SET_API_DATA":
            // console.log("action.payload:", action.payload);

            //check whether data is receiving correctly
            const featureData =action.payload.filter((curELe)=>{
                return curELe.featured===true; //filter is inbuild function
            })   
            return{
                ...state,
                isLoading:false,
                products: action.payload,// add all data into products array
                featureProducts: featureData,// add filtered value to featureProduct data
            };
        case "API_ERROR":
            return{
                ...state,  
                isLoading:false,//we got an error and we have to show error
                isError:true, // update value
            };
        case "SET_SINGLE_LOADING":
            return{
                ...state,  
                isSingleLoading:true, 
            };
        case "SET_SINGLE_PRODUCT":
            return{
                ...state,  
                isSingleLoading:false, 
                singleProduct:action.payload,
            };
        case "SET_SINGLE_ERROR":
            return{
                ...state,  
                isSingleLoading:true, 
                isError:true,
            };
        
        default:
            return state;
    }
    
};

export default ProductReducer; 