import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { refreshForm } from "../actions/formActions";
import Button from "./styled_components/Button";

const FormSend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 3.2rem;
  color: rgb(255, 0, 0);
  background: rgba(95, 95, 95, 0.5);
  width: 95%;
  border-radius: 10px;
  height: 100%;
`;

class FormNotification extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.refreshForm();
  }

  render() {
    return (
      <FormSend>
        <div>
          <p style={{ marginBottom: "0.5rem" }}>
            {" "}
            Nachricht wurde gesendet, vielen Dank!
          </p>
        </div>
        <Button buttonBack onClick={this.handleClick}>
          <span>Zurück zur Kontaktform</span>
        </Button>
      </FormSend>
    );
  }
}

const mapStateToProps = state => ({
  form: state.form
});

export default connect(
  mapStateToProps,
  { refreshForm }
)(FormNotification);
