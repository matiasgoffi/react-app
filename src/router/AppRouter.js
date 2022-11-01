import { Navigate, Route, Routes } from "react-router"
import { FirstApp } from "../componentes/FirstApp"
import { GetPokemon } from "../componentes/GetPokemon"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/firstapp" element= {<FirstApp/>} />
        <Route path="/getpokemon" element= {<GetPokemon/>}/>
        <Route path="/*" element ={<Navigate to="/firstapp"/>} /> {/* si no existe la ruta o pagina que navegue a firstapp, usando el componente Navigate de react router.*/}
    </Routes>
  )
}
