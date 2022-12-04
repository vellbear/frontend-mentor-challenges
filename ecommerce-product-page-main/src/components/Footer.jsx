import React from "react";

function Footer() {
  return (
    <div className="absolute w-fit bottom-2 text-xs left-0 right-0 mx-auto">
      Challenge by{" "}
      <a
        className="text-link underline"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        className="text-link underline"
        href="https://llxovell.github.io/my-portfolio/"
      >
        Levell Mack
      </a>
      .
    </div>
  );
}

export default Footer;
