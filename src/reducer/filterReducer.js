const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER_PRODUCTS":
      return {
        ...state,
        filter_Products: action.payload, // Update to assign the payload directly
        all_Products: action.payload, // Update to assign the payload directly
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      const { filter_Products, sorting_value } = state; // Update to use filter_Products instead of filter_products

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      const newSortData = filter_Products.sort(sortingProducts); // Update to use filter_Products instead of filter_products

      return {
        ...state,
        filter_Products: newSortData, // Update to use filter_Products instead of filter_products
      };
    case "FILTER_PRODUCTS":
      
        let { all_Products } = state;
  
        let tempFilterProduct = all_Products;
  
        const { text, category, company, color } = state.filters;
  
        if (text) {
          tempFilterProduct = tempFilterProduct.filter((curElem) => {
            return curElem.name.toLowerCase().includes(text);
          });
        }
  
        if (category !== "all") {
          tempFilterProduct = tempFilterProduct.filter(
            (curElem) => curElem.category === category
          );
        }
  
        if (company !== "all") {
          tempFilterProduct = tempFilterProduct.filter(
            (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
          );
        }
  
        if (color) {
          tempFilterProduct = tempFilterProduct.filter((curElem) =>
            curElem.colors.includes(color)
          );
        }
        return {
          ...state,
          filter_Products: tempFilterProduct,
        };
  
    case "UPDATE_FILTERS_VALUE":
        const { name, value } = action.payload;
  
        return {
          ...state,
          filters: {
            ...state.filters,
            [name]: value,
          },
        };
    default:
      return state;
  }
};

export default filterReducer;
