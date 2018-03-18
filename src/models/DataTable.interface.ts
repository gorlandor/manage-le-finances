export interface IDataRow {
  key: string,
  values: any[]
  editable: boolean,
  removable: boolean
};

export interface IDataTableProps {
  headers: string[],
  data: IDataRow[]
};