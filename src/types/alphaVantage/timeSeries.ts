export interface IIntraDayParams {
  symbol?: string
  interval?: string
  outputsize?: IOutputSize
  month?: string
  datatype?: IDataType
}

export interface IDailyParams {
  symbol: string
  outputsize?: IOutputSize
  datatype?: IDataType
}
export interface IWeeklyParams {
  symbol: string;
  datatype?: IDataType;
}

export interface IMonthlyParams {
  symbol: string;
  datatype?: IDataType;
}

export interface IGlobalQuoteParams {
  symbol: string;
  datatype?: IDataType;
}

export type IOutputSize = 'compact' | 'full'
export type IDataType = 'json' | 'csv'
