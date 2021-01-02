/** @jsxImportSource @emotion/react */
import React from "react";
import Link from "next/link";
import { css } from "@emotion/react";

const FooterMessage = css({
  "&:before": {
    position: "absolute",
    top: "15px",
    left: "-20px",
    transform: " rotate(15deg)",
    content: "''",
    width: "13px",
    height: "2px",
    backgroundColor: "#555",
    display: "block",
  },
  "&:after": {
    position: "absolute",
    top: "-5px",
    left: "-20px",
    transform: " rotate(-25deg)",
    content: "''",
    width: "18px",
    height: "2px",
    backgroundColor: "#555",
    display: "block",
  },
});

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white pt-4 pb-4">
      <div className="container px-4 text-center mx-auto">
        <h2 className="font-bold">作者</h2>
        <div className="mt-2">
          <a
            href="https://twitter.com/mikeanakida"
            className="flex justify-center items-center block space-x-6"
          >
            <div className="text-center">
              <img
                src="/static/images/footer/penguin.svg"
                className="rounded-full mx-auto border bg-white w-12"
                alt="作者のアイコン"
              />
              <span className="text-sm"> manaki </span>
            </div>

            <div className="l-footer__messages relative">
              <p
                className="text-sm l-footer__message text-left ml-2"
                css={FooterMessage}
              >
                デザイン、開発を担当しました!
                <br />
                <a className="text-blue-400" href="https://twilink.click">
                  twilink
                </a>
                もよろしくね！
              </p>
            </div>
          </a>
        </div>
        <div className="mt-6 space-x-2">
          <Link href="/legal">
            <a href="#" className="text-blue-400">
              利用規約
            </a>
          </Link>
          <span>/</span>
          <a className="text-blue-400" href="https://twitter.com/mikeanakida">
            Twitter
          </a>
        </div>
        <small className="mt-2 inline-block">&copy; 🐧hungrypenguin</small>
      </div>
    </footer>
  );
};

export default Footer;
