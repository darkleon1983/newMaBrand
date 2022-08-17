import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export const Header = (props) => {
  return (
    <div>
      <ul id="header">
        <Link to="/projects">Проекты</Link>
        <Link to="/about">О, MAB</Link>
        <Link to="/projects">Контакты</Link>
        <Link to="/projects">Магазин</Link>
        <Link to="">Home</Link>
      </ul>
    </div>
  );
};
