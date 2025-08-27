import { apiInstance } from "../apiClient";
export const getUserDetails = async () => {
  const response = await apiInstance.get("/user");
  return response.data;
};
