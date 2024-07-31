import { IDataType } from "./timeSeries";

export interface ISymbolSearchParams {
  keywords: string;
  datatype?: IDataType;
}