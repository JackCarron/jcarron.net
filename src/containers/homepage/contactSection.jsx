import React from "react";
import { Element } from "react-scroll";
import { SectionTitle } from "../../components/sectionTitle";
import { Input } from "../../components/input";
import "./contactSection.css"; // Import the CSS file for this component

export class ContactSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      subject: "",
      body: "",
      optIn: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  formSubmitted = false;

  handleInputChange = (e) => {
    const target =
      e.target.name === "optIn" ? { name: "optIn", value: !this.state.optIn } : e.target;
    console.log(target);

    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit(event) {
    fetch("https://l83jz60mmh.execute-api.us-east-1.amazonaws.com/prod/proxy/emails", {
      method: "POST",
      body: JSON.stringify({
        emailAddress: this.state.emailAddress,
        subject: this.state.subject,
        message: this.state.body,
        optIn: this.state.optIn,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            emailAddress: "",
            subject: "",
            body: "",
            optIn: false,
          });
        },
        (error) => {
          this.setState({
            emailAddress: "",
            subject: "",
            body: "",
          });
        }
      );
    alert("Thank you for submitting your message.");
  }

  render() {
    return (
      <Element className="contact-container" id="contactSection">
        <SectionTitle style={{ alignItems: "center" }}>Contact Jack Carron</SectionTitle>
        <form className="contact-form" style={{ maxWidth: "500px" }}>
          <div className="form-fields">
            <Input
              label="Email Address:"
              type="email"
              name="emailAddress"
              value={this.state.emailAddress}
              formSubmitted={this.formSubmitted}
              onChange={this.handleInputChange}
            ></Input>
            <Input
              label="Subject:"
              type="text"
              name="subject"
              value={this.state.subject}
              onChange={this.handleInputChange}
            ></Input>
            <Input
              label="Message Body:"
              type="textArea"
              rows="5"
              name="body"
              value={this.state.body}
              onChange={this.handleInputChange}
            ></Input>
            <Input
              type="checkbox"
              name="optIn"
              label="By checking the box below, I am consenting to receiving SMS messages from jcarron.net"
              onChange={this.handleInputChange}
            ></Input>
            <div className="submit-button-container">
              <button
                type="button"
                onClick={this.handleSubmit}
                className="submit-button"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </Element>
    );
  }
}
