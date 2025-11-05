import { PlusIcon } from "@heroicons/react/24/outline";
import {
  columnPanelBottomRecipe,
  columnPanelContentsRecipe,
  columnPanelHeaderRecipe,
  columnPanelWrapper,
} from "./ColumnPanel.style";

const ColumnPanelHeader = ({ title }: { title: string }) => {
  return <div className={columnPanelHeaderRecipe}>{title}</div>;
};

const ColumnPanelContents = ({ children }: { children: React.ReactNode }) => {
  return <div className={columnPanelContentsRecipe}>{children}</div>;
};

const ColumnPanelBottom = () => {
  const text = "Add item";
  return (
    <div className={columnPanelBottomRecipe}>
      <PlusIcon width="1em" height="1em" />
      {text}
    </div>
  );
};

const ColumnPanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={columnPanelWrapper}>
      <ColumnPanelHeader title="Title" />
      <ColumnPanelContents>{children}</ColumnPanelContents>
      <ColumnPanelBottom />
    </div>
  );
};

export default ColumnPanel;
