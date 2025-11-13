import { useQuery } from "@tanstack/react-query";
import type { BacklogResponse } from "../../../types/api/models/BacklogResponse";

export const useBacklog = () => {
  const result = useQuery<BacklogResponse[]>({
    queryKey: ["backlog"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8080/backlog");
      return res.json();
    },
  });
  return { ...result };
};
