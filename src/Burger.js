import styled from "styled-components";


const BurgerMenu = styled.div `
  color: red;
  width: 100%;
  background-color: yellow;
  position: absolute;
  left: 0;
  display: none;
`;

const menu = [
  {link: '#', name:"Check Token"},
  {link: '#', name:"Avatars"},
  {link: '#', name:"Auction"},
  {link: '#', name:"Tokenomics"},
  {link: '#', name:"FAQ"},
  {link: '#', name:"About"},
  {link: '#', name:"Collection"},
  {link: '#', name:"Physicals"},
]
export default function Burger() {
  return(
    <>
      <BurgerMenu>
        <div className="burger-lines">
          <div className="burgerLine"></div>
          <div className="burgerLine"></div>
          <div className="bugerLine"></div>
        </div>
        <div className="mobileMenu">
          {menu.map((item) => {
            return (
              <ul >
                <li key={item.link}>
                  <a href="https://google.com">{item.name}</a></li>
              </ul>
            );
          })}
        </div>
      </BurgerMenu>
      
    </>
  );
} 