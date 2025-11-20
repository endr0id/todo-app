import { useQuery } from "@tanstack/react-query";
import { fetchBacklog } from "../api/fetchBacklog";
import type { BacklogResponse } from "../../../types/api/models/BacklogResponse";

export const useBacklog = () => {
  return useQuery<BacklogResponse[]>({
    queryKey: ["backlog"],
    queryFn: fetchBacklog,
  });
};
