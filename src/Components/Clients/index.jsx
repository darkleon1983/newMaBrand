import React from "react";
import { ClientSvg } from "./ClientsSvg/index";

export const Clients = (props) => {
  return (
    <div>
      <div>
        <h2>Клиенты</h2>
      </div>
      <div>
        <div>
          <ClientSvg source="img/neoTran.svg" />
        </div>
        <div>
          <ClientSvg source="img/cvetMet.svg" />
        </div>
        <div>
          <ClientSvg source="img/polus.svg" />
        </div>
        <div>
          <ClientSvg source="img/mazda.svg" />
        </div>
        <div>
          <ClientSvg source="img/sibup.svg" />
        </div>
        <div>
          <ClientSvg source="img/abricos.svg" />
        </div>
      </div>
    </div>
  );
};
