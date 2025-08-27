import { create } from "zustand";
import { getUserDetails } from "@/services/user/user";
import { fetchTaskProgress, getUserTasks } from "@/services/user/task";
import { postChat, getAllChat } from "@/services/user/chat";

export interface UserStore {
  fetchUserDetails: () => void;
  fetchTaskProgress: () => void;
  fetchAllTask: () => void;
  postChatMessage: (message: string) => Promise<void>;
  fetchAllChats: () => void;
  user: null | {
    firstName: string;
    lastName: string;
    age: string;
    email: string;
  };
  tasks:
    | null
    | {
        id: string;
        title: string;
        status: string;
        hours: string;
        icon: string;
      }[];
  taskProgress:
    | null
    | [
        {
          id: string;
          label: string;
          count: number;
          value: string;
          tasks: {
            id: string;
            title: string;
          }[];
        }
      ];
  successMessage: string;
  chatMessage: string;
  setChatMessage: (message: string) => void;
  chatData: [
    {
      id: string;
      message: string;
      timestamp: number;
    }
  ];
}

export const useUserStore = create(
  (set): UserStore => ({
    user: null,
    taskProgress: null,
    tasks: null,
    successMessage: "",
    chatMessage: "",
    chatData: [
      {
        id: "",
        message: "",
        timestamp: 0,
      },
    ],
    setChatMessage: (message: string) => set({ chatMessage: message }),
    fetchUserDetails: async () => {
      const userDetails = await getUserDetails();
      set({ user: userDetails });
    },
    fetchTaskProgress: async () => {
      const progress = await fetchTaskProgress();
      set({
        taskProgress: progress,
      });
    },
    fetchAllTask: async () => {
      const allTask = await getUserTasks();
      set({ tasks: allTask });
    },
    postChatMessage: async (message: string) => {
      const postResponse = await postChat(message);
      set({ successMessage: postResponse });
    },
    fetchAllChats: async () => {
      const allChats = await getAllChat();
      set({ chatData: allChats });
    },
  })
);
