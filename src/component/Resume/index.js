import React from 'react';
import { 
  Progress, Container, Header, Grid, Button, Segment, Divider, Icon, Label 
} from 'semantic-ui-react';

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

const ProgressStyle = {
  marginTop: '3px',
  width: '80%'
};

export const Resume = () => {

  const onClickHandler = (e) => {
    console.log('download function trigged!!!')
    const downLink = document.createElement('a');
    downLink.href = './resume/CHARLES YEON CHUL CHOI_Resume.pdf';
    downLink.download = 'CHARLES YEON CHUL CHOI_Resume';
    downLink.style.display = 'none';
    
    document.body.appendChild(downLink);

    downLink.click();

    document.body.removeChild(downLink);

    console.log('download function done!!!')
  };

  return (
    <div name='Resume' style={divStyle}>
      <Header style={{ fontSize: '30px', marginBottom: '5px' }} dividing>RESUME</Header>
      <Container style={ContainerStyle} fluid>
        Programmer-in-Training, EIT registered with PEO
      </Container>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={10}>
            <div style={{ marginBottom: '40px' }}>
              <Container fluid>
                <Header style={{ fontSize: '22px' }}>
                  <Icon name='paw' style={{ fontSize: '20px' }} />
                  <Header.Content>Education</Header.Content>
                </Header>
                <Segment basic>
                  <Grid container columns={2}>
                    <Grid.Column textAlign='right' verticalAlign='middle' width={4}>
                      <Header as='h4'>2010 - 2013</Header>
                      <Header as='a' href='https://www.senecacollege.ca/home.html' target='blank'>
                        Seneca College
                      </Header>
                    </Grid.Column>

                    <Segment basic>
                      <Divider vertical >
                        <Icon name='dot circle outline' color='blue' disabled />
                      </Divider>
                    </Segment>

                    <Grid.Column width={11}>
                      <Header as='a' href='https://www.senecacollege.ca/programs/fulltime/EEN.html' target='blank'>
                        Electronics Engineering Technician - Computer Diploma
                      </Header>
                      <ul>
                        <li>Graduate with honours (GPA 3.9 out of 4.0)</li>
                        <li>Winner of the Game Programming Championship Competition</li>
                        <li>Experienced practical hands-on training in computer hardware, applied Internet technology, system diagnostics, local area network installation and data communication techniques.</li>
                        <li>Learned the fundamentals of digital and analog electronics, combined with a foundation in computer technology.</li>
                        <li>Acquired theoretical knowledge of electronic devices, computer programming and diagnostic techniques.</li>
                      </ul>
                    </Grid.Column>
                  </Grid>
                </Segment>

                <Segment basic>
                  <Grid container columns={2}>
                    <Grid.Column textAlign='right' verticalAlign='middle' width={4}>
                      <Header as='h4'>
                        1997 - 2006
                        <Header.Subheader>(including military service period)</Header.Subheader>
                      </Header>
                      <Header as='a' href='http://www.yu.ac.kr/en/main/index.php' target='blank'>
                        Yeungnam University
                      </Header>
                    </Grid.Column>

                    <Segment basic>
                      <Divider vertical >
                        <Icon name='dot circle outline' color='blue' disabled />
                      </Divider>
                    </Segment>

                    <Grid.Column width={11}>
                      <Header as='a' href='http://www.yu.ac.kr/en/academic/index.php?c=academic_01_c_10' target='blank'>
                        Bachelor Degree of Chemical Engineering
                      </Header>
                      <ul>
                        <li>GPA 3.63 out of 4.5</li>
                        <li>Biological Chemistry, Fluid Mechanics & Thermodynamics, Chemical Reaction Engineering, Heat & Mass Transfer, Transport Phenomena, Chemical Process Control, Chemical Process Analysis and Design</li>
                        <li>Academic Scholarship(Three consecutive semesters)</li>
                      </ul>
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Container>
            </div>
            <div>
              <Container fluid>
                <Header style={{ fontSize: '22px' }}>
                  <Icon name='paw' style={{ fontSize: '20px' }} />
                  <Header.Content>Experience</Header.Content>
                </Header>
                <Segment basic>
                  <Grid container columns={2}>
                    <Grid.Column textAlign='right' verticalAlign='middle' width={4}>
                      <Header as='h4'>
                        2013 - 2019
                      </Header>
                      <Header as='a' href='https://www.woori.ca/' target='blank'>
                        Woori Education & Immigration Group
                      </Header>
                    </Grid.Column>

                    <Segment basic>
                      <Divider vertical>
                        <Icon name='dot circle outline' color='blue' disabled />
                      </Divider>
                    </Segment>

                    <Grid.Column width={11}>
                      <Header as='h3'>
                        Marketing/Administrative & IT Support Specialist
                      </Header>
                      <ul>
                        <li>Managing, deploying and supporting computers, printers, peripherals and software.</li>
                        <li>Troubleshooting and checking network system (routers,modems,wifi connection, VOIP system), computers and peripheral devices.</li>
                        <li>PROJECT - Designed and built the network system for small business focusing on wireless network communication and VOIP.</li>
                      </ul>
                    </Grid.Column>
                  </Grid>
                </Segment>

                <Segment basic>
                  <Grid container columns={2}>
                    <Grid.Column textAlign='right' verticalAlign='middle' width={4}>
                      <Header as='h4'>2011 - 2015</Header>
                      <Header as='a' href='https://www.senecacollege.ca/home.html' target='blank'>
                        Seneca College
                      </Header>
                    </Grid.Column>

                    <Segment basic>
                      <Divider vertical>
                        <Icon name='dot circle outline' color='blue' disabled />
                      </Divider>
                    </Segment>

                    <Grid.Column width={11}>
                      <h3>Web Developer</h3>
                      <ul>
                        <li>Designed the main webpage of the Korean website introducing Seneca College to Korean prospective students using HTML and Photoshop.</li>
                        <li>Updated Seneca College news daily.</li>
                        <li>Promoted the website through SEO.</li>
                      </ul>
                    </Grid.Column>
                  </Grid>
                </Segment>

                <Segment basic>
                  <Grid container columns={2}>
                    <Grid.Column textAlign='right' verticalAlign='middle' width={4}>
                      <Header as='h4'>2006 - 2010</Header>
                      <Header as='a' href='https://www.farmhannong.com/eng/contents/main.asp' target='blank'>
                        Dongbu Fine Chemical
                        <Header.Subheader>(Farm Hannong)</Header.Subheader>
                      </Header>
                    </Grid.Column>

                    <Segment basic>
                      <Divider vertical>
                        <Icon name='dot circle outline' color='blue' disabled />
                      </Divider>
                    </Segment>

                    <Grid.Column width={11}>
                      <h3>Chemical Engineer</h3>
                      <ul>
                        <li>Process Safety Management - PSM, HAZOP, regular site inspections</li>
                        <li>Facility Management - maintained a record of facility using SAP and 	repaired or revamped the existing facilities</li>
                        <li>Project Management - completed the annual overhaul projects under the limited budget, before the deadline of the projects</li>
                      </ul>
                      <p>- ACHIEVEMENT -</p>
                      <ul>
                        <li>Employee of the Year</li>
                        <li>Best Practice Project Award (Wastewater treatment cost reduction project) </li>
                        <li>Six Sigma Green Belt</li>
                      </ul>
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Container>
            </div>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header style={{ fontSize: '22px' }}>
              <Icon name='paw' style={{ fontSize: '20px' }} />
              <Header.Content>Technical Skills</Header.Content>
            </Header>
            <Header as='h4' style={{ border: 'none' }}>
              <Label basic style={{ border: 'none' }}>
                <Icon name='html5' size='large'> HTML5</Icon>
              </Label>
              <Progress percent={30} progress='percent' size='small' color='teal' style={ProgressStyle} />
              <Label basic style={{ border: 'none' }}>
                <Icon name='css3 alternate' size='large'> CSS3</Icon>
              </Label>
              <Progress percent={30} progress='percent' size='small' color='teal' style={ProgressStyle} />
              <Label basic style={{ border: 'none' }}>
                <Icon name='js square' size='large'> Javascript</Icon>
              </Label>
              <Progress percent={30} progress='percent' size='small' color='teal' style={ProgressStyle} />
              <Label basic style={{ border: 'none' }}>
                <Icon name='react' size='large'> React.js</Icon>
              </Label>
              <Progress percent={30} progress='percent' size='small' color='teal' style={ProgressStyle} />
              <Label basic style={{ border: 'none' }}>
                <Icon name='node js' size='large'> Node.js</Icon>
              </Label>
              <Progress percent={30} progress='percent' size='small' color='teal' style={ProgressStyle} />
              <Label basic style={{ border: 'none' }}>
                <Icon name='node js' size='large'> Express.js</Icon>
              </Label>
              <Progress percent={30} progress='percent' size='small' color='teal' style={ProgressStyle} />
              <Label basic style={{ border: 'none' }}>
                <Icon name='database' size='large'> MongoDB</Icon>
              </Label>
              <Progress percent={30} progress='percent' size='small' color='teal' style={ProgressStyle} />
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Button basic color='blue' size='large' onClick={onClickHandler}>Download CV</Button>
        </Grid.Row>
      </Grid>

    </div>
  );
}