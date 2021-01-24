import React, { useEffect, useState } from "react";
import { calculateResult } from "../../../lib/calculator";
import Button from "../../common/Button";

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
      <section className="mt-4 border-4  border-blue-300 p-4 shadow-md">
        <p className="text-2xl font-bold mt-1 sm:text-3xl text-center">
          あなたの身長は{itemName}
          {resultNumber}
          {itemUnit}分
        </p>
        <figure className="flex flex-wrap justify-center w-2/3 mt-4 mx-auto">
          {new Array(resultNumber).fill(null).map(() => {
            return <p>{emoji}</p>;
          })}
        </figure>
        <div className="mt-7 text-center">
          <Button>ツイートする</Button>
        </div>
      </section>
    </>
  );
};

export default Result;
