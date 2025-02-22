import React from 'react';
import { Icon, Label, Segment, Grid, Container, Header, Form, Input, TextArea, Button } from 'semantic-ui-react';

import GoogleApiWrapper from './GoogleMapApi.js';
import emailjs from 'emailjs-com';

const divStyle = {
  margin: '30px 80px 50px 40px'
}

const ContainerStyle = {
  textAlign: 'right',
  marginBottom: '40px',
  fontSize: '15px',
  fontWeight: '300',
  color: 'darkgrey'
}

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('email sent!');

    emailjs.sendForm('service_7gaxlpa', 'template_profileApp', e.target, 'user_3r6pdmx73cHRxSZ4brNWM')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div name='Contact' style={divStyle}>
      <Header style={{ fontSize: '30px', marginBottom: '5px' }} dividing>CONTACT</Header>
      {/*Google Map Api*/}
      <Container style={ContainerStyle} fluid>
        Get in Touch
        </Container>
      <Grid doubling centered>
        <Grid.Row style={{ marginBottom: '10px' }}>
          <Grid.Column>
            <Container style={{ position: 'relative', height: '150px', width: '100%' }}>
              <GoogleApiWrapper />
            </Container>
          </Grid.Column>
        </Grid.Row>
        {/*Contact Icon*/}
        <Grid.Row style={{ marginBottom: '20px' }}>
          <Grid.Column width={4}>
            <Segment textAlign='center'>
              <Icon name='phone' size='big' />
              <h3>647-982-5955</h3>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment textAlign='center'>
              <Icon name='map marker alternate' size='big' />
              <h3>Toronto ON.</h3>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment textAlign='center'>
              <Icon name='mail' size='big' />
              <h3>charles.choi14@gmail.com</h3>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment textAlign='center'>
              <Icon name='find' size='big' />
              <h3>Job Seeker</h3>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        {/*Leave Message Form*/}
        <Segment textAlign='left'>
          <Label color='blue' size='large' ribbon>Leave Message</Label>
          <Grid.Row className='grid-message'>
            <br></br>
            <Grid.Column>
              <Form size='big' onSubmit={sendEmail}>
                <Grid verticalAlign='middle' columns={2} centered>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      <Form.Field
                        id='form-input-control-full-name'
                        name='fullName'
                        type='text'
                        control={Input}
                        placeholder='Full name'
                      // onChange={(e) => this.handleChange(e)}
                      />
                      <Form.Field
                        id='form-input-control-email'
                        name='email'
                        type='email'
                        control={Input}
                        placeholder='Email Address'
                      // onChange={(e) => this.handleChange(e)}
                      />
                      <Form.Field
                        id='form-input-control-subject'
                        name='subject'
                        type='text'
                        control={Input}
                        placeholder='Subject'
                      // onChange={(e) => this.handleChange(e)}
                      />
                    </Grid.Column>

                    <Grid.Column width={8}>
                      <Form.Field
                        id='form-textarea-control-opinion'
                        name='message'
                        type='text'
                        control={TextArea}
                        placeholder='Message'
                        style={{ height: '180px' }}
                      // onChange={(e) => this.handleChange(e)}
                      />
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column>
                      <Button type='submit' color='blue' size='large' fluid>Send Message</Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Segment>
      </Grid>
    </div>
  );
}

export default Contact;