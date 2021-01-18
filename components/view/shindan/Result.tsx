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
      <section>
        <h2 className="text-3xl">
          あなたの身長は{itemName}
          {resultNumber}
          {itemUnit}分
        </h2>
      </section>
    </>
  );
};

export default Result;
