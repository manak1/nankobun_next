/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { getShindan, getOther,FirebaseData } from "../../lib/firebase";
import Form from "../../@types/form";
import Default from "../../components/layout/Default";
import Button from "../../components/common/Button";
import Result from "../../components/view/shindan/Result";
import { useForm } from "react-hook-form";
import SnsGroup from "../../components/common/SnsGroup";
import { useRouter } from "next/router";
import {css} from "@emotion/react"
import Other from "../../components/view/shindan/Other"


type Props = {
  shindan: FirebaseData
};

type InputForm = {
  userHeight: number;
};

const emojiIcon = css({
  fontSize: '80px',
  lineHeight: 1
})

/* 
TODO: 作成して遷移してきたらシェアしよう！！という旨のモーダルを表示する || 普通にシェアボタンを作っておく。 || どっちも
*/

const Sokutei: NextPage<Props> = ({ shindan }) => {
  const [otherShindanList, setOtherShindanList] = useState([])
  const [showResult, setShowResult] = useState(false);
  const [formUserHeight, setFormUserHeight] = useState(0);
  const { register, handleSubmit, reset, errors } = useForm<InputForm>({
    mode: "onChange",
    defaultValues: {
      userHeight: null,
    },
  });

  const router = useRouter();
  const docId = router.query.id as string;

  const onSubmit = handleSubmit((formData) => {
    setFormUserHeight(formData.userHeight);
    setShowResult(true);
  });

  useEffect(() => {
    const init = async()=> {
      const tempShindanList = await getOther(shindan.randomType)
      setOtherShindanList(tempShindanList)
      console.log(tempShindanList)
    }
    init()
   }, [])

  return (
    <>
      <Default>
        <section className="pt-4">
          <h1 className="font-bold text-xl text-center">
            あなたの身長は{shindan.name}何{shindan.unit}分!!?
          </h1>
          <div className="mt-4 mx-auto text-center">
            <p css={emojiIcon}>
              {shindan.emoji.native}
            </p>
          </div>
          <form className="mt-4" action="#" onSubmit={onSubmit}>
            <div className="items-center">
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
                    message: "身長盛らない😡",
                  },
                })}
              />
              <p className="text-red-500">{errors.userHeight?.message}</p>
            </div>
            <div className="text-center mt-2">
              <Button submit widthFull>
                診断する
              </Button>
            </div>
          </form>

          {showResult ? (
            <div className="animate__animated animate__fadeIn animate__faster">
              <h2 className="mt-8 text-xl text-center font-medium">
                🎉 診断結果 🎉
              </h2>

              <Result
                itemName={shindan.name}
                itemUnit={shindan.unit}
                itemHeight={shindan.height}
                userHeight={formUserHeight}
                emoji={shindan.emoji.native}
              />
              <div className="mt-6">
                <h2 className="text-xl font-bold text-center">🕵️‍♂️解説</h2>
                <p className="mt-4">
                  {shindan.author}さんによると、{shindan.name}の高さは平均
                  {shindan.height}cmと言われているよ！ みんなの身長は
                  {shindan.name}何{shindan.unit}分だったかな？👀
                </p>
                <p className="mt-2">
                  面白い結果が出たらツイッターで共有したり、友達に紹介してみてね！
                  自分の診断を作る事も出来るので色々楽しんでいってね🙋‍♂️
                </p>
              </div>
              <SnsGroup docId={docId} />
              <Other otherShindanList={otherShindanList} />
            </div>
          ) : (
            ""
          )}
        </section>
      </Default>
    </>
  );
};

export async function getServerSideProps({ params, router }) {
  const docId = params.id;
  const shindan = await getShindan(docId);
  if (!shindan) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      shindan,
    },
  };
}

export default Sokutei;
