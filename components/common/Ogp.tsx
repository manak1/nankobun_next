/** @jsxImportSource @emotion/react */
import React from "react";
import Form from "../../@types/form";
import { css } from "@emotion/react";

const ogpBox = css({
  backgroundColor: "#72caf3",
  fontFamily: "fontMplus",
  zindex: "-1",
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
      className="p-2 sm:p-4 relative flex flex-col bg-blue-400 text-center mx-auto rounded text-white h-40 sm:h-52"
    >
      <div css={ogpTop}>
        <h2 className="font-bold text-2xl sm:text-4xl mt-2">あなたの身長は</h2>
        <p className="font-bold text-2xl sm:text-4xl mt-2">
          <span className="mr-1 text-3xl sm:text-5xl">
            {shindanData.emoji.native}
          </span>
          何{shindanData.unit}分?
        </p>
      </div>
      <div css={ogpBottom}>
        <a
          href="#"
          css={buttonCta}
          className="inline-block mx-auto text-sm sm:text-xl font-bold pointer-events-none bg-blue-500 mt-2  sm:mt-4 text-white py-2 w-32 text-center shadow rounded-md"
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
