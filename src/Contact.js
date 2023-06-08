import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
  <Wrapper>
    <h2 className="common-heading">Contact page</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.6199102291775!2d73.8471476!3d18.4555589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eacbe78b2791%3A0x69c1469bcd50bc29!2sAditya%20Hostel(%20Purvansh%20Sadan%20)!5e0!3m2!1sen!2sin!4v1686053362972!5m2!1sen!2sin" width="100%" height="450" style={{border:0}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> 

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/mlekywwr" method="POST" className="contact-inputs">
          <input type="text" placeholder="username" name="username" required
          autoComplete="off" />

          <input type="email" placeholder="email" name="Email" required
          autoComplete="off" />

          <textarea type="Message" placeholder="Enter your Message" name="Message" cols='30' rows='10' required autoComplete="off" />

          <input type="submit" value="send"/>

        </form>
      </div>
    </div>
  </Wrapper>
  );
};

export default Contact;
