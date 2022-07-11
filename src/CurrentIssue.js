import React from 'react';
import styled from 'styled-components';
// import first from './img/issues/issue1.jpg';
// import second from './img/issues/issue2.jpg';
// import third from './img/issues/issue3.jpg';
import fourth from './img/issues/issue4.jpg';
// import fifth from './img/issues/issue5.jpg';
// import sixth from './img/issues/issue6.jpg';

const Current = styled.div `
  background-color: #000;
  display: flex;
  justify-content: space-between;
  padding: 30px 200px;
  width: 100%;

  .current-issue img {
    height: 500px;
    width: 370px;
  }
  .issue-info {
    color: #fff;
    width: 50%;

    .top {
      p {
        color: gray;
        text-transform: uppercase;
        font-weight: 800;
      }

      h1 {
        margin: 10px 0px 20px;

        span{
          text-transform: uppercase;          
        }
      }

      h4 {
        border-bottom: 1px solid gray;
        padding-bottom: 20px; 
      }
    }

    .middle {
      h5 {
        color: gray;

        &:first-child {
          margin: 20px 0px; 
          text-transform: uppercase;
        }

        &:nth-child(2) {
          margin: 40px 0px 0px;
          text-transform: uppercase;
        }

        &:last-child {
          padding-bottom: 40px;
          border-bottom: 1px solid gray;
        }
      }

      button {
        padding: 4px 60px;
        margin: 10px 0px;
        border-radius: 25px;
        text-transform: uppercase;
      }
    }

    .bottom {
      h5 {
        text-transform: uppercase;
        color: gray;
        
      }

      h2 {
        text-transform: uppercase;
      }
      select {
        background-color: #000;
        color: #fff;
        margin-top: 20px; 
        padding: 20px;
        outline: 1px solid gray;
        border-radius: 5px;

        &:hover {
          cursor: pointer;
        }

        option {

          &:hover {
            color: red;
          }
        }
      }
    }
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0px;

    .current-issue {
      display: grid;
      align-items: center;
      justify-items: center;

      img {
        width: 80%;
        height: 80%;
      }
    }

    .issue-info {
      width: 90%;

      .top {
        h1 {
          font-size: 1.4rem;
        }

        h4 {
          font-size: .9rem;
          font-weight: 400;
          padding: 0px;
        }
      }
    }
  }

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    padding: 0px;

    .current-issue {
      display: flex;
      justify-content: center;
    }

    .issue-info {
      width: 100%;
      padding: 20px;

      .top {
        
        h1 {
          transform: scale(1, .7);
          margin: 5px 0px;
        }

        h4 {
          font-weight: 400;
          font-size: .8rem;
        }
      }
    }
      
  }

`;

export default function CurrentIssue() {
  return (
    <Current>
        <div className='current-issue'>
          <img src={fourth} alt='fourth issue' />
        </div>
        <div className='issue-info'>
          <div className='top'>
            <p>Issue #4</p>
            <h1><span>Huxley</span> Comic</h1>
            <h4>A dangerous encounter with a deadly 'Phantom' leaves our heroes in a tailspin. Huxley meets an unexpected guide.</h4>
          </div>
          <div className='middle'>
            <h5>Public Minting Open</h5>
            <h5>Your Wallet Eligibility</h5>
            <button>Public Mint</button>
            <h5>All wallets eligible to mint</h5>
          </div>
          <div className='bottom'>
            <h5>Price</h5>
            <h2>0.1 Eth</h2>
            <select className='quantity'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
          </div>
        </div>
    </Current>
  )
}
