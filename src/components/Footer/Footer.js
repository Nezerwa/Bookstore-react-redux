import React from "react";
import { BsFillHeartFill, BsGithub } from "react-icons/bs";
import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={s["footer"]}>
      <div className={`${s["footer-container"]} row`}>
        <p>
          Build with <BsFillHeartFill className={s["icon"]} />
          By Nezerwa Eligrand
        </p>
        <p className={s["p-github"]}>
          <BsGithub /> Github :
          <a href="https://github.com/nezerwa">github.com/nezerwa</a>
        </p>
      </div>
    </footer>
  );
}
