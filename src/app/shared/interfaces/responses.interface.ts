export interface IPage {
  totalCount?: number;
  limit: number;
  page: number;
  skip?: number;
}

export interface IPagedResponse {
  data?: any;
  pageInfo?: IPage;
}
