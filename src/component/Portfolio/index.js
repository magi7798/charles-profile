import React from 'react';
import { Header, Container, Item, Label } from 'semantic-ui-react';

const divStyle = {
  margin: '30px 80px 50px 40px'
};

const ContainerStyle = {
  textAlign: 'right', 
  marginBottom: '40px',
  fontSize: '15px',
  fontWeight: '300',
  color: 'darkgrey'
};

export const Portfolio = () => {
  return (
    <div name='Portfolio' style={divStyle}>
      <Header style={{ fontSize: '30px', marginBottom: '5px' }} dividing>PORTFOLIO</Header>
      <Container style={ContainerStyle} fluid>
        My Works
      </Container>
      <Item.Group>
        <Item>
          <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          <Item.Content>
            <Item.Header as='a' href=''>VIRIFE</Item.Header>
            <Item.Meta>
              <span className='cinema'>Virtual Life Simulator</span>
            </Item.Meta>
            <Item.Description>
              Enjoy your virtual shopping with daily provided pension.<br />
              Design your virtual space with real items and purchase the itmes in real.<br />
              Promote your products though the virtual shopping and attract your customers to visit your website.
            </Item.Description>
            <p></p>
            <Item.Header>Technology</Item.Header>
            <Item.Extra>
              <Label icon='html5' content='HTML5' />
              <Label icon='css3 alternate' content='CSS3' />
              <Label icon='js square' content='Javascript' />
              <Label icon='react' content='React' />
              <Label icon='node js' content='Node.js' />
              <Label icon='database' content='Mongoose' />
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          <Item.Content>
            <Item.Header as='a' href=''>PROJECT TITLE</Item.Header>
            <Item.Meta>
              <span className='cinema'>Union Square 14</span>
            </Item.Meta>
            <Item.Description>
              Project Example 1 Description
            </Item.Description>
            <p></p>
            <Item.Header>Technology</Item.Header>
            <Item.Extra>
              <Label icon='html5' content='HTML5' />
              <Label icon='css3 alternate' content='CSS3' />
              <Label icon='js square' content='Javascript' />
              <Label icon='react' content='React' />
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          <Item.Content>
            <Item.Header as='a' href=''>PROJECT TITLE</Item.Header>
            <Item.Meta>
              <span className='cinema'>Union Square 14</span>
            </Item.Meta>
            <Item.Description>
              Project Example 1 Description
            </Item.Description>
            <p></p>
            <Item.Header>Technology</Item.Header>
            <Item.Extra>
              <Label icon='html5' content='HTML5' />
              <Label icon='css3 alternate' content='CSS3' />
              <Label icon='js square' content='Javascript' />
              <Label icon='react' content='React' />
              <Label icon='node js' content='Node.js' />
              
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  );
}