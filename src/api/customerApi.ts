// src/api/customerApi.ts

import axios from "axios";
import { getApiBaseUrl } from "../../config/config";

export async function fetchCustomerDetailsPage(page = 0, size = 10) {
  const baseUrl = getApiBaseUrl();
  const response = await axios.get(`${baseUrl}/customer/allCustomers`, {
    params: { page, size },
  });
  return response.data;
}

