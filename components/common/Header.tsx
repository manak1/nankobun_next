import React from "react"

const Header: React.FC = () => {
  return (
    <header className="bg-white w-full">
    <div className="flex items-center justify-between mx-auto container px-4 py-2">
      <h1 className="font-bold text-lg">
        身長診断メーカー
      </h1>
      <a href="#">
        診断を作る
      </a>
    </div>
  </header>
  )
}

export  default Header;