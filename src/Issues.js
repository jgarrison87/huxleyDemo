import React from 'react';
import styled from 'styled-components';
import first from './img/issues/issue1.jpg';
import second from './img/issues/issue2.jpg';
import third from './img/issues/issue3.jpg';
import fourth from './img/issues/issue4.jpg';
import fifth from './img/issues/issue5.jpg';
import sixth from './img/issues/issue6.jpg';

const IssueGrid = styled.div `
  background-color: #000;
  padding: 50px 100px;
  display: flex;
  justify-content: space-between;

.flex-item {
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;

  img{
    width: 100%;
    height: 250px;
    transition: all .3s ease-in;

    &:hover {
      opacity: .5;
      cursor: pointer;
    }
  }

  h1 {
    padding-top: 50px;
    font-size: 1.2rem;
    transform: scale(1, .7);
  }
  
}

@media (max-width: 900px) {
  padding: 10px;

  .flex-item {
    padding: 5px;

    img {
      width: 100%;
      height: 80%;
    }

    h1 {
      padding-top: 10px;
      font-size: .9rem;
    }

    p {
      font-size: .9rem;
    }
  }
}

@media (max-width: 400px) {
  display: none;
}
`;

export default function Issues() {
  return (
    <IssueGrid className='flex'>   
      <div className='flex-item'>
        <img src={first} alt="first issue" />
        <h1>Issue 1</h1>
        <p>Edition of 10,000</p>
      </div>
      <div className='flex-item'>
        <img src={second} alt="first issue" />
        <h1>Issue 2</h1>
        <p>Edition of 10,000</p>
      </div>
      <div className='flex-item'>
        <img src={third} alt="first issue" />
        <h1>Issue 3</h1>
        <p>Edition of 10,000</p>
      </div>
      <div className='flex-item'>
        <img src={fourth} alt="first issue" />
        <h1>Issue 4</h1>
        <p>Edition of 10,000</p>
      </div>
      <div className='flex-item'>
        <img src={fifth} alt="first issue" />
        <h1>Issue 5</h1>
        <p>Edition of 10,000</p>
      </div>
      <div className='flex-item'>
        <img src={sixth} alt="first issue" />
        <h1>Issue 6</h1>
        <p>Edition of 10,000</p>
      </div>
    </IssueGrid>
  )
}
