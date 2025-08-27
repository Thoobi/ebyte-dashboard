import { apiInstance } from "../apiClient";
export const getAllChat = async () => {
  const response = await apiInstance.get("/chats");
  return response.data;
};

export const postChat = async (message: string) => {
  const response = await apiInstance.post("/chats", {
    message: message,
    timeStamp: Date.now(),
    id: Math.random().toString(36).substring(7),
  });
  return response.data;
};
