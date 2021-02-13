import Link from "next/link";
import React from "react";
import Button from "../common/Button";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-300 shadow-xl w-full container mx-auto border-b border-l border-r">
      <div className="flex items-center justify-between mx-auto container px-4 py-2">
        <Link href="/">
          <a href="#">
            <h1 className="font-bold text-xl text-white">
              <span className="text-2xl mr-1">🙋‍♂️</span>身長診断メーカー
            </h1>
          </a>
        </Link>
        <Button href="/shindan/create" rounded>
          診断を作る
        </Button>
      </div>
    </header>
  );
};

export default Header;
