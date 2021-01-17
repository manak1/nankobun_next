/** @jsxImportSource @emotion/react */
import React from "react";
import Link from "next/link";
import { css } from "@emotion/react";

type Props = {
  href?: string;
  children: string;
  rounded?: boolean;
  widthFull?: boolean;
  onClick?: () => void;
};

const buttonColor = css({
  backgroundColor: "#26a6ff;",
});

const changeRoundedClass = (rounded: boolean) => {
  return rounded ? "rounded-3xl" : "";
};

const changeWidthClass = (widthFull: boolean) => {
  return widthFull ? "w-full" : "rounded-md";
};

const Button: React.FC<Props> = ({
  children,
  href,
  onClick,
  rounded,
  widthFull,
}) => {
  return (
    <span className="text-center">
      {href ? (
        <Link href={href}>
          <a
            href="#"
            className={`inline-block mx-auto bg-blue-500 text-white hover:opacity-75 py-2 w-32 text-center shadow  ${changeRoundedClass(
              rounded
            )}`}
          >
            {children}
          </a>
        </Link>
      ) : (
        <a
          href="#"
          onClick={onClick}
          className={`inline-block mx-auto bg-blue-500 text-white py-2 w-32 hover:opacity-75 text-center shadow  ${changeRoundedClass(
            rounded
          )} ${changeWidthClass(widthFull)}`}
        >
          {children}
        </a>
      )}
    </span>
  );
};

export default Button;
