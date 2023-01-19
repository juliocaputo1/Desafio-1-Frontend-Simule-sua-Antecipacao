import { DivConteudoTotal } from "./style"
import { DivResultadosStyle, ResultadosStyle, FormAntecipacaoStyle, DivFormStyle } from "./style"
import { useState } from "react"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../services/api";

function Dashboard() {

    const [result, setResult] = useState([])

    const formSchema = yup.object().shape({
        amount: yup.number().required("Valor da venda obrigatório").moreThan(999, "Valor da venda deve ser R$1000 ou mais"),
        installments: yup.string().required("Número de parcelas obrigatório"),
        mdr: yup.string().required("Percentual de MDR obrigatório"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });

    const onSubmitFunction = (data: any) => {
        api.post<any>("/", data)
            .then((response) => {
                console.log(response.data)
                setResult(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <DivConteudoTotal>
            <DivFormStyle>
                <h1>Simule sua Antecipação</h1>
                <FormAntecipacaoStyle onSubmit={handleSubmit(onSubmitFunction)}>
                    <label>Informe o valor da venda *
                        <input required type='number' {...register("amount")}></input>
                        {errors.title?.message}
                    </label>
                    <div>
                        <label>Em quantas parcelas *
                            <input required type='number' {...register("installments")} ></input>
                            <p>Máximo de 12 parcelas</p>
                        </label>
                    </div>
                    <label>Informe o percentual de MDR *</label>
                    <input required type='number'  {...register("mdr")}></input>
                    <button type="submit">Simular</button>
                </FormAntecipacaoStyle>
            </DivFormStyle>
            <DivResultadosStyle>
                <h2><i>VOCÊ RECEBERÁ:</i></h2>
                <ResultadosStyle>
                    <ResultadosStyle>
                        <li>
                            <ul>Amanhã: <span>R${result[1]}</span></ul>
                            <ul>Em 15 dias: <span>R${result[15]}</span></ul>
                            <ul>Em 30 dias: <span>R${result[30]}</span></ul>
                            <ul>Em 90 dias: <span>R${result[90]}</span></ul>
                        </li>
                    </ResultadosStyle>
                </ResultadosStyle>
            </DivResultadosStyle>
        </DivConteudoTotal>
    )
}

export default Dashboard