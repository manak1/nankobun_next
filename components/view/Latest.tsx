import React from "react";
import Form from "../../@types/form";
import Ogp from "../common/Ogp";
import Button from "../common/Button";
type Props = {
  shindanList: Form[];
};

const Latest: React.FC<Props> = ({ shindanList }) => {
  return (
    <>
      <section className="px-8 pt-8">
        <h2 className="text-3xl font-bold text-center">✨新着の診断</h2>
        <ul className="space-y-6 mt-8">
          {shindanList.map((shindan) => {
            return (
              <>
                <li>
                  <Ogp shindanData={shindan} />
                </li>
              </>
            );
          })}
        </ul>
        <div>
          <Button>もっと読み込む</Button>
        </div>
      </section>
    </>
  );
};

export default Latest;
