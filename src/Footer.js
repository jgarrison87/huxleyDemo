import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.div`
  padding: 50px 100px;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;

  .logo {
    h1 {
      transform: scale(1, .6);
      text-transform: uppercase;
      margin-bottom: 30px;
    }

    p {
      color: gray;

      span {
        color: #fff;
        font-weight: 700;
      }
    }
  }

  .social {
    display: flex;
    flex-direction: column;

    .social-links {
      display: flex;
      margin-bottom: 30px;

      h3 {
        color: gray;
        font-weight: 400;
        padding: 10px 20px;
        transition: all .2s ease-in;

        &:hover {
          color: #fff;
          cursor: pointer;
        }
      }

      i {
        margin: 0px 10px;

        &:hover {
          cursor: pointer;
          color: transparent;
          background: red;
        }
      }
    }

    h2 {
      text-align: center;
      font-weight: 500;
      font-size: 1rem;
    }
  }

  @media (max-width: 900px) {
    .social {
      .social-links {
        align-items: center;
        h3 {
          font-size: .7rem;
          padding: 5px 10px;
        }

        i {
          margin: 10px 10px;
        }
      }
    }
  }

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 20px;
      h1 {
        font-size: 3rem;
        margin-bottom: 10px;
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterSection>
      <div className='logo'>
        <h1>Huxley</h1>
        <p>Powered by <span>Feature</span></p>
      </div>
      <div className='social'>
        <div className='social-links'>
          <h3>FAQ</h3>
          <h3>Terms of use</h3>
          <h3>Privacy policy</h3>
          <i class="fa-brands fa-twitter-square fa-2x"></i>
          <i class="fa-brands fa-github-square fa-2x"></i>
          <i class="fa-brands fa-discord fa-2x"></i>
        </div>
        <h2>TM & &copy; Huxley LLC All Rights Reserved</h2>
      </div>
    </FooterSection>
  )
}
