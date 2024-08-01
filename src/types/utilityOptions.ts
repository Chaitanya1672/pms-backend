import { IDataType } from "./timeSeries";

export interface ISymbolSearchParams {
  keywords: string;
  datatype?: IDataType;
}

export interface IHistoricalOptionsParams {
  symbol: string;
  date?: string;
  datatype?: 'json' | 'csv';
}