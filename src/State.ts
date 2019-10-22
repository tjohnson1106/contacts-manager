import { StringOrNull } from "./Types";

export interface IPersonState {
  FirstName: string;
  LastName: string;
  Address1: string;
  Address2: StringOrNull;
  Town: string;
  County: string;
  PhoneNumber: string;
  PostCode: string;
  DateOfBirth: StringOrNull;
  PersonId: string;
}
