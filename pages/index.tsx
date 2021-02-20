import Default from "../components/layout/Default";
import Button from "../components/common/Button";
import Latest from "../components/view/Latest";
import { useEffect, useState } from "react";
import { getLatest } from "../lib/firebase";

export default function Home() {
  const [shindanList, setShindanList] = useState([]);
  useEffect(() => {
    const init = async () => {
      const tempShindanList = await getLatest();
      setShindanList(tempShindanList);
    };
    init();
  }, []);
  return (
    <Default>
      <div className="pt-8 container mx-auto">
        <h2 className="text-xl font-bold text-center tracking-wide">
          あなたの身長は〇〇〇何個分!?
        </h2>
        <img
          src="/static/images/logo/logo.png"
          className="w-60 mx-auto mt-4"
          alt=""
        />
        <p className="text-sm mt-6 text-center leading-relaxed w-3/4 mx-auto">
          いろんなモノであなたの身長を測ることが出来るサイトです。
          面白いモノで診断を作ってみたり、測定してみてください！
        </p>
        <div className="mt-8 text-center">
          <Button href="/shindan/create" rounded width="medium">
            診断を作る
          </Button>
        </div>
        <Latest shindanList={shindanList} />
      </div>
    </Default>
  );
}
