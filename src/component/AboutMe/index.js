import React from 'react';
import { Container, Header, Grid, Item, List, Label, Icon } from 'semantic-ui-react';

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

// const AboutMeStyle = {
//   divStyle,
//   ContainerStyle
// };

const Kijiji_URL = 'https://www.kijiji.ca/v-tutor-language-lessons/city-of-toronto/engineering-economics-tutoring/1462589333?enableSearchNavigationFlag=true';

export const AboutMe = () => {
  return (
    <div name='AboutMe' style={divStyle}>
      <Header style={{ fontSize: '30px', marginBottom: '5px' }} dividing>ABOUT ME</Header>
      <Container style={ContainerStyle} fluid>
        Fast Learner, Curiositarian, Computer Lover
      </Container>
      <Grid>
        <Grid.Row columns={2} style={{ marginBottom: '30px' }}>
          {/*Job title and Summary*/}
          <Grid.Column>
            <div>
              <Container fluid>
                <Header style={{ fontSize: '22px' }}>
                  <Icon name='paw' style={{ fontSize: '20px' }} />
                  <Header.Content>Junior Front-End Developer</Header.Content>
                </Header>
                <p style={{ fontSize: '15px' }}>
                  Having experience in web deveolopment through personal projects(MERN stack) in HTML5/CSS3, JavaScript, React, Redux for frontend and Node.js, Express, MongoDB, Mongoose for backend.<br />
                  Graduated from Electronic Engineering Technician - Computer program at Seneca College with the knowledge in computer programing, hardware and network system.<br />
                  Being interested in Mechatronics, Machine learning, Big Data, Artificial Intelligent and IoT.
                </p>
              </Container>
            </div>
          </Grid.Column>
          {/*Right Side - private info*/}
          <Grid.Column>
            <div>
              <Header style={{ fontSize: '22px' }} />
              <List>
                <List.Item style={{ padding: '5px' }}>
                  <Label basic color='blue' horizontal size='large'>Residence</Label>
                  Toronto ON. Canada
                </List.Item>
                <List.Item style={{ padding: '5px' }}>
                  <Label basic color='blue' horizontal size='large'>Address</Label>
                  83 Redpath Ave.
                </List.Item>
                <List.Item style={{ padding: '5px' }}>
                  <Label basic color='blue' horizontal size='large'>E-mail</Label>
                  <a href='mailto: charles.choi7798@gmail.com'>charles.choi14@gmail.com</a>
                </List.Item>
                <List.Item style={{ padding: '5px' }}>
                  <Label basic color='blue' horizontal size='large'>Phone</Label>
                  647-982-5955
                </List.Item>
              </List>
            </div>
          </Grid.Column>
        </Grid.Row>
        {/*My interesting*/}
        <Grid.Row>
          <Grid.Column>
            <div>
              <Container fluid>
                <Header style={{ fontSize: '22px' }}>
                  <Icon name='paw' style={{ fontSize: '20px' }} />
                  <Header.Content>What I Do</Header.Content>
                </Header>
                <Grid columns={2}>
                  <Grid.Row>
                    <Grid.Column>
                      <Item.Group>
                        <Item>
                          <Item.Image as='a' href={Kijiji_URL} target='blank' size='mini' src='./images/Kijiji_Social_Logo.png' />
                          <Item.Content>
                            <Item.Header as='a' href={Kijiji_URL} target='blank'>
                              Engineering Economics
                            </Item.Header>
                            <Item.Meta>
                              11-CS-1 Engineering Economics Tutoring
                            </Item.Meta>
                            <Item.Description>
                              Basic concepts of engineering economics:
                              Types and applications of Engineering Economic Decisions, Capital, cash flow, and the time value of money concepts
                            </Item.Description>
                            <Item.Extra>
                              Professional Engineering Exam
                            </Item.Extra>
                          </Item.Content>
                        </Item>
                      </Item.Group>
                    </Grid.Column>
                    <Grid.Column>
                      <Item.Group>
                        <Item>
                          <Item.Image size='mini' src='./images/Kumdo.png' />
                          <Item.Content>
                            <Item.Header as='a'>Kumdo</Item.Header>
                            <Item.Meta>Korean Traditional Kendo</Item.Meta>
                            <Item.Description>
                              Blackbelt holder with over two years training.
                            </Item.Description>
                            <Item.Extra>Workout, Meditation, Martial art</Item.Extra>
                          </Item.Content>
                        </Item>
                      </Item.Group>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </div>
          </Grid.Column>
        </Grid.Row>
        {/*My Membership*/}
        <Grid.Row>
          <Grid.Column>
            <div>
              <Container fluid>
                <Header style={{ fontSize: '22px' }}>
                  <Icon name='paw' style={{ fontSize: '20px' }} />
                  <Header.Content>Membership</Header.Content>
                </Header>
                <Grid columns={2}>
                  <Grid.Row>
                    <Grid.Column>
                      <Item.Group>
                        <Item>
                          <Item.Image as='a' href='http://peo.on.ca/' target='blank' size='mini' src='./images/PEO_logo.jpg' />
                          <Item.Content>
                            <Item.Header as='a' href='http://peo.on.ca/' target='blank'>
                              Chemical Engineer-in-Training(EIT)
                            </Item.Header>
                            <Item.Meta>Professional Engineers Ontario(PEO)</Item.Meta>
                            <Item.Description>
                              I am a Chemical EIT registered with PEO since 2018,<br />eligible to become a P.Eng with over 4 years professional experience.
                            </Item.Description>
                            <Item.Extra>Membership Number: 100226805</Item.Extra>
                          </Item.Content>
                        </Item>
                      </Item.Group>
                    </Grid.Column>
                    <Grid.Column>
                      <Item.Group>
                        <Item>
                          <Item.Image as='a' href='https://www.ospe.on.ca/home' target='blank' size='mini' src='./images/OSPE_logo.png' />
                          <Item.Content>
                            <Item.Header as='a' href='https://www.ospe.on.ca/home' target='blank'>
                              OSPE Intern
                            </Item.Header>
                            <Item.Meta>Ontario Society of Professional Engineers</Item.Meta>
                            <Item.Description>
                              I am an Intern registered with OSPE since 2018.
                            </Item.Description>
                            <Item.Extra>Membership Number: 40013333</Item.Extra>
                          </Item.Content>
                        </Item>
                      </Item.Group>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}