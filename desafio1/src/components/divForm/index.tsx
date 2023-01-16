import FormAntecipacao from "../formAntecipacao";
import { DivFormStyle } from "./style";

export const DivForm = ({ children }: any) => {
    return (
        <DivFormStyle>
            <h1>Simule sua Antecipação</h1>
            <FormAntecipacao></FormAntecipacao>
        </DivFormStyle>)
}

