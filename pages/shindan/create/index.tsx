import React, { useState } from "react";
import Default from "../../../components/layout/Default";
import CreateForm from "../../../components/view/create/CreateForm";
import Ogp from "../../../components/common/Ogp";
import { createShindan } from "../../../lib/firebase";

const Create: React.FC = () => {
  const initialForm = {
    name: "manaki",
    emoji: "👩",
    author: "manaki is gorilla",
    height: 20,
    unit: "個",
  };

  const shindanData = {
    name: "リンゴ",
    emoji: "🍎",
    author: "manaki",
    height: 20,
    unit: "個",
  };

  const [form, setForm] = useState(initialForm);

  async function confirm() {
    const docId = await createShindan(form);
  }

  return (
    <Default>
      <section className="pt-4">
        <h1 className="flex items-center justify-center text-2xl font-bold">
          <figure className="w-8 ml-5">
            <img src="/static/images/icons/accessibility.svg" alt="" />
          </figure>
          新しい診断を作る!
        </h1>
        <aside className="text-center text-gray-500">
          <p>( ログイン不要 )</p>
        </aside>
        <CreateForm form={form} setForm={setForm}>
          <div className="mt-12">
            <p>完成イメージ</p>
            <Ogp shindanData={shindanData} />
          </div>
        </CreateForm>
      </section>
    </Default>
  );
};

export default Create;
