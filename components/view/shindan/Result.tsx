/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { calculateResult } from "../../../lib/calculator";
import Button from "../../common/Button";
import {css} from "@emotion/react"

const resultFrame = css({
  minHeight: '180px'
});

const emojiIcons = css({
  minHeight: '56px'
})

type Props = {
  itemHeight: number;
  userHeight: number;
  itemName: string;
  itemUnit: string;
  emoji: string;
};

const Result: React.FC<Props> = ({
  itemName,
  itemUnit,
  itemHeight,
  userHeight,
  emoji,
}) => {
  
  const [resultNumber, setResultNumber] = useState(0);

  useEffect(() => {
    setResultNumber(calculateResult(userHeight, itemHeight));

  }, []);
  return (
    <>
      <section className="mt-4 relative flex flex-col border-4 h-30  border-blue-300 p-4 shadow-md" css={resultFrame}>
        <p className="text-xl font-bold mt-1 sm:text-2xl text-center">
          あなたの身長は{itemName}
          {resultNumber}
          {itemUnit}分
        </p>
        <figure className="flex flex-1 flex-wrap items-center justify-center sm:text-xl mt-4 mx-auto">
          {new Array(resultNumber).fill(null).map((d,index) => {
            return <p key={index}>{emoji}</p>;
          })}
        </figure>
        <div className="mt-4  pt-2 text-center">
          <Button>ツイートする</Button>
        </div>
      </section>
    </>
  );
};

export default Result;
