import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { css } from "../../../styled-system/css";
import type { BacklogResponse } from "../../types/api/models/BacklogResponse";

export const Route = createFileRoute("/backlog/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, error, isPending } = useQuery<BacklogResponse[]>({
    queryKey: ["backlog"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8080/backlog");
      return res.json();
    },
  });

  if (isPending) return <div>loading...</div>;

  if (error) {
    return <div>error...</div>;
  }

  return (
    <>
      {data.map((content, index) => (
        <div
          key={index}
          className={css({
            borderRadius: "md",
            borderWidth: "1px",
            borderColor: "token(colors.emphasis)",
          })}
        >
          <li>{content.id}</li>
          <li>{content.title}</li>
          <li>{content.description}</li>
          <li>{content.position}</li>
        </div>
      ))}
    </>
  );
}
