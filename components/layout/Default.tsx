/** @jsxImportSource @emotion/react */
import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { css } from "@emotion/react";

const screenSize = css`
  height: 85vh;
`;

const Default: React.FC = ({ children }) => {
  return (
    <>
      <div className="bg-base" css={screenSize}>
        <Header />
        <main className="container mx-auto px-4 min-h-90">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Default;
