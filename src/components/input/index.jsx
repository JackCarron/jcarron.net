import React from "react";
import "./Input.css";

export class Input extends React.Component {
  render() {
    return (
      <div className="input-container">
        {this.props.type !== "checkbox" && (
          <label htmlFor={this.props.name} className="contact-label">
            {this.props.label}
          </label>
        )}
        {this.props.type === "checkbox" ? (
          <div className="checkbox-container">
            <input
              type="checkbox"
              name={this.props.name}
              onChange={this.props.onChange}
              checked={this.props.value}
              className="contact-checkbox"
            />
            <label htmlFor={this.props.name} className="checkbox-label">
              {this.props.label}
            </label>
          </div>
        ) : this.props.type !== "textArea" ? (
          <input
            type={this.props.type}
            name={this.props.name}
            onChange={this.props.onChange}
            value={this.props.value}
            className="contact-input"
          />
        ) : (
          <textarea
            name={this.props.name}
            rows={this.props.rows}
            onChange={this.props.onChange}
            value={this.props.value}
            className="contact-multiline"
          />
        )}
      </div>
    );
  }
}
