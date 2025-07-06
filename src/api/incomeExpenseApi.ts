// src/api/incomeExpenseApi.ts

import axios from "axios";
import { getApiBaseUrl } from "../../config/config";
import { FinanceDto } from "../types/finance"; 

export async function fetchIncomeExpensePage(page = 0, size = 10, field = 'BOTH') {
  const baseUrl = getApiBaseUrl();
  const response = await axios.get(`${baseUrl}/finance/allFinanceEntry`, {
    params: { page, size, field },
  });
  return response.data;
}

export async function createFinanceEntry(dto: FinanceDto) {
  const baseUrl = getApiBaseUrl();
  const response = await axios.post(`${baseUrl}/finance/create`, dto);
  return response.data;
}



