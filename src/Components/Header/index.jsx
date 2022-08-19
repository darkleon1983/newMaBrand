import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export const Header = (props) => {
  return (
    <div className="">
      <ul
        className="
         grid h-screen text-2xl 
         sm: h-min sm:text-red-600 sm:text-sm sm:w-11/12 sm:grid-flow-col sm:grid sm:auto-cols-min sm:justify-end
         md:text-green-600 
         lg:text-yellow-600"
        id="header"
      >
        <Link className="md: ml-6md: ml-6" to="/projects">
          Проекты
        </Link>
        <Link className="md: ml-6md: ml-6" to="/about">
          О,MAB
        </Link>
        <Link className="md: ml-6md: ml-6" to="/contacts">
          Контакты
        </Link>
        <Link className="md: ml-6" to="/merch">
          Мерч
        </Link>
      </ul>
    </div>
  );
};
