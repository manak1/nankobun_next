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
      className="p-1 w-4/5 pt-5 pb-6 relative flex flex-col bg-blue-400 text-center mx-auto rounded text-white"
    >
      <div css={ogpTop}>
        <h2 className="font-bold text-xl sm:text-2xl">あなたの身長は</h2>
        <p className="font-bold text-xl sm:text-2xl">
          <span className="mr-1 text-2xl sm:text-3xl">
            {shindanData.emoji.native}
          </span>
          何{shindanData.unit}分?
        </p>
      </div>
      <div className="mt-2" css={ogpBottom}>
        <a
          href="#"
          css={buttonCta}
          className="inline-block text-xs mx-auto font-bold pointer-events-none bg-blue-500 text-white py-2 w-24 text-center shadow rounded-md"
        >
          診断する
        </a>
      </div>
      <span className="absolute" css={ogpTitle}>
        身長診断メーカー
      </span>
    </div>
  );
};

export default Ogp;
