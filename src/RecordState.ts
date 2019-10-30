import { IPersonState } from "./State";

export interface IRecordSate {
  IsActi9ve: boolean;
}

export class RecordState implements IRecordSate {
  public IsActi9ve: boolean;
}

export type PersonRecord = RecordState & IPersonState;
