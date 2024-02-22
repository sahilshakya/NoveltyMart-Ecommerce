export interface IResponse<T> {
  success: boolean;
  message: string;
  status: number;
  data: T;
}

export interface IListResponse<T> {
  count: string; // should be of number type, (currently set as string type because API is sending count as string)
  rows: T[];
}
