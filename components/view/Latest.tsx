import React from "react";
import Form from "../../@types/form";
import Ogp from "../common/Ogp";
import Button from "../common/Button";
import Link from "next/link";
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
                  <Link
                    href="/shindan/[id]"
                    as={`/shindan/${shindan.id}`}
                    key={shindan.id}
                  >
                    <a href="#">
                      <Ogp shindanData={shindan} />
                    </a>
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
        <div className="text-center mt-12">
          <Button>もっと読み込む</Button>
        </div>
      </section>
    </>
  );
};

export default Latest;
