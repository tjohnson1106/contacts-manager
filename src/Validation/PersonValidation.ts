import { IValidation } from "./IValidation";
import { MinLengthValidator } from "../Validators/MinLengthValidator";
import { IPersonState } from "../State";

export class PersonValidation implements IValidation {
  private readonly firstNameValidator: MinLengthValidator = new MinLengthValidator(
    1
  );
  private readonly lastNameValidator: MinLengthValidator = new MinLengthValidator(
    2
  );
  public Validate(state: IPersonState, errors: string[]): void {
    if (!this.firstNameValidator.IsValid(state.FirstName)) {
      errors.push("First name is minimum of 1 character");
    }
    if (!this.lastNameValidator.IsValid(state.LastName)) {
      errors.push("Last name is minimum of 2 character");
    }
  }
}
