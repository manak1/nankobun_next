import React, { useEffect, useState } from "react";
import { calculateResult } from "../../../lib/calculator";

type Props = {
  itemHeight: number;
  userHeight: number;
  itemName: string;
  itemUnit: string;
};

const Result: React.FC<Props> = ({
  itemName,
  itemUnit,
  itemHeight,
  userHeight,
}) => {
  const [resultNumber, setResultNumber] = useState(0);

  useEffect(() => {
    setResultNumber(calculateResult(userHeight, itemHeight));
  }, []);
  return (
    <>
      <section className="mt-12">
        <h2 className="text-2xl text-center font-bold">診断結果🎉</h2>
        <p className="text-3xl text-center">
          あなたの身長は{itemName}
          {resultNumber}
          {itemUnit}分
        </p>
      </section>
    </>
  );
};

export default Result;
