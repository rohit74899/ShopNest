const ProductReducer =(state, action)=>{

    switch (action.type) {
        case "SET_LOADING":
            return{
                ...state,  //return all data we get
                 isLoading:true, // update the value of isloading
            };
        case "SET_API_DATA":
            const featureData =action.paylaod.filter((curELe)=>{//filter is inbuild function
                return curELe.featured ===true;
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
        
        default:
            return state;
    }
    
};

export default ProductReducer; 