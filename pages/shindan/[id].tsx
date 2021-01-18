import React, { useState } from "react";
import { NextPage } from "next";
import { getShindan } from "../../lib/firebase";
import Form from "../../@types/form";
import Default from "../../components/layout/Default";
import { Emoji } from "emoji-mart";
import Button from "../../components/common/Button";
import Result from "../../components/view/shindan/Result";
import { useForm } from "react-hook-form";

type Props = {
  shindan: Form;
};

type InputForm = {
  userHeight: number;
};

/* 
TODO: 作成して遷移してきたらシェアしよう！！という旨のモーダルを表示する || 普通にシェアボタンを作っておく。 || どっちも
*/

const Sokutei: NextPage<Props> = ({ shindan }) => {
  const [showResult, setShowResult] = useState(false);
  const [formUserHeight, setFormUserHeight] = useState(0);
  const { register, handleSubmit, reset, errors } = useForm<InputForm>({
    mode: "onChange",
    defaultValues: {
      userHeight: 0,
    },
  });

  const onSubmit = handleSubmit((formData) => {
    setFormUserHeight(formData.userHeight);
    setShowResult(true);
  });

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
          <form action="#" onSubmit={onSubmit}>
            <div className="flex items-center">
              <input
                type="number"
                className="form-input bg-white border w-full py-2"
                placeholder="あなたの身長を入力してください(cm)"
                name="userHeight"
                ref={register({
                  required: "あなたの身長を入力してください",
                  min: {
                    value: 1,
                    message: "1以上の数字を入力してください",
                  },
                  max: {
                    value: 272,
                    message: "身長嘘つかないで😜",
                  },
                })}
              />
            </div>
          </form>
          <div className="text-center mt-2">
            <Button widthFull>診断する</Button>
          </div>
          {showResult ? (
            <Result
              itemName={shindan.name}
              itemUnit={shindan.unit}
              itemHeight={shindan.height}
              userHeight={formUserHeight}
            />
          ) : (
            ""
          )}
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
