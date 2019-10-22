import * as React from "react";
import Container from "reactstrap/lib/Container";

import PersonalDetails from "./Components/PersonalDetails";
import "./App.css";
import { IPersonState } from "./State";

class App extends React.Component {
  private defaultPerson: IPersonState = {
    Address1: "",
    Address2: null,
    County: "",
    DateOfBirth: new Date().toISOString().substring(0, 10),
    FirstName: "",
    LastName: "",
    PersonId: "",
    PhoneNumber: "",
    PostCode: "",
    Town: ""
  };

  public render() {
    return (
      <Container>
        <PersonalDetails DefaultState={this.defaultPerson} />
      </Container>
    );
  }
}

export default App;
