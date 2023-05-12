import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  handleButtonClick: () => void;
}
const Alert = ({ children, handleButtonClick }: Props) => {
  return (
    <>
      <div className="alert alert-primary alert-dismissable">
        {children}{" "}
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          data-bs-dismiss="alert"
          //   onClick={handleButtonClick}
        ></button>
      </div>
    </>
  );
};

export default Alert;
