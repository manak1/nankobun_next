import Logo from "../components/icons/Logo";
import Default from "../components/layout/Default";
import Button from "../components/common/Button"
import SnsGroup from "../components/common/SnsGroup"
export default function Home() {
  
  return (
    <Default>
      <div className="pt-4 container mx-auto">
        <h2 className="text-xl font-bold text-center">身長診断メーカー</h2>
        <Logo className="h-20 mt-4 mx-auto text-center" />
        <p className="text-sm mt-5 text-center">
          いろんな物であなたの身長をあらわすことが出来るサイトです。
          <br />
          サイト内の診断を試してみたり、面白い診断を作ってみてください！
        </p>
        <div className="text-center mt-6">
          <Button href="/">
            診断してみる
          </Button>
        </div>
        <SnsGroup/>
        <ul className="flex space-x-2 mt-12 justify-center"></ul>
      </div>
    </Default>
  );
}
