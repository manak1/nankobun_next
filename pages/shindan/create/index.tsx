import React, { useState } from "react";
import Default from "../../../components/layout/Default";
import CreateForm from "../../../components/view/create/CreateForm";
import Ogp from "../../../components/common/Ogp";
import { createShindan } from "../../../lib/firebase";
import { useRouter } from "next/router";
import Form from "../../../@types/form";

const Create: React.FC = () => {
  const initialForm = {
    name: "manaki",
    emoji: {
      native: "🍎",
      id: "apple",
    },
    author: "manaki",
    height: 20,
    unit: "個",
  };

  const [form, setForm] = useState(initialForm);
  const router = useRouter();

  async function confirm(confirmForm: Form) {
    const docId = await createShindan(confirmForm);
    router.push(`/shindan/${docId}`);
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
        <CreateForm form={form} setForm={setForm} confirm={confirm} />
        <div className="mt-12 px-4 sm:px-8">
          <p className="font-bold mb-2">完成イメージ✨</p>
          <Ogp shindanData={form} />
        </div>
      </section>
    </Default>
  );
};

export default Create;
