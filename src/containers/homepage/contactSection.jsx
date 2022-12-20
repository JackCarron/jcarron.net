import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";
import { Input } from "../../components/input"
import { theme } from "../../theme.js";
// import { axios } from 'axios';

const ContactContainer = styled(Element)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1.8em;
`;

const ContactForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;
;

const Button = styled.button`
  font-size: 21px;
  text-align: center;
  background-color: ${theme.background};
  color: ${theme.primary};
  line-height: 1.4;
  width: 10rem;
  margin: 10px;
  border-color: ${theme.secondary};
  border-radius: 7.5%;
  @media screen and (max-width: 480px) {
    width: 90%;`

export class ContactSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress : '',
      subject : '',
      body : '',
      optIn: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  formSubmitted = false; 

  handleInputChange = (e) => {
    const target = e.target.name === 'optIn' ? {name: 'optIn', value: !this.state.optIn} : e.target;
    console.log(target);

        this.setState({
          [target.name]: target.value
        });
  };

  handleSubmit(event) {         
    fetch('https://l83jz60mmh.execute-api.us-east-1.amazonaws.com/prod/proxy/emails',
      {method:"POST",
      body: JSON.stringify({
        emailAddress: this.state.emailAddress,
        subject: this.state.subject,
        message: this.state.body,
        optIn: this.state.optIn
      })})
      .then(res => res.json())
      .then(
        (result) => {

          this.setState({
            emailAddress: '',
            subject: '',
            body: '',
            optIn: false
        });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            emailAddress: '',
            subject: '',
            body: ''
          });
        }
      )   
    alert('Thank you for submitting your message.');
  }

  render() {
    return (
      <ContactContainer name="contactSection">      
      <SectionTitle style={{"alignItems":"center"}}>Contact Jack Carron</SectionTitle>
        <ContactForm style={{'maxWidth':'500px'}} >
          <div class="formFields">
          <Input label="Email Address:" 
                  type="email" 
                  name="emailAddress" 
                  value={this.state.emailAddress} 
                  formSubmitted={this.formSubmitted} 
                  onChange={this.handleInputChange}></Input>
          <Input label="Subject:" type="text" name="subject" value={this.state.subject} onChange={this.handleInputChange}></Input>
          <Input label="Message Body:" type="textArea" rows="5" name="body" value={this.state.body} onChange={this.handleInputChange}></Input>
          <Input type="checkbox" name="optIn" label="By checking the box below, I am consenting to receiving SMS messages from jcarron.net" onChange={this.handleInputChange}></Input>
          <Button type="button" onClick={this.handleSubmit}>Submit</Button>
          </div>
        </ContactForm>
      </ContactContainer>
    );
}
}
