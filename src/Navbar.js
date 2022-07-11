import styled from "styled-components";
import Burger from './Burger';

const Nav = styled.div `
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  background-color: #000;
  color: #fff;

  .logo {
    text-transform: uppercase;
    transform: scale(1, .5);
  }

  .nav-items {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      margin: 0px 20px;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        height: 100px;
        transition: all .3s ease-in;

        &:hover {
          color: red;
          border-bottom: 4px solid #fff;
        }
      }

    }
  }

  .wallet button {
    padding: 12px 25px;
    background-color: #000;
    border: 1.5px solid #fff;
    border-radius: 5px;
    color: #fff;
    font-size: 1rem;
    transition: all .3s ease-in;

    &:hover {
      color: red;
      border-color: red;
      cursor: pointer;
    }
  }

  @media (max-width: 900px) {
    .nav-items {
      display: none;
    }

    .wallet button {
      display: none;
    }
  }

  @media (max-width: 400px) {

    .logo {
      font-size: .6rem;
      padding: 20px 0px;
    }

    .nav-items {
      display: none;
    }

    .wallet button {
      font-size: .6rem;
      display: none;
    }
  }
`;

export default function Navbar() {

  const navItems = [
    {link: '#', name:"Check Token"},
    {link: '#', name:"Avatars"},
    {link: '#', name:"Auction"},
    {link: '#', name:"Tokenomics"},
    {link: '#', name:"FAQ"},
    {link: '#', name:"About"},
    {link: '#', name:"Collection"},
    {link: '#', name:"Physicals"},
  ]
  
  return(
    <>
      <Nav>
        <div className="logo">
          <h1>Huxley</h1>
        </div>
        <div className="nav-items">
          {navItems.map((item) => {
            return (
              <ul>
                <li key={item.link}>
                  <a href="https://google.com">{item.name}</a>
                </li>
              </ul>
            )
          })}
        </div>
        <div className="wallet">
          <button>Connect Wallet</button>
        </div>
        <Burger />
      </Nav>
    </>
  );
}

