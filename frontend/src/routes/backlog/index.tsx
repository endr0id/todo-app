import { createFileRoute } from "@tanstack/react-router";
import { useBacklog } from "../../features/backlog/api/getBacklog";
import ColumnPanel from "../../features/backlog/components/ColumnPanel/ColumnPanel";
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
            <ColumnPanel key={index} title={backlog.title}>
              context
            </ColumnPanel>
          ))
        ) : (
          <div>undefined</div>
        )}
      </BacklogLayout>
    </>
  );
}
