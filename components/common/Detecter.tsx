import React from "react";

type Props = {
  onClick: () => void;
};
const Detecter: React.FC<Props> = ({ children, onClick }) => {
  return (
    <div
      className="modal h-screen w-full fixed left-0 z-40 top-0 flex justify-center items-center bg-black bg-opacity-50"
      onClick={onClick}
    ></div>
  );
};

export default Detecter;
