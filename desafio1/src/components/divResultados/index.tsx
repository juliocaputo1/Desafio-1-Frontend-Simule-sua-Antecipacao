import Resultados from "../resultados";
import { DivResultadosStyle } from "./style";

const DivResultados = ({ children }: any) => {
    return (
        <DivResultadosStyle>
            <h2><i>VOCÊ RECEBERÁ:</i></h2>
            <Resultados></Resultados>
        </DivResultadosStyle>
    )
}

export default DivResultados