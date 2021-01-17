import React, { useEffect, useState } from "react";
import { calculateResult } from "../../../lib/calculator";

type Props = {
  itemHeight: number;
  userHeight: number;
};

const Result: React.FC<Props> = ({ itemHeight, userHeight }) => {
  const [resultNumber, setResultNumber] = useState(0);

  useEffect(() => {}, []);
  return (
    <>
      <section>
        <h2>test</h2>
      </section>
    </>
  );
};

export default Result;
