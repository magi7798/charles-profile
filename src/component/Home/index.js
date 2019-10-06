import React from 'react';
import { Header, Image, Icon, Button } from 'semantic-ui-react';

const Linkedin_URL = 'https://www.linkedin.com/in/charles-yeon-chul-choi-8a114074/';
const Facebook_URL = 'https://www.facebook.com/charles.choi.12914?ref=bookmarks';

export const Home = () => {
  return (
    <div name='Home' style={{ position: 'relative' }}>
      {/* Main Homepage - Backgroun Image */}
      <Image src='./images/Homebackground.jpg' alt='Background_Pic' width='100%' />
      {/* Main Homepate - text */}
      <div style={{ position: 'absolute', top: '32%', left: '35%' }}>
        <Header as='h1'>CHARLES YEON CHUL CHOI</Header>
        <Header as='h3' textAlign='right'>Junior Front-End Developer</Header>
        {/* My SNS */}
        <Header>
          <Icon name='paw' size='big' />
          <Header.Content>
            <a href={Linkedin_URL} target='blank'>
              <Button color='linkedin'>
                <Icon name='linkedin' />Linkedin
              </Button>
            </a>
            <a href={Facebook_URL} target='blank'>
              <Button color='facebook'>
                <Icon name='facebook' />Facebook
              </Button>
            </a>
          </Header.Content>
        </Header>
      </div>
    </div>
  );
}