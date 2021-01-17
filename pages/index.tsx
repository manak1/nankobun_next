import Logo from "../components/icons/Logo";
import Default from "../components/layout/Default";
import Button from "../components/common/Button";
import SnsGroup from "../components/common/SnsGroup";
import Latest from "../components/view/Latest";
import { useEffect, useState } from "react";
import { getLatest } from "../lib/firebase";

export default function Home() {
  const [shindanList, setShindanList] = useState([]);
  useEffect(() => {
    const init = async () => {
      const tempShindanList = await getLatest();
      console.log(tempShindanList);
      setShindanList(tempShindanList);
    };
    init();
  }, []);
  return (
    <Default>
      <div className="pt-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center">身長診断メーカー</h2>
        <Logo className="h-20 mt-6 mx-auto text-center" />
        <p className="text-sm mt-5 text-center leading-relaxed">
          いろんなモノであなたの身長をあらわすことが出来るサイトです。
          <br />
          面白いモノで診断を作ってみたり、測定してみてください！
        </p>

        <div className="mt-4 text-center">
          <Button href="/shindan/create" rounded>
            診断を作る
          </Button>
        </div>
        <Latest shindanList={shindanList} />
      </div>
    </Default>
  );
}
