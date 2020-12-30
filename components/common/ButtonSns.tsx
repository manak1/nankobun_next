/** @jsxImportSource @emotion/react */
import { fromJSON } from "postcss";
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react"
type Props = {
  href: string;
  name: string;
  icon: string;
  bgColor: string,
};



const ButtonSns: React.FC<Props> = ({ href, icon, bgColor, name, children }) => {

  const button = css({
    backgroundColor: bgColor
  })

  return (
    <a
      href={href}
      style={{width:'120px'}}
      className="flex inline-block py-1 text-white justify-center rounded"
      css={button}
    >
      <img src={icon} className="w-4 mr-2" alt="#" />
      {children}
    </a>
  );
};

export default ButtonSns;
