import { PlusIcon } from "@heroicons/react/24/outline";
import {
  boardContentsRecipe,
  boardDescription,
  boardFooterRecipe,
  boardHeaderRecipe,
  boardRecipe,
  boardTitleRecipe,
} from "./Board.style";
import type { BacklogResponse } from "../../../../types/api/models/BacklogResponse";

interface BoardProps extends Pick<BacklogResponse, "title" | "description"> {
  children: React.ReactNode;
}

type BoardHeader = Pick<BoardProps, "title" | "description">;

const BoardHeader = ({ title, description }: BoardHeader) => {
  return (
    <div className={boardHeaderRecipe}>
      <span className={boardTitleRecipe}>{title}</span>
      <span className={boardDescription}>{description}</span>
    </div>
  );
};

const BoardContents = ({ children }: { children: React.ReactNode }) => {
  return <div className={boardContentsRecipe}>{children}</div>;
};

const BoardFooter = () => {
  const text = "Add item";
  return (
    <div className={boardFooterRecipe}>
      <PlusIcon width="1em" height="1em" />
      {text}
    </div>
  );
};

const Board = ({ title, description, children }: BoardProps) => {
  return (
    <div className={boardRecipe}>
      <BoardHeader title={title} description={description} />
      <BoardContents>{children}</BoardContents>
      <BoardFooter />
    </div>
  );
};

export default Board;
