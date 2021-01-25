import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";


const ContactLabel = styled.label`
  width: 200px;
  font-size: 21px;
  color: #2f2f2f;
  font-weight: normal;
  line-height: 1.4;
  padding: 5px;
  margin-bottom: 10px;
`;

const ContactInput = styled.input`
  margin: 10px;
  font-size: 21px;
  color: #2f2f2f;
  width: 450px;
  font-weight: normal;
  line-height: 1.4;
  @media screen and (max-width: 480px) {
    width: 98%;
    align-items: center;
`;

const ContactMultiline = styled.textarea`
  margin: 10px;
  font-size: 21px;
  color: #2f2f2f;
  font-weight: normal;
  width: 50rem;

  @media screen and (max-width: 480px) {
    width: 98%;
    align-items: center;
`;



export class Input extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
    return (
    <div style={{"display":"block"}}>
    <div>
    <span>
        <ContactLabel for={this.props.name}>{this.props.label}</ContactLabel>
    </span>
    </div>
    <span>
        {this.props.type !== 'textArea' ? 
        <ContactInput type={this.props.type} name={this.props.name} onChange={this.props.onChange} value={this.props.value} />
        :
        <ContactMultiline name={this.props.name} rows={this.props.rows} onChange={this.props.onChange} value={this.props.value}/>
        }        
    </span>
    </div>
  );}
}
