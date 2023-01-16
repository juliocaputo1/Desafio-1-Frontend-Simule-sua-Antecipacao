import { DivForm } from "../divForm";
import { DivConteudoTotalStyle } from "./style"
import DivResultados from "../divResultados";

const DivTotal = () => {
    return (
        <DivConteudoTotalStyle>
            <DivForm></DivForm>
            <DivResultados></DivResultados>
        </DivConteudoTotalStyle>
    )
}

export default DivTotal