import React from "react";
import { NextPage } from "next";
import { getShindan } from "../../lib/firebase";
import Form from "../../@types/form";
import Default from "../../components/layout/Default";
import { Emoji } from "emoji-mart";
import Button from "../../components/common/Button";

type Props = {
  shindan: Form;
};

/* 
TODO: 作成して遷移してきたらシェアしよう！！という旨のモーダルを表示する || 普通にシェアボタンを作っておく。 || どっちも
*/

const Sokutei: NextPage<Props> = ({ shindan }) => {
  return (
    <>
      <Default>
        <section className="pt-4">
          <h1 className="font-bold text-2xl text-center">
            あなたの身長は{shindan.name}何{shindan.unit}分!!?
          </h1>
          <div className="mt-2 mx-auto text-center">
            <Emoji emoji={shindan.emoji.id} size={96} />
          </div>
          <form action="#">
            <div className="flex items-center">
              <input
                type="text"
                className="form-input bg-white border w-full py-2"
                placeholder="あなたの身長を入力してください(cm)"
              />
            </div>
          </form>
          <div className="text-center mt-2">
            <Button widthFull>診断する</Button>
          </div>
        </section>
      </Default>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const docId = params.id;
  const shindan = await getShindan(docId);
  return {
    props: {
      shindan,
    },
  };
}

export default Sokutei;
