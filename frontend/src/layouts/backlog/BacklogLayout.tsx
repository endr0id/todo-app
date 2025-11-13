import { css } from "../../../styled-system/css";

const BacklogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={css({
        display: "flex",
        gap: "5px",
      })}
    >
      {children}
    </div>
  );
};

export default BacklogLayout;
