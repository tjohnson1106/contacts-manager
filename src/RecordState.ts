import { IPersonState } from "./State";

export interface IRecordSate {
  IsActive: boolean;
}

export class RecordState implements IRecordSate {
  public IsActive: boolean;
}

export type PersonRecord = RecordState & IPersonState;
