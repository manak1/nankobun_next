import React from "react";
import Link from "next/link";

type Props = {
  href?: string;
  children: string;
  onClick?: ()=> void;
};

const Button: React.FC<Props> = ({ children, href }) => {
  return (
    <span className="text-center">
      {href ? (
        <Link href={href}>
          <a href="#"  className="inline-block mx-auto bg-blue-500 text-white py-2 w-32 text-center shadow rounded-md">{children}</a>
        </Link>
      ) : (
        <a
          href="#"
          className="inline-block mx-auto bg-blue-500 text-white py-2 w-32 text-center shadow rounded-md"
        >
          {children}
        </a>
      )}
    </span>
  );
};

export default Button;
