import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
import { FaDiscord, FaInstagram } from 'react-icons/fa';
function Footer() {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
            <div>
                <h3>Ready to get started</h3>
                <h3>Ready to get started</h3>
            </div>
            <div>
                <Button>
                    <NavLink to="/contact">
                        Get started
                    </NavLink>
                </Button>
            </div>
        </div>
      </section>
      {/* Main footer */}
      <footer>
        <div className='container grid grid-four-column'>
            <div className="footer-about">
                <h3>Rohit Lande</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="footer-subscribe">
                <h3>subscribe to get important updated</h3>
                <form action="">
                    <input type="email" placeholder='your email'/>

                </form>
            </div>
            <div className="footer-social">
                <h3>Follow us</h3>
                <div className="footer-social--icons">
                    <div>
                        <FaDiscord className='icons'/>
                    </div>
                    <div>
                        <FaInstagram className='icons'/>
                    </div>
                    
                </div>
            </div>
            <div className="footer-contact">
                <h3>Call Us</h3>
                <h3>+91 9423549958</h3>
            </div>
        </div>
        {/* Bottom footer */}

        <div className="footer-bottom--section">
            <hr/>
            <div className="container grid grid-two-column">
                <p style={{textAlign:"center"}}>
                    @{new Date().getFullYear()} RohitStore. All Rights Reserved
                </p>
                <div style={{textAlign:"center"}}>
                    <p >Privacy policy</p>
                    <p>Terms and Conditions</p>
                </div>
            </div>
        </div>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 10rem 0 1rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.bg};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.bg};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.bg};

        .icons {
          color: ${({ theme }) => theme.colors.bg};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;
export default Footer
