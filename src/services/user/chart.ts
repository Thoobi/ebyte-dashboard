import { apiInstance } from "../apiClient";

export const getChartData = async () => {
  const response = await apiInstance.get("/charts_data");
  return response.data;
};
