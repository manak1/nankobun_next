/** @jsxImportSource @emotion/react */
import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Default: React.FC = ({ children }) => {
  return (
    <>
      <div className="bg-base">
        <Header />
        <main className="container mx-auto px-5 min-h-90 pb-24 bg-white border-l border-r border-t">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Default;
