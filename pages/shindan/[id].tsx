import React from "react";
import { NextPage } from "next";
import { getShindan } from "../../lib/firebase";
import Form from "../../@types/form";
import Default from "../../components/layout/Default";
import { Emoji } from "emoji-mart";

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
            あなたの身長は{shindan.name}何個分!!?
          </h1>
          <div className="mt-2 mx-auto text-center">
            <Emoji emoji={shindan.emoji.id} size={96} />
          </div>
          {JSON.stringify(shindan)}
          <form action="#">
            <div>
              <input
                type="text"
                className="form-input bg-white border w-full"
                placeholder="あなたの身長を入力してください"
              />
            </div>
          </form>
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
