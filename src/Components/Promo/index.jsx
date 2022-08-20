import React from "react";

export const Promo = () => {
  return (
    <div className="w-full bg-slate-100">
      <div className="w-11/12 m-auto justify-center">
        <div className="uppercase xs:text-xl sm:text-xl sm:text-red-600 md:pt-44 md:text-4xl ">
          MA BRAND
        </div>
        <div>
          <h1 className="uppercase xs:text-2xl sm:text-2xl sm:text-red-600 md:text-7xl ">
            коммуникационное агентство полного цикла
          </h1>
        </div>
        <div className="uppercase xs:text-xs sm:text-red-600 md:text-sm ">
          диалог бизнеса <br />с клиентом под ключ
        </div>
      </div>
    </div>
  );
};
