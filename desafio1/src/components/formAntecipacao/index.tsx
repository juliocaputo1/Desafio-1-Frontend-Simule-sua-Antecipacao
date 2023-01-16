import { FormAntecipacaoStyle } from "./style"

const FormAntecipacao = ({ children }: any) => {
    return (
        <FormAntecipacaoStyle>
            <label>Informe o valor da venda *</label>
            <input required type='number'></input>
            <div>
                <label>Em quantas parcelas *</label>
                <input required type='number'></input>
                <p>Máximo de 12 parcelas</p>
            </div>
            <label>Informe o percentual de MDR *</label>
            <input required type='number'></input>
        </FormAntecipacaoStyle>
    )
}

export default FormAntecipacao