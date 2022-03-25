import { AxiosResponse } from "axios";
import { ICommponAPI } from "../components/starwars/interface/common.interface";

interface MockAxiosResponseParams {
  data?: any;
  headers?: any;
  config?: any;
  status?: number;
  statusText?: string;
}

interface PagingHeaders {
  "x-paging-total-count": number;
  "x-paging-page-count": number;
  "x-paging-page-size": number;
  "x-paging-page": number;
}

export const getCommonMock = (): ICommponAPI => {
  return {
    count: 1,
    next: "next",
    previous: "previous",
  };
};

export const getMockPagingHeaders = (): PagingHeaders => ({
  "x-paging-total-count": 20,
  "x-paging-page-count": 1,
  "x-paging-page-size": 20,
  "x-paging-page": 0,
});

export function getMockAxiosResponse(
  params: MockAxiosResponseParams = {}
): AxiosResponse {
  const res = {
    data: null,
    headers: {},
    config: {},
    status: 200,
    statusText: "OK",
    ...params,
  };
  return res;
}
