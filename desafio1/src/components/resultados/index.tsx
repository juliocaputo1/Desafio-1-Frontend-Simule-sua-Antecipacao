import { ResultadosStyle } from "./style";

const Resultados = ({ children }: any) => {
    return (
        <ResultadosStyle>
            <li>
                <ul>Amanhã:</ul>
                <ul>Em 15 dias:</ul>
                <ul>Em 30 dias:</ul>
                <ul>Em 90 dias:</ul>
            </li>
        </ResultadosStyle>
    )
}

export default Resultados