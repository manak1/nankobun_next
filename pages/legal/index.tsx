import React, { useEffect } from "react";
import Default from "../../components/layout/Default";
import { NextPage, NextPageContext } from "next";
import ReactMarkdown from "react-markdown";

type Props = {
  legal: any;
};

const Legal: NextPage<Props> = ({ legal }) => {
  return (
    <>
      <Default>
        <div className="p-legal">
          <ReactMarkdown source={legal.default} />
        </div>
      </Default>
    </>
  );
};

Legal.getInitialProps = async (ctx: NextPageContext) => {
  const legalContent = await require(`../../doc/legal.md`);
  return {
    legal: legalContent,
  };
};

export default Legal;
