/** @jsxImportSource @emotion/react */
import React from "react";
import Link from "next/link";
import { css } from "@emotion/react";

type Props = {
  href?: string;
  children: string;
  onClick?: () => void;
};

const buttonColor = css({
  backgroundColor: "#26a6ff;",
});

const Button: React.FC<Props> = ({ children, href, onClick }) => {
  return (
    <span className="text-center">
      {href ? (
        <Link href={href}>
          <a
            href="#"
            className="inline-block mx-auto bg-blue-500 text-white hover:opacity-75 py-2 w-32 text-center shadow rounded-md"
          >
            {children}
          </a>
        </Link>
      ) : (
        <a
          href="#"
          onClick={onClick}
          className="inline-block mx-auto bg-blue-500 text-white py-2 w-32 hover:opacity-75 text-center shadow rounded-md"
        >
          {children}
        </a>
      )}
    </span>
  );
};

export default Button;
