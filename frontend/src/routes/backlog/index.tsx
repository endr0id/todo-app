import { createFileRoute } from "@tanstack/react-router";
import { useBacklog } from "../../features/backlog/api/getBacklog";
import Board from "../../features/backlog/components/Board";
import Card from "../../features/backlog/components/Card";
import BacklogLayout from "../../layouts/backlog/BacklogLayout";

export const Route = createFileRoute("/backlog/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, error, isLoading } = useBacklog();

  if (isLoading) return <div>loading...</div>;

  if (error) {
    return <div>error</div>;
  }

  return (
    <>
      <BacklogLayout>
        {data ? (
          data.map((backlog, index) => (
            <Board
              key={index}
              title={backlog.title}
              description={backlog.description}
            >
              <Card />
            </Board>
          ))
        ) : (
          <div>undefined</div>
        )}
      </BacklogLayout>
    </>
  );
}
