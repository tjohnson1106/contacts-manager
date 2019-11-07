import React, { Component } from "react";

import { IPersonState } from "../State";
import { IValidation } from "./IValidation";
import { PersonValidation } from "./PersonValidation";
import { AddressValidation } from "./AddressValidation";
import { PhoneValidation } from "./PhoneValidation";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

interface IValidationProps {
  CurrentState: IPersonState;
  CanSave: (canSave: boolean) => void;
}

class FormValidation extends Component<IValidationProps> {
  private failures: string[];
  private validation: IValidation[];

  constructor(props: IValidationProps) {
    super(props);
    this.validation = new Array<IValidation>();
    this.validation.push(new PersonValidation());
    this.validation.push(new AddressValidation());
    this.validation.push(new PhoneValidation());
  }

  public render() {
    this.Validate();
    const errors = this.failures.map(function it(failure) {
      return (
        <Row key={failure}>
          <Col>
            <label>{failure}</label>
          </Col>
        </Row>
      );
    });
    return <Col>{errors}</Col>;
  }

  private Validate() {
    this.failures = new Array<string>();
    this.validation.forEach((validation) => {
      validation.Validate(this.props.CurrentState, this.failures);
    });
    this.props.CanSave(this.failures.length === 0);
  }
}

export default FormValidation;
