import { IPersonState } from "./State";

export interface IRecordState {
  IsActive: boolean;
}

export class RecordState implements IRecordState {
  public IsActive: boolean;
}

export type PersonRecord = RecordState & IPersonState;
