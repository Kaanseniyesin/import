import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-2 p-5 text-sm">
      <p>
        Powered by{" "}
        <a
          href="https://www.comingsoon.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
        >
          Dexwatcher
        </a>{" "}
        and{" "}
        <a
          href="https://www.messari.io/"
          rel="noopener noreferrer"
          target="_blank"
          className="font-bold"
        >
          Messari
        </a>
      </p>
    </footer>
  );
};

export default Footer;
