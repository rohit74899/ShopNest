import React from 'react'

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from 'styled-components';


const Star=({stars,reviews})=> {
    // array.from is static method which creates a new shallow copied array instance from an iterable or array like object 
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;// it is basically to show half star
        //eg. 0.4 then to decide wheather give half star or not
        debugger;
        return (
          <span key={index}>
            {stars >= index + 1 ? (
              <FaStar className="icon" />
            ) : stars >= number ? (
              <FaStarHalfAlt className="icon" />
            ) : (
              <AiOutlineStar className="icon" />
            )}
          </span>
        );
      });
    
      return (
        <Wrapper>
          <div className="icon-style">
            {ratingStar}
            <p>({reviews} customer reviews)</p>
          </div>
        </Wrapper>
      );
}

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;
export default Star;

