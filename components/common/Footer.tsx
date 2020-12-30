import React from 'react';
import Link from "next/link"

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white pt-4 pb-4">
    <div className="container text-center mx-auto">
      <p>created by <a href="https://twilink.click/mikeanakida" className="text-blue-400 underline">@mikeanakida</a></p>
      <div className="mt-1 space-x-2">
        <Link href="/legal">
          <a href="#">
            利用規約
          </a>
        </Link>
        <span>/</span>
        <a className="text-blue-400" href="https://twitter.com/mikeanakida">
          twitter
        </a>
      </div>
      <small className="mt-4 inline-block">&copy; 🐧hungrypenguin</small>
    </div>
  </footer>
  );
};

export default Footer;