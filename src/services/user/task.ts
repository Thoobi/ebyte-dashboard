import { apiInstance } from "../apiClient";
export const getUserTasks = async () => {
  const response = await apiInstance.get("/tasks");
  return response.data;
};

export const fetchTaskProgress = async () => {
  const response = await apiInstance.get("/taskProgress");
  return response.data;
};
