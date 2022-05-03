import React from "react";
import styled from "styled-components";

const KylieVideo = require("../assets/videos/kylieBaby.mp4");
const Brush2 = require("../assets/images/kindpng_3346896.png");
const urlDoJson = "https://ethique.co.uk/products/heali-kiwi-shampoo-for-dandruff-or-scalp-problems?geo_redirection_stay=1&geo_currency=GBP";

const Video = styled.video`
  width: 60%;
`;

const StyledDiv = styled.div`
  background-image: url(${Brush2});
  background-repeat: no-repeat;
  background-size: contain;
  height: -webkit-fill-available;
  width: -webkit-fill-available;
  height: -moz-available;
  width: -moz-available;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WelcomeText = styled.h1`
  color: white;
  text-align: center;
  font-size: 20px;
  margin-bottom: 12px;
  font-family: 'Exo', sans-serif;

  &>.bubbles {
    font-family: 'Chicle', cursive;
    letter-spacing: 1px;
  }
`;

const Home = () => {
    return (<StyledDiv>
            <WelcomeText>
                Welcome to the <span className="bubbles">Bubbliest</span> store! 🫧
            </WelcomeText>
            <WelcomeText>
                Here you'll find your next favorite personal care products!<br/>
                Go ahead and explore our 2 main categories: hair and shower, or see all of our products.<br/>
            </WelcomeText>
            <Video loop autoPlay muted={true}>
                <source
                    src={KylieVideo}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </Video>
        </StyledDiv>
    );
}

export default Home;