import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./componentes/FirstApp";
import { BrowserRouter } from 'react-router-dom';
import { GetPokemon } from "./componentes/GetPokemon";
import "./styles.css";
import { AppRouter } from "./router/AppRouter";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter >
      <AppRouter>
      <FirstApp />
    <GetPokemon />
    </AppRouter>
</BrowserRouter>
);
