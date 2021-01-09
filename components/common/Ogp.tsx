/** @jsxImportSource @emotion/react */
import React from "react";
import Form from "../../@types/form";
import { css } from "@emotion/react";

const ogpBox = css({
  backgroundColor: "#72caf3",
  fontFamily: "fontMplus",
});

const buttonCta = css({
  backgroundColor: "#26a6ff",
});

const ogpTop = css({
  flexBasis: "60%",
});

const ogpBottom = css({
  flexBasis: "40%",
});

const ogpTitle = css({
  right: "5px",
  bottom: "5px",
  fontSize: "10px",
});

type Props = {
  shindanData: Form;
};

const Ogp: React.FC<Props> = ({ shindanData }) => {
  return (
    <div
      css={ogpBox}
      className="p-4 relative flex flex-col bg-blue-400 text-center mx-auto rounded text-white h-52"
    >
      <div css={ogpTop}>
        <h2 className="font-bold text-4xl mt-2">あなたの身長は</h2>
        <p className="font-bold text-4xl mt-2">
          <span style={{ fontSize: "45px" }} className="mr-1">
            {shindanData.emoji}
          </span>
          何個分?
        </p>
      </div>
      <div css={ogpBottom}>
        <a
          href="#"
          css={buttonCta}
          className="inline-block mx-auto text-xl font-bold pointer-events-none bg-blue-500 mt-4 text-white py-2 w-40 text-center shadow rounded-md"
        >
          診断する
        </a>
      </div>
      <span className="absolute text-xs" css={ogpTitle}>
        身長診断メーカー
      </span>
    </div>
  );
};

export default Ogp;
