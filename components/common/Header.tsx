import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-300 shadow-xl w-full container mx-auto border-b border-l border-r">
      <div className="flex items-center justify-center mx-auto container px-4 py-3">
        <Link href="/">
          <a href="#">
            <h1 className="font-bold text-xl text-white">
              <span className="text-2xl mr-1">🙋‍♂️</span>身長診断メーカー
            </h1>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
