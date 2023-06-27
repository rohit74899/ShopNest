import React from "react";
import styled from "styled-components";
import Sort from "./components/Sort";
import FilterSection from "./components/FilterSection"
import ProductList from "./components/ProductList"
import {useContextFilter} from "./context/Filter_context"
const Products = () => {
  const {filter_Products}=useContextFilter();
  console.log(filter_Products);
  
  
  return (
   
   <Wrapper>
    <div className="container grid grid-filter-column">

      {/* First column */}
      <div>
        <FilterSection/>
        Filtersection
      </div>
      
      {/* Second column */}
      <section className="product-view--sort">
        <div className="sort-filter">
          <Sort/>
          sort
        </div>

      <div className="main-products">
        <ProductList/>
        productList
      </div>
      </section>
    </div>
   </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
    //0.2fr means 20/100 window size to left side column and remaining to right side
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
