import React from "react";

type Props = {
  onClick: () => void;
};
const Modal: React.FC<Props> = ({ children, onClick }) => {
  return (
    <div
      className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Modal;
