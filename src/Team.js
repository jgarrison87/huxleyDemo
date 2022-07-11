import React from 'react'
import styled from 'styled-components';
// import bgImage from './img/bg.jpg';
import team1 from './img/team/team1.jpg';
import team2 from './img/team/team2.jpg';
import team3 from './img/team/team3.jpg';
import team4 from './img/team/team4.jpg';

const TeamList = styled.div `
  ${'' /* background: #000; */}

  .teamTitle {
    text-align: center;
    color: #fff;
    padding: 20px 0px;
  }

  .flex {
    display: flex;
    justify-content: center;
    padding: 35px 0px;


    .flex-item {
      background: rgba(0,0,0,.5);
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 300px;
      padding: 10px;
      margin: 0px 10px;
      color: #fff;
      position: relative;
      transition: all .2s ease-in;

      &:hover {
        box-shadow: 0px 0px 20px red;
      }

      img {
        margin-bottom: 10px; 
        width: 280px;
        height: 330px;
      }

      h1 {
        margin: 10px 0px;
        transform: scale(1, .6)
      }

      h3 {
        font-size: 1rem;
        font-weight: 200;
        margin-bottom: 50px;
      }

      a {
        margin: 10px 0px;
        position: absolute;
        bottom: 0;

        i {
          color: #1DA1F2;
        }
      }
    }
  }

  @media (max-width: 900px) {
    .flex {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      ${'' /* align-items: center; */}
      justify-items: center;
      grid-gap: 50px;
    }
    
  }

  @media (max-width: 600px) {
    .flex {
    display: grid;
    grid-template-columns: 1fr;
    }
  }

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .flex {
      flex-direction: column;

      .flex-item {
          margin: 20px 0px;
      }
    }

  }
  
`;

const teamMemebers = [
   {
    index: 1,
    img: team1,
    title: "Ceo + Founder of Feature", 
    name: "Steven Ilous", 
    bio: "A visionary entrepreneur and creative professional with over 20 years of feature film, video game, and web experience, Steven has worked closely with some of the greatest talents in entertainment. Inspired by Steven’s dream to build a better system for creators, Feature is building a new platform for buying and selling intellectual property.",
    twitterLink: "https://twitter.com/stevenilous",
    twitterHandle: "@stevenilous"
   },
   {
    index: 2,
    img: team2,
    title: "Lead Developer", 
    name: "Seb Brocher", 
    bio: "Seb is a technology entrepreneur and developer with a passion and talent for the arts. Seb developed CryptoArte, one of the first generative art NFT projects on the Ethereum network, and is the founder and CEO of Chimichurri, a software development company.",
    twitterLink: "https://twitter.com/CryptoArte",
    twitterHandle: "@CryptoArte"
   },
   { 
    index: 3,
    img: team3,
    title: "Marketing Director", 
    name: "Oliver Permut", 
    bio: "A multi-disciplined creative with experience in the music, entertainment, hospitality and tech industries, Oliver brings unique insight and passion to each project. He has lead social campaigns for the world’s premier electronic music festival, made commercials for Vice Media in Berlin, and spearheaded hospitality start-up initiatives in Miami.",
    twitterLink: "https://twitter.com/oliverpermut",
    twitterHandle: "@oliverpermut"
   },
   {
    index: 4,
    img: team4,
    title: "Head of Community", 
    name: "Kasandra Vegas", 
    bio: "Educator. Community builder. Co-Founder of NFTs.Tips. In the rapidly emerging NFT space, Kas bridges the gap between art, tech, culture and provenance, and brings an enthusiastic voice to new projects, ventures, and creators.",
    twitterLink: "https://twitter.com/kas__vegas",
    twitterHandle: "@kas__vegas"
   }
]

export default function Team() {
  return (
    <TeamList>
      <h1 className='teamTitle'>Team</h1>
      <div className='flex'>
        
          {teamMemebers.map((member) => {
            return(
              <div className='flex-item' key={member.index}>
                <img src={member.img} alt="team member"/>
                <p>{member.title}</p>
                <h1>{member.name}</h1>
                <h3>{member.bio}</h3>
                <a href={member.twitterLink}><i class="fa-brands fa-twitter"></i>{member.twitterHandle}</a>
              </div>
            )
          })}
        
      </div>
    </TeamList>
  )
}
