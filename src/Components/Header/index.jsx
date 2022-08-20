import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export const Header = (props) => {
  return (
    <div className="w-full bg-slate-100">
      <ul
        className="
         grid text-2xl 
         sm:sm:text-red-600 sm:text-sm sm:w-11/12 sm:grid-flow-col sm:grid sm:auto-cols-min sm:justify-end
         md:text-green-600 
         lg:text-yellow-600"
        id="header"
      >
        <Link className="sm: mt-12 md: ml-6" to="/projects">
          Проекты
        </Link>
        <Link className="sm: mt-12 md: ml-6" to="/about">
          О,MAB
        </Link>
        <Link className="sm: mt-12 md: ml-6" to="/contacts">
          Контакты
        </Link>
        <Link className="sm: mt-12 md: ml-6" to="/merch">
          Мерч
        </Link>
      </ul>
    </div>
  );
};
